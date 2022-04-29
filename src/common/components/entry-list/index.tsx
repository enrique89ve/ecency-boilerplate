import React, {Component} from "react";
import {History, Location} from "history";
import _ from 'lodash'

import {Global, ProfileFilter} from "../../store/global/types";
import {Account} from "../../store/accounts/types";
import {DynamicProps} from "../../store/dynamic-props/types";
import { Entries, Entry } from "../../store/entries/types";
import { Community, Communities } from "../../store/communities/types";
import { User } from "../../store/users/types";
import { ActiveUser } from "../../store/active-user/types";
import { Reblogs } from "../../store/reblogs/types";
import { UI, ToggleType } from "../../store/ui/types";

import EntryListItem from "../entry-list-item/index";
import { EntryPinTracker } from "../../store/entry-pin-tracker/types";
import MessageNoData from "../message-no-data";
import { _t } from "../../i18n";
import LinearProgress from "../linear-progress";
import { getFollowing } from "../../api/hive";
import isCommunity from "../../helper/is-community";
import axios from "axios";
import { getBlacklist } from "../../../server/util";

interface Props {
  history: History;
  location: Location;
  global: Global;
  dynamicProps: DynamicProps;
  entries: Entry[];
  promotedEntries: Entry[];
  communities: Communities;
  community?: Community | null;
  users: User[];
  activeUser: ActiveUser | null;
  reblogs: Reblogs;
  loading: boolean;
  ui: UI;
  entryPinTracker: EntryPinTracker;
  signingKey: string;
  addAccount: (data: Account) => void;
  updateEntry: (entry: Entry) => void;
  setActiveUser: (username: string | null) => void;
  updateActiveUser: (data?: Account) => void;
  deleteUser: (username: string) => void;
  fetchReblogs: () => void;
  addReblog: (author: string, permlink: string) => void;
  deleteReblog: (author: string, permlink: string) => void;
  toggleUIProp: (what: ToggleType) => void;
  addCommunity: (data: Community) => void;
  trackEntryPin: (entry: Entry) => void;
  setSigningKey: (key: string) => void;
  setEntryPin: (entry: Entry, pin: boolean) => void;
}

interface State {
  mutedUsers: string[];
  blacklist: string[];
  loadingMutedUsers: boolean;
}

export class EntryListContent extends Component<Props, State> {
  state = {
    mutedUsers: [] as string[],
    loadingMutedUsers: false,
    blacklist: [] as string[],
  };

  fetchMutedUsers = () => {
    const { activeUser } = this.props;
    const { loadingMutedUsers } = this.state;
    if (!loadingMutedUsers) {
      if (activeUser) {
        this.setState({ loadingMutedUsers: true });
        getFollowing(activeUser.username, "", "ignore", 100)
          .then((r) => {
            if (r) {
              let filterList = r.map((user) => user.following);
              this.setState({ mutedUsers: filterList });
            }
          })
          .finally(() => {
            this.setState({ loadingMutedUsers: false });
          });
      }
    }
  };

  fetchBlacklist = () => {
    getBlacklist().then((response) => {
      console.log(response);
      this.setState({ ...this.state, blacklist: response });
    });
  };

  componentDidUpdate(prevProps: Props) {
    if (prevProps.activeUser?.username !== this.props.activeUser?.username) {
      this.fetchMutedUsers();
    }
    if (
      prevProps.activeUser !== this.props.activeUser &&
      !this.props.activeUser
    ) {
      this.setState({ mutedUsers: [] });
    }
  }

  componentDidMount() {
    this.fetchMutedUsers();
    this.fetchBlacklist();
  }

