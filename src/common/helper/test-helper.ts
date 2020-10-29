import {Global, EntryFilter, Theme, ListStyle} from "../store/global/types";
import {TrendingTags} from "../store/trending-tags/types";
import {Entry} from "../store/entries/types";
import {Community} from "../store/communities/types";
import {DynamicProps} from "../store/dynamic-props/types";
import {UI} from "../store/ui/types";
import {PointTransaction} from "../store/points/types";
import {Vote, DelegatedVestingShare} from "../api/hive";
import {ReceivedVestingShare} from "../api/private";
import {
    ApiFollowNotification,
    ApiMentionNotification,
    ApiNotification,
    ApiReblogNotification,
    ApiReplyNotification, ApiTransferNotification,
    ApiVoteNotification,
    Notifications
} from "../store/notifications/types";
import {ActiveUser} from "../store/active-user/types";


export const activeUserMaker = (name: string): ActiveUser => {
    return {
        username: name,
        data: {
            name: name
        },
        points: {
            points: "1.000",
            uPoints: "0.500"
        }
    }
}

export const activeUserInstance: ActiveUser = activeUserMaker("foo");

export const UiInstance: UI = {
    login: false,
    loginKc: false,
    signUp: false,
    notifications: false
}

export const globalInstance: Global = {
    filter: EntryFilter.hot,
    tag: "",
    theme: Theme.day,
    listStyle: ListStyle.row,
    intro: true,
    currency: "usd",
    currencyRate: 1,
    currencySymbol: "$",
    searchIndexCount: 10000000,
    canUseWebp: false,
    hasKeyChain: false,
    isElectron: false,
    newVersion: null
};

export const TrendingTagsInstance: TrendingTags = {
    list: ["foo", "bar", "baz"],
    error: false,
    loading: false,
};

export const entryInstance1: Entry = {
    post_id: 86342505,
    author: "good-karma",
    permlink: "awesome-hive",
    category: "hive",
    title: "Awesome Hive",
    body:
        "Hey developers,\n\n![awesome-hive.png](https://images.ecency.com/DQmetNmv6rtcRxueXJSNm7ErLLKNYGJETxsNSoehn6xk9BC/awesome-hive.png)\n\nI just created [Awesome-Hive](https://github.com/ledgerconnect/awesome-hive), list of services and apps on Hive.\n\nIf you don't know about Awesome project, take a look at here: https://project-awesome.org/\n\nProject contains list of services and links to various tools and libraries. Quite useful if you are developing or learning some new programming languages or skills. So we now have `awesome-hive` list, feel free to submit your pull request to add your apps, services. \n\nI will submit PR to project awesome in 30 days to list Hive in decentralized systems section. One of the requirements, awesome list should be around for more than 30 days. So I ask anyone with service, tools, dapps to submit pull request to https://github.com/ledgerconnect/awesome-hive so we have complete list of services by end of June.\n\nIn 30 days, we will PR to official project awesome list. More awareness about awesome Hive! Meanwhile, let's complete `awesome-hive` together! \ud83d\ude0e \ud83d\ude47 \ud83d\ude4f \n\n## Hive on!",
    json_metadata: {
        tags: ["hive", "hiveio", "awesome", "devs", "development", "list"],
        app: "esteem/2.2.7-surfer",
    },
    created: "2020-06-01T05:53:33",
    updated: "2020-06-01T14:41:15",
    depth: 0,
    children: 31,
    net_rshares: 234863836438976,
    is_paidout: false,
    payout_at: "2020-06-08T05:53:33",
    payout: 125.095,
    pending_payout_value: "125.095 HBD",
    author_payout_value: "0.000 HBD",
    curator_payout_value: "0.000 HBD",
    promoted: "0.000 HBD",
    replies: [],
    active_votes: [
        {
            voter: "user1",
            rshares: 34273117581576,
        },
        {
            voter: "user2",
            rshares: 2269348064337,
        },
        {
            voter: "user3",
            rshares: 19969726098,
        },
        {
            voter: "user4",
            rshares: 725359024516,
        },
        {
            voter: "user5",
            rshares: 24029616493,
        },
        {
            voter: "user6",
            rshares: 1485954337,
        },
        {
            voter: "user7",
            rshares: 1281560607198,
        },
        {
            voter: "user8",
            rshares: 554323413016,
        },
        {
            voter: "user9",
            rshares: 140063022903,
        },
        {
            voter: "user10",
            rshares: 542424211,
        },
    ],
    author_reputation: 76.58,
    stats: {
        hide: false,
        gray: false,
        total_votes: 10,
        flag_weight: 1.0,
    },
    beneficiaries: [
        {
            account: "esteemapp",
            weight: 300,
        },
    ],
    max_accepted_payout: "1000000.000 HBD",
    percent_steem_dollars: 10000,
    url: "/hive/@good-karma/awesome-hive",
    blacklists: [],
};

