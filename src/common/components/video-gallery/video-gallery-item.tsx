import { informationSvg } from "../../img/svg";
import { _t } from "../../i18n";
import { dateToFullRelative } from "../../helper/parse-date";
import React, { useEffect, useState } from "react";
import { ThreeSpeakVideo, useThreeSpeakVideo } from "../../api/threespeak";
import { Button } from "react-bootstrap";
import { ActiveUser } from "../../store/active-user/types";

interface videoProps {
  status: string;
  owner: string;
  thumbUrl: string;
  permlink: string;
  filename: string;
}

interface Props {
  item: ThreeSpeakVideo;
  insertText: (before: string, after?: string) => any;
  setVideoEncoderBeneficiary?: (video: any) => void;
  toggleNsfwC?: () => void;
  setShowGallery: (v: boolean) => void;
  setVideoMetadata?: (v: ThreeSpeakVideo) => void;
  activeUser: ActiveUser;
}

export function VideoGalleryItem({
  item,
  toggleNsfwC,
  setVideoEncoderBeneficiary,
  insertText,
  setShowGallery,
  setVideoMetadata,
  activeUser
}: Props) {
  const { data } = useThreeSpeakVideo("all", activeUser);

  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<any>(null);
  const [manualPublishSpeakVideos, setManualPublishSpeakVideos] = useState<ThreeSpeakVideo[]>([]);
  const speakUrl = "https://3speak.tv/watch?v=";

  useEffect(() => {
    setManualPublishSpeakVideos(data.filter((i) => i.status === "publish_manual"));
  }, [data]);

  const setBeneficiary = (video: any) => {
    setVideoEncoderBeneficiary && setVideoEncoderBeneficiary(video);
  };

  const getHoveredItem = (item: any) => {
    setHoveredItem(item);
  };

  const embeddVideo = (video: videoProps) => {
    const speakFile = `[![](${video.thumbUrl})](${speakUrl}${video.owner}/${video.permlink})`;

    const element = ` <center>${speakFile}[Source](${video.filename.replace(
      "ipfs://",
      "https://ipfs-3speak.b-cdn.net/ipfs/"
    )})</center>`;
    const body = insertText("").innerHTML;
    const hup = manualPublishSpeakVideos
      .map((i) => `[![](${i.thumbUrl})](${speakUrl}${i.owner}/${i.permlink})`)
      .some((i) => body.includes(i));

    if (!hup || video.status == "published") {
      setVideoMetadata?.(
        manualPublishSpeakVideos.find(
          (v) => v.permlink === video.permlink && v.owner === video.owner
        )!!
      );
      insertText(element);
    }
  };

  const insert = async (isNsfw = false) => {
    let nextItem = item;

    embeddVideo(nextItem);
    const body = insertText("").innerHTML;
    const hup = manualPublishSpeakVideos
      .map((i) => `[![](${i.thumbUrl})](${speakUrl}${i.owner}/${i.permlink})`)
      .some((i) => body.includes(i));

    if (!hup && item.status !== "published") {
      setBeneficiary(nextItem);
    }
    setShowGallery(false);

    if (isNsfw) {
      toggleNsfwC && toggleNsfwC();
    }
  };

  const statusIcons = (status: string) => {
    return (
      <div className="status-icon-wrapper">
        {status === "publish_manual" ? (
          <div className="status-icon-encoded" />
        ) : status === "encoding_failed" ? (
          <div className="status-icon-failed" />
        ) : status === "published" ? (
          <div>
            <div className="status-icon-published" />
          </div>
        ) : status === "deleted" ? (
          <div className="status-icon-deleted" />
        ) : (
          <div className="status-icon-encoding" />
        )}
      </div>
    );
  };

  const toolTipContent = (status: string) => {
    return status === "publish_manual"
      ? "Encoded"
      : status === "Encoding failed"
      ? "Failed"
      : status === "published"
      ? "Published"
      : status === "deleted"
      ? "Deleted"
      : "Encoding";
  };

  return (
    <div className="video-list-body">
      <div className="thumnail-wrapper">
        <img src={item.thumbUrl} alt="" />
      </div>
      <div className="list-details-wrapper">
        <div className="list-title">
          <div className="info-status">
            <div className="status">
              {statusIcons(item.status)}
              {toolTipContent(item.status)}{" "}
              {item.status == "encoding_ipfs" || item.status == "encoding_preparing"
                ? `${item.encodingProgress.toFixed(2)}%`
                : ""}
            </div>
            <div
              onMouseOver={() => {
                getHoveredItem(item);
                setShowMoreInfo(true);
              }}
              onMouseOut={() => setShowMoreInfo(false)}
              className="info-icon-wrapper"
            >
              {informationSvg}
            </div>
          </div>
          <div className="w-100 text-truncate">{item.title}</div>
          {/* {["publish_manual", "published"].includes(item.status) && (
            <div className="details-actions">
              <Button size="sm" onClick={() => insert()}>
                Insert video
              </Button>
              {item.status != "published" && (
                <Button variant="link" size="sm" onClick={() => insert(true)}>
                  Insert NSFW
                </Button>
              )}
            </div>
          )} */}
        </div>
      </div>
      {showMoreInfo && hoveredItem._id === item._id && (
        <div className="more-info">
          <div className="each-info">
            <span>
              Created: {dateToFullRelative(item.created)}
            </span>
          </div>
          {item.status === "published" && (
            <div className="each-info">
              <span>
                Views: {item.views}
              </span>
            </div>
          )}
          <div className="each-info">
            <span>
              Duration: {`${item.duration}m`}
            </span>
          </div>
          <div className="each-info">
            <span>
              Size: {`${(item.size / (1024 * 1024)).toFixed(2)}MB`}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
