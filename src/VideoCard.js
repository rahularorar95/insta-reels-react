import React, { useRef, useState } from "react";
import "./VideoCard.css";

function VideoCard() {
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
      <video
        ref={videoRef}
        onClick={onVideoPress}
        className="videoCard__player"
        src="https://instagram.fhyd2-1.fna.fbcdn.net/v/t50.2886-16/118243489_120315363115172_7069253693288831033_n.mp4?_nc_ht=instagram.fhyd2-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=ET0pKX1NlwQAX9McKL4&oe=5F473F0E&oh=55c248a10915c7dacecbd400a01265af"
        alt="IG reel video"
        loop
      />
    </div>
  );
}

export default VideoCard;