export const votesInstance1: Vote[] = [
    {
        voter: "user1",
        weight: 40289,
        rshares: "84880616925",
        percent: 40,
        time: "2020-06-14T15:19:51",
    },
    {
        voter: "user2",
        weight: 0,
        rshares: "39117096",
        percent: 10000,
        time: "2020-06-14T15:15:15",
    },
];

export const delegatedVestingInstance: DelegatedVestingShare[] = [
    {
        id: 1327252,
        delegator: "esteemapp",
        delegatee: "user1",
        vesting_shares: "14848.000000 VESTS",
        min_delegation_time: "2020-02-24T09:53:57",
    },
    {
        id: 1329459,
        delegator: "esteemapp",
        delegatee: "user2",
        vesting_shares: "191778.000000 VESTS",
        min_delegation_time: "2020-03-13T08:34:57",
    },
    {
        id: 1325910,
        delegator: "esteemapp",
        delegatee: "user3",
        vesting_shares: "29326.000000 VESTS",
        min_delegation_time: "2020-02-18T18:32:06",
    },
    {
        id: 1325312,
        delegator: "esteemapp",
        delegatee: "user4",
        vesting_shares: "27751.000000 VESTS",
        min_delegation_time: "2020-02-17T09:28:12",
    },
    {
        id: 1330486,
        delegator: "esteemapp",
        delegatee: "user5",
        vesting_shares: "1957.888055 VESTS",
        min_delegation_time: "2020-03-24T12:42:39",
    },
];

export const receivedVestingInstance: ReceivedVestingShare[] = [
    {
        delegator: "user1",
        delegatee: "esteemapp",
        vesting_shares: "14848.000000 VESTS",
        timestamp: "2020-02-24T09:53:57",
    },
    {
        delegator: "user2",
        delegatee: "esteemapp",
        vesting_shares: "191778.000000 VESTS",
        timestamp: "2020-03-13T08:34:57",
    },
    {
        delegator: "user3",
        delegatee: "esteemapp",
        vesting_shares: "29326.000000 VESTS",
        timestamp: "2020-02-18T18:32:06",
    },
    {
        delegator: "user4",
        delegatee: "esteemapp",
        vesting_shares: "27751.000000 VESTS",
        timestamp: "2020-02-17T09:28:12",
    },
    {
        delegator: "user5",
        delegatee: "esteemapp",
        vesting_shares: "1957.888055 VESTS",
        timestamp: "2020-03-24T12:42:39",
    },
];

