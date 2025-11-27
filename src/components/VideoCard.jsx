import React, { useRef, useState, useEffect } from "react";
import FooterLeft from "./FooterLeft";
import FooterRight from "./FooterRight";
import "./VideoCard.css";

export default function VideoCard({
  url,
  username,
  description,
  song,
  likes,
  shares,
  comments,
  saves,
  profilePic,
  setVideoRef,
  autoplay,
  onSwipeUp,
  onSwipeDown,
  onShare,
  onSave
}) {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  const startY = useRef(null);

  // autoplay video đầu tiên
  useEffect(() => {
    if (autoplay && videoRef.current) {
      videoRef.current.play();
    }
  }, [autoplay]);

  // pause / play khi click
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) videoRef.current.play();
    else videoRef.current.pause();
  };

  // swipe detection
  const onMouseDown = (e) => {
    startY.current = e.clientY;
  };

  const onMouseUp = (e) => {
    if (!startY.current) return;
    const dy = e.clientY - startY.current;
    if (dy < -50) onSwipeUp();
    if (dy > 50) onSwipeDown();
    startY.current = null;
  };

  return (
    <div
      className="video"
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
    >
      <video
        className="player"
        src={url}
        ref={(ref) => {
          videoRef.current = ref;
          setVideoRef(ref);
        }}
        loop
        muted={muted}
        playsInline
        onClick={togglePlay}
      />

      {/* LEFT SIDE TEXT */}
      <div className="bottom-controls">
        <FooterLeft
          username={username}
          description={description}
          song={song}
        />
      </div>

      {/* RIGHT SIDE ICON BAR (ABSOLUTE POSITION) */}
      <FooterRight
        likes={likes}
        comments={comments}
        saves={saves}
        shares={shares}
        profilePic={profilePic}
        muted={muted}
        onToggleMute={() => setMuted((p) => !p)}
        onShare={onShare}
        onSave={() => onSave(url)}
      />
    </div>
  );
}
