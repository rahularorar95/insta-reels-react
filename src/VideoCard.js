import React, { useRef, useState } from "react";
import "./VideoCard.css";
import VideoHeader from "./VideoHeader";
import VideoFooter from "./VideoFooter";

function VideoCard({ url, likes, shares, channel, avatarSrc, song }) {
  const [isVideoPlaying, setisVideoPlaying] = useState(false);
  const videoRef = useRef(null);
  // useState
  // useRef

  const onVideoPress = () => {
    if (isVideoPlaying) {
      //stop video
      videoRef.current.pause();
      setisVideoPlaying(false);
    } else {
      //play video
      videoRef.current.play();
      setisVideoPlaying(true);
    }
  };

  return (
    <div className="videoCard">
      <VideoHeader />
      <video
        ref={videoRef}
        onClick={onVideoPress}
        className="videoCard__player"
        src={url}
        alt="IG reel video"
        loop
      />
      <VideoFooter
        song={song}
        channel={channel}
        likes={likes}
        shares={shares}
        avatarSrc={avatarSrc}
      />
    </div>
  );
}

export default VideoCard;