export const discussionInstace1: Entry[] = [
    {
        post_id: 86423250,
        author: "esteemapp",
        permlink: "esteem-discord-monthly-giveaway-winners-21",
        category: "esteem",
        title: "Esteem Discord Monthly Giveaway Winners #21",
        body: "...",
        json_metadata: {},
        created: "2020-06-06T05:37:51",
        updated: "2020-06-06T05:37:51",
        depth: 0,
        children: 9,
        net_rshares: 23953037130835,
        is_paidout: false,
        payout_at: "2020-06-13T05:37:51",
        payout: 11.432,
        pending_payout_value: "11.432 HBD",
        author_payout_value: "0.000 HBD",
        curator_payout_value: "0.000 HBD",
        promoted: "0.000 HBD",
        replies: [],
        active_votes: [],
        author_reputation: 75.6,
        stats: {hide: false, gray: false, total_votes: 180, flag_weight: 0},
        beneficiaries: [{account: "esteemapp", weight: 300}],
        max_accepted_payout: "1000000.000 HBD",
        percent_steem_dollars: 10000,
        url: "/esteem/@esteemapp/esteem-discord-monthly-giveaway-winners-21",
        blacklists: [],
    },
    {
        post_id: 86437193,
        author: "forykw",
        permlink: "re-esteemapp-202067t12246786z",
        category: "esteem",
        title: "RE: Esteem Discord Monthly Giveaway Winners #21",
        body: "Prizes have consistently been very effective from @esteemapp nicely done!",
        json_metadata: {},
        created: "2020-06-07T00:02:48",
        updated: "2020-06-07T00:02:48",
        depth: 1,
        children: 0,
        net_rshares: 0,
        is_paidout: false,
        payout_at: "2020-06-14T00:02:48",
        payout: 0,
        pending_payout_value: "0.000 HBD",
        author_payout_value: "0.000 HBD",
        curator_payout_value: "0.000 HBD",
        promoted: "0.000 HBD",
        replies: [],
        active_votes: [],
        author_reputation: 64.87,
        stats: {hide: false, gray: false, total_votes: 0, flag_weight: 0},
        beneficiaries: [{account: "esteemapp", weight: 300}],
        max_accepted_payout: "1000000.000 HBD",
        percent_steem_dollars: 10000,
        parent_author: "esteemapp",
        parent_permlink: "esteem-discord-monthly-giveaway-winners-21",
        url: "/esteem/@esteemapp/esteem-discord-monthly-giveaway-winners-21#@forykw/re-esteemapp-202067t12246786z",
        blacklists: [],
    },
    {
        post_id: 86427694,
        author: "brittandjosie",
        permlink: "re-esteemapp-qbi6t3",
        category: "esteem",
        title: "RE: Esteem Discord Monthly Giveaway Winners #21",
        body: "@ardpien congrats on being one of the winners ",
        json_metadata: {tags: ["esteem"], app: "peakd/2020.05.5"},
        created: "2020-06-06T12:03:03",
        updated: "2020-06-06T12:03:03",
        depth: 1,
        children: 1,
        net_rshares: 0,
        is_paidout: false,
        payout_at: "2020-06-13T12:03:03",
        payout: 0,
        pending_payout_value: "0.000 HBD",
        author_payout_value: "0.000 HBD",
        curator_payout_value: "0.000 HBD",
        promoted: "0.000 HBD",
        replies: ["ardpien/re-brittandjosie-qbjoep"],
        active_votes: [],
        author_reputation: 71.78,
        stats: {hide: false, gray: false, total_votes: 0, flag_weight: 0},
        beneficiaries: [],
        max_accepted_payout: "1000000.000 HBD",
        percent_steem_dollars: 10000,
        parent_author: "esteemapp",
        parent_permlink: "esteem-discord-monthly-giveaway-winners-21",
        url: "/esteem/@esteemapp/esteem-discord-monthly-giveaway-winners-21#@brittandjosie/re-esteemapp-qbi6t3",
        blacklists: [],
    },
    {
        post_id: 86426904,
        author: "ardpien",
        permlink: "qbi303",
        category: "esteem",
        title: "RE: Esteem Discord Monthly Giveaway Winners #21",
        body:
            "😃 I am mentioned here. That's great! All thanks to ESTEEM for creating an awesome Discord server for us to talk in there and participate in activities. Thank You ESTEEM team :) and @good-karma.",
        json_metadata: {},
        created: "2020-06-06T10:40:54",
        updated: "2020-06-06T10:40:54",
        depth: 1,
        children: 0,
        net_rshares: 114901996313,
        is_paidout: false,
        payout_at: "2020-06-13T10:40:54",
        payout: 0.031,
        pending_payout_value: "0.031 HBD",
        author_payout_value: "0.000 HBD",
        curator_payout_value: "0.000 HBD",
        promoted: "0.000 HBD",
        replies: [],
        active_votes: [{voter: "jznsamuel", rshares: 114901996313}],
        author_reputation: 47.13,
        stats: {hide: false, gray: false, total_votes: 1, flag_weight: 0},
        beneficiaries: [],
        max_accepted_payout: "1000000.000 HBD",
        percent_steem_dollars: 10000,
        parent_author: "esteemapp",
        parent_permlink: "esteem-discord-monthly-giveaway-winners-21",
        url: "/esteem/@esteemapp/esteem-discord-monthly-giveaway-winners-21#@ardpien/qbi303",
        blacklists: [],
    },
    {
        post_id: 86426429,
        author: "iliyan90",
        permlink: "re-esteemapp-202066t124616772z",
        category: "esteem",
        title: "RE: Esteem Discord Monthly Giveaway Winners #21",
        body: "@esteemapp\nBug report [click here](https://esteem.app/esteem/@iliyan90/bug-report-to-esteemapp)",
        json_metadata: {},
        created: "2020-06-06T09:46:15",
        updated: "2020-06-06T09:46:36",
        depth: 1,
        children: 0,
        net_rshares: 0,
        is_paidout: false,
        payout_at: "2020-06-13T09:46:15",
        payout: 0,
        pending_payout_value: "0.000 HBD",
        author_payout_value: "0.000 HBD",
        curator_payout_value: "0.000 HBD",
        promoted: "0.000 HBD",
        replies: [],
        active_votes: [],
        author_reputation: 60.22,
        stats: {hide: false, gray: false, total_votes: 0, flag_weight: 0},
        beneficiaries: [{account: "esteemapp", weight: 300}],
        max_accepted_payout: "1000000.000 HBD",
        percent_steem_dollars: 10000,
        parent_author: "esteemapp",
        parent_permlink: "esteem-discord-monthly-giveaway-winners-21",
        url: "/esteem/@esteemapp/esteem-discord-monthly-giveaway-winners-21#@iliyan90/re-esteemapp-202066t124616772z",
        blacklists: [],
    },
    {
        post_id: 86425273,
        author: "trincowski",
        permlink: "re-esteemapp-202066t84137915z",
        category: "esteem",
        title: "RE: Esteem Discord Monthly Giveaway Winners #21",
        body: "Awesome. Thank you very much.",
        json_metadata: {},
        created: "2020-06-06T07:41:39",
        updated: "2020-06-06T07:41:39",
        depth: 1,
        children: 0,
        net_rshares: 116060350556,
        is_paidout: false,
        payout_at: "2020-06-13T07:41:39",
        payout: 0.032,
        pending_payout_value: "0.032 HBD",
        author_payout_value: "0.000 HBD",
        curator_payout_value: "0.000 HBD",
        promoted: "0.000 HBD",
        replies: [],
        active_votes: [{voter: "jznsamuel", rshares: 116060350556}],
        author_reputation: 68.52,
        stats: {hide: false, gray: false, total_votes: 1, flag_weight: 0},
        beneficiaries: [{account: "esteemapp", weight: 300}],
        max_accepted_payout: "1000000.000 HBD",
        percent_steem_dollars: 10000,
        parent_author: "esteemapp",
        parent_permlink: "esteem-discord-monthly-giveaway-winners-21",
        url: "/esteem/@esteemapp/esteem-discord-monthly-giveaway-winners-21#@trincowski/re-esteemapp-202066t84137915z",
        blacklists: [],
    },
    {
        post_id: 86423472,
        author: "foxkoit",
        permlink: "re-esteemapp-202066t8590757z",
        category: "esteem",
        title: "RE: Esteem Discord Monthly Giveaway Winners #21",
        body: "Thank you 😀😇😇",
        json_metadata: {},
        created: "2020-06-06T05:59:03",
        updated: "2020-06-06T05:59:03",
        depth: 1,
        children: 0,
        net_rshares: 117230405346,
        is_paidout: false,
        payout_at: "2020-06-13T05:59:03",
        payout: 0.032,
        pending_payout_value: "0.032 HBD",
        author_payout_value: "0.000 HBD",
        curator_payout_value: "0.000 HBD",
        promoted: "0.000 HBD",
        replies: [],
        active_votes: [{voter: "jznsamuel", rshares: 117230405346}],
        author_reputation: 71.51,
        stats: {hide: false, gray: false, total_votes: 1, flag_weight: 0},
        beneficiaries: [{account: "esteemapp", weight: 300}],
        max_accepted_payout: "1000000.000 HBD",
        percent_steem_dollars: 10000,
        parent_author: "esteemapp",
        parent_permlink: "esteem-discord-monthly-giveaway-winners-21",
        url: "/esteem/@esteemapp/esteem-discord-monthly-giveaway-winners-21#@foxkoit/re-esteemapp-202066t8590757z",
        blacklists: [],
    },
    {
        post_id: 86423446,
        author: "irisworld",
        permlink: "re-esteemapp-202066t14588243z",
        category: "esteem",
        title: "RE: Esteem Discord Monthly Giveaway Winners #21",
        body: "yahoo! thanks a lot!",
        json_metadata: {},
        created: "2020-06-06T05:58:09",
        updated: "2020-06-06T05:58:09",
        depth: 1,
        children: 0,
        net_rshares: 265974487101,
        is_paidout: false,
        payout_at: "2020-06-13T05:58:09",
        payout: 0.075,
        pending_payout_value: "0.075 HBD",
        author_payout_value: "0.000 HBD",
        curator_payout_value: "0.000 HBD",
        promoted: "0.000 HBD",
        replies: [],
        active_votes: [{voter: "foo", rshares: 123}, {voter: "bar", rshares: 123}],
        author_reputation: 65.01,
        stats: {hide: false, gray: false, total_votes: 2, flag_weight: 0},
        beneficiaries: [{account: "esteemapp", weight: 300}],
        max_accepted_payout: "1000000.000 HBD",
        percent_steem_dollars: 10000,
        parent_author: "esteemapp",
        parent_permlink: "esteem-discord-monthly-giveaway-winners-21",
        url: "/esteem/@esteemapp/esteem-discord-monthly-giveaway-winners-21#@irisworld/re-esteemapp-202066t14588243z",
        blacklists: [],
    },
    {
        post_id: 86423439,
        author: "behiver",
        permlink: "re-esteemapp-202066t85739415z",
        category: "esteem",
        title: "RE: Esteem Discord Monthly Giveaway Winners #21",
        body:
            "Great to see my name on the Giveaway and I like quite much engaging on Discord and find out what others are doing in the HIVE space. A source of news, common hobbies and other topics that rise up your day.",
        json_metadata: {},
        created: "2020-06-06T05:57:39",
        updated: "2020-06-06T05:57:39",
        depth: 1,
        children: 0,
        net_rshares: 273072542004,
        is_paidout: false,
        payout_at: "2020-06-13T05:57:39",
        payout: 0.077,
        pending_payout_value: "0.077 HBD",
        author_payout_value: "0.000 HBD",
        curator_payout_value: "0.000 HBD",
        promoted: "0.000 HBD",
        replies: [],
        active_votes: [
            {voter: "foxkoit", rshares: 154659337454},
            {voter: "jznsamuel", rshares: 118413204550},
        ],
        author_reputation: 57.66,
        stats: {hide: false, gray: false, total_votes: 2, flag_weight: 0},
        beneficiaries: [{account: "esteemapp", weight: 300}],
        max_accepted_payout: "1000000.000 HBD",
        percent_steem_dollars: 10000,
        parent_author: "esteemapp",
        parent_permlink: "esteem-discord-monthly-giveaway-winners-21",
        url: "/esteem/@esteemapp/esteem-discord-monthly-giveaway-winners-21#@behiver/re-esteemapp-202066t85739415z",
        blacklists: [],
    },
    {
        post_id: 86440916,
        author: "ardpien",
        permlink: "re-brittandjosie-qbjoep",
        category: "esteem",
        title: "RE: Esteem Discord Monthly Giveaway Winners #21",
        body: "Thank you, Miss. @birttandjosie.",
        json_metadata: {tags: ["esteem"], app: "peakd/2020.05.5"},
        created: "2020-06-07T07:20:51",
        updated: "2020-06-07T07:20:51",
        depth: 2,
        children: 0,
        net_rshares: 0,
        is_paidout: false,
        payout_at: "2020-06-14T07:20:51",
        payout: 0,
        pending_payout_value: "0.000 HBD",
        author_payout_value: "0.000 HBD",
        curator_payout_value: "0.000 HBD",
        promoted: "0.000 HBD",
        replies: [],
        active_votes: [],
        author_reputation: 47.13,
        stats: {hide: false, gray: false, total_votes: 0, flag_weight: 0},
        beneficiaries: [],
        max_accepted_payout: "1000000.000 HBD",
        percent_steem_dollars: 10000,
        parent_author: "brittandjosie",
        parent_permlink: "re-esteemapp-qbi6t3",
        url: "/esteem/@esteemapp/esteem-discord-monthly-giveaway-winners-21#@ardpien/re-brittandjosie-qbjoep",
        blacklists: [],
    },
];