  render() {
    const { entries, promotedEntries, global, activeUser, loading } =
      this.props;
    const { filter, tag } = global;
    const { mutedUsers, loadingMutedUsers, blacklist } = this.state;
    const dataToRender = entries.filter((entry) =>
      !entry.community
        ? true
        : !blacklist.includes(entry.author) &&
          (entry.community === global.hive_id ||
            entry.json_metadata.tags?.some((tag) => global.tags.includes(tag)))
    );

    let mutedList: string[] = [];
    if (
      mutedUsers &&
      mutedUsers.length > 0 &&
      activeUser &&
      activeUser.username
    ) {
      mutedList = mutedList.concat(mutedUsers);
    }
    const isMyProfile =
      activeUser &&
      tag.includes("@") &&
      activeUser.username === tag.replace("@", "");
    return (
      <>
        {loadingMutedUsers ? (
          <LinearProgress />
        ) : dataToRender.length > 0 ? (
          <>
            {dataToRender.map((e, i) => {
              const l = [];

              if (i % 4 === 0 && i > 0) {
                const ix = i / 4 - 1;

                if (promotedEntries[ix]) {
                  const p = promotedEntries[ix];
                  let isPostMuted =
                    (activeUser &&
                      activeUser.username &&
                      mutedList.includes(p.author)) ||
                    false;
                  if (
                    !dataToRender.find(
                      (x) => x.author === p.author && x.permlink === p.permlink
                    )
                  ) {
                    l.push(
                      <EntryListItem
                        key={`${p.author}-${p.permlink}`}
                        {...Object.assign({}, this.props, { entry: p })}
                        promoted={true}
                        order={4}
                        muted={isPostMuted}
                      />
                    );
                  }
                }
              }

              let isPostMuted =
                (activeUser &&
                  activeUser.username &&
                  mutedList.includes(e.author)) ||
                false;
              l.push(
                <EntryListItem
                  key={`${e.author}-${e.permlink}`}
                  {...this.props}
                  entry={e}
                  order={i}
                  muted={isPostMuted}
                />
              );
              return [...l];
            })}
          </>
        ) : !loading && isMyProfile ? (
          <MessageNoData
            title={
              filter == "feed"
                ? `${_t("g.nothing-found-in")} ${_t(`g.${filter}`)}`
                : _t("profile-info.no-posts")
            }
            description={
              filter == "feed"
                ? _t("g.fill-feed")
                : `${_t("g.nothing-found-in")} ${_t(`g.${filter}`)}`
            }
            buttonText={
              filter == "feed"
                ? _t("navbar.discover")
                : _t("profile-info.create-posts")
            }
            buttonTo={filter == "feed" ? "/discover" : "/submit"}
            global={global}
          />
        ) : isCommunity(tag) ? (
          <MessageNoData
            title={_t("profile-info.no-posts-community")}
            description={`${_t("g.no")} ${_t(`g.${filter}`)} ${_t("g.found")}.`}
            buttonText={_t("profile-info.create-posts")}
            buttonTo="/submit"
            global={global}
          />
        ) : tag == "my" ? (
          <MessageNoData
            title={_t("g.no-matches")}
            description={_t("g.fill-community-feed")}
            buttonText={_t("navbar.discover")}
            buttonTo="/communities"
            global={global}
          />
        ) : (
          <MessageNoData
            title={_t("profile-info.no-posts-user")}
            description={`${_t("g.nothing-found-in")} ${_t(`g.${filter}`)}.`}
            buttonText={isMyProfile ? _t("profile-info.create-posts") : ""}
            buttonTo="/submit"
            global={global}
          />
        )}
      </>
    );
  }
}

export default (p: Props) => {
    const props: Props = {
        history: p.history,
        location: p.location,
        global: p.global,
        dynamicProps: p.dynamicProps,
        entries: p.entries,
        promotedEntries: p.promotedEntries,
        communities: p.communities,
        community: p.community,
        users: p.users,
        activeUser: p.activeUser,
        reblogs: p.reblogs,
        ui: p.ui,
        entryPinTracker: p.entryPinTracker,
        signingKey: p.signingKey,
        addAccount: p.addAccount,
        updateEntry: p.updateEntry,
        setActiveUser: p.setActiveUser,
        updateActiveUser: p.updateActiveUser,
        deleteUser: p.deleteUser,
        fetchReblogs: p.fetchReblogs,
        addReblog: p.addReblog,
        deleteReblog: p.deleteReblog,
        toggleUIProp: p.toggleUIProp,
        addCommunity: p.addCommunity,
        trackEntryPin: p.trackEntryPin,
        setSigningKey: p.setSigningKey,
        setEntryPin: p.setEntryPin,
        loading: p.loading
    }

    return <EntryListContent {...props} />;
}
