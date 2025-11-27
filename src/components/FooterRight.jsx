import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faCommentDots,
  faBookmark,
  faShare,
  faVolumeMute,
  faVolumeUp,
  faCirclePlus,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import "./FooterRight.css";

export default function FooterRight({
  likes,
  comments,
  saves,
  shares,
  profilePic,
  muted,
  onToggleMute,
  onSave,
  onShare,
}) {
  const [liked, setLiked] = useState(false);
  const [savedState, setSavedState] = useState(false);
  const [followIcon, setFollowIcon] = useState(faCirclePlus);

  const toggleLike = () => setLiked((prev) => !prev);

  const toggleSave = () => {
    setSavedState((prev) => !prev);
    onSave?.();
  };

  const toggleFollow = () => {
    setFollowIcon(faCircleCheck);
    setTimeout(() => setFollowIcon(null), 1500);
  };

  return (
    <div className="footer-right">

      {/* Profile */}
      <div className="sidebar-icon">
        <img src={profilePic} className="userprofile" alt="profile" />
        {followIcon && (
          <FontAwesomeIcon
            icon={followIcon}
            className="useradd"
            onClick={toggleFollow}
          />
        )}
      </div>

      {/* Like */}
      <div className="sidebar-icon">
        <FontAwesomeIcon
          icon={faHeart}
          className="action-icon"
          onClick={toggleLike}
          style={{ color: liked ? "#ff0000" : "white" }}
        />
        <p>{liked ? Number(likes) + 1 : likes}</p>
      </div>

      {/* Comment */}
      <div className="sidebar-icon">
        <FontAwesomeIcon icon={faCommentDots} className="action-icon" />
        <p>{comments}</p>
      </div>

      {/* Save */}
      <div className="sidebar-icon">
        <FontAwesomeIcon
          icon={faBookmark}
          className="action-icon"
          onClick={toggleSave}
          style={{ color: savedState ? "#ffc107" : "white" }}
        />
        <p>{savedState ? Number(saves) + 1 : saves}</p>
      </div>

      {/* Share */}
      <div className="sidebar-icon">
        <FontAwesomeIcon
          icon={faShare}
          className="action-icon"
          onClick={onShare}
        />
        <p>{shares}</p>
      </div>

      {/* Mute */}
      <div className="sidebar-icon">
        <FontAwesomeIcon
          icon={muted ? faVolumeMute : faVolumeUp}
          className="action-icon"
          onClick={onToggleMute}
        />
        <p>{muted ? "Muted" : "Sound"}</p>
      </div>

      {/* Record */}
      <div className="sidebar-icon">
        <img
          src="https://static.thenounproject.com/png/934821-200.png"
          alt="record"
          className="record-icon"
        />
      </div>
    </div>
  );
}