export const communityInstance1: Community = {
    id: 1369030,
    name: "hive-148441",
    title: "GEMS",
    about: "To highlight true Gems of Hive community with User Retention as primary objective.",
    lang: "en",
    type_id: 1,
    is_nsfw: false,
    subscribers: 4086,
    sum_pending: 17370,
    num_pending: 12481,
    num_authors: 1796,
    created_at: "2020-02-26 11:33:33",
    avatar_url: "",
    description:
        "This is a collective curation community formed by @appreciator, @rocky1 and @upmewhale. You can post your genuine and creative content in this community to get more support.\n\n\nYou can post in languages other than English.\n\nThere are not many restrictions but just few simple ones and we expect you to adhere to them\n\nJoin our discord group to keep yourself updated:\nhttps://discord.gg/n98Kpmm",
    flag_text: "Plagiarism will be highly discouraged.\nHate Speech is not allowed",
    settings: {},
    team: [
        ["hive-148441", "owner", ""],
        ["bluemist", "admin", ""],
    ],
};

export const dynamicPropsIntance1: DynamicProps = {
    hivePerMVests: 513.7574961580294,
    base: 0.252,
    quote: 1,
    fundRecentClaims: 413504197028183900,
    fundRewardBalance: 848692.443,
    hbdPrintRate: 10000,
};

export const notificationsInstance1: Notifications = {
    filter: null,
    unread: 0,
    list: [],
    loading: false,
    hasMore: true
}

export const apiVoteNotification: ApiVoteNotification = {
    "id": "v-705431149",
    "type": "vote",
    "source": "fooo10",
    "voter": "fooo10",
    "weight": 10000,
    "author": "good-karma",
    "permlink": "update-on-hivesigner-integration-into-condenser",
    "title": "Update on Hivesigner integration into Condenser",
    "img_url": null,
    "read": 0,
    "timestamp": "2020-07-24T06:50:48+00:00",
    "ts": 1595566248,
    "gk": "2 hours",
    "gkf": true
}

export const apiMentionNotification: ApiMentionNotification = {
    "id": "m-49590315",
    "type": "mention",
    "source": "ecency.stats",
    "author": "ecency.stats",
    "account": "good-karma",
    "permlink": "daily-activities-points-2020-07-24",
    "post": true,
    "title": "Daily activities [Points] - Jul 24",
    "img_url": "https://images.ecency.com/0x0/https://img.esteem.app/08zx2x.jpg",
    "read": 0,
    "timestamp": "2020-07-24T01:10:09+00:00",
    "ts": 1595545809,
    "gk": "8 hours",
    "gkf": true
};

export const apiFollowNotification: ApiFollowNotification = {
    "id": "f-174272007",
    "type": "follow",
    "source": "fooo10",
    "follower": "fooo10",
    "following": "good-karma",
    "blog": true,
    "read": 0,
    "timestamp": "2020-07-24T06:08:24+00:00",
    "ts": 1595563704,
    "gk": "2 hours",
    "gkf": true
}

export const apiUnfollowNotification: ApiFollowNotification = {
    "id": "f-174258147",
    "type": "unfollow",
    "source": "fooo102",
    "follower": "fooo102",
    "following": "good-karma",
    "blog": false,
    "read": 1,
    "timestamp": "2020-07-19T05:07:09+00:00",
    "ts": 1595128029,
    "gk": "2020-07-19",
    "gkf": false
}

export const apiReplyNotification: ApiReplyNotification = {
    "id": "rr-108155773",
    "type": "reply",
    "source": "dunsky",
    "author": "dunsky",
    "permlink": "re-good-karma-2020721t1915968z",
    "title": "",
    "body": "Testing replies from Ecency web interface \ud83d\ude0e",
    "json_metadata": "{\"tags\": [\"ecency\"], \"app\": \"ecency/0.0.1-vision\", \"format\": \"markdown+html\"}",
    "metadata": {
        "tags": [
            "ecency"
        ],
        "app": "ecency/0.0.1-vision",
        "format": "markdown+html"
    },
    "parent_author": "good-karma",
    "parent_permlink": "re-dunsky-2020713t164324912z",
    "parent_title": null,
    "parent_img_url": null,
    "read": 1,
    "timestamp": "2020-07-21T16:02:00+00:00",
    "ts": 1595340120,
    "gk": "2020-07-21",
    "gkf": false
}

export const apiReblogNotification: ApiReblogNotification = {
    "id": "r-10661404",
    "type": "reblog",
    "source": "foo220",
    "account": "foo220",
    "author": "good-karma",
    "permlink": "update-on-hivesigner-integration-into-condenser",
    "title": "Update on Hivesigner integration into Condenser",
    "img_url": null,
    "read": 0,
    "timestamp": "2020-07-23T13:36:06+00:00",
    "ts": 1595504166,
    "gk": "Yesterday",
    "gkf": true
}

export const apiTransferNotification: ApiTransferNotification = {
    "id": "t-62284775",
    "type": "transfer",
    "source": "bar212",
    "to": "good-karma",
    "amount": "900.000 HBD",
    "memo": "",
    "read": 1,
    "timestamp": "2020-07-20T09:30:21+00:00",
    "ts": 1595230221,
    "gk": "2020-07-20",
    "gkf": true
}

export const apiNotificationList1: ApiNotification[] = [
    apiVoteNotification,
    apiMentionNotification,
    apiFollowNotification,
    apiUnfollowNotification
]

export const apiNotificationList2: ApiNotification[] = [
    apiReplyNotification,
    apiReblogNotification,
    apiTransferNotification
]


export const pointTransactionsInstance: PointTransaction[] = [
    {
        amount: "0.250",
        created: "2020-08-17T12:52:16.737322+02:00",
        id: 5150947,
        memo: null,
        receiver: null,
        sender: null,
        type: 10,
    },
    {
        amount: "0.750",
        created: "2020-08-17T10:01:22.094361+02:00",
        id: 5149418,
        memo: null,
        receiver: null,
        sender: null,
        type: 120,
    }
]
