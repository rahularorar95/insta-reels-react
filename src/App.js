import React, { useState, useEffect } from "react";
import "./App.css";
import VideoCard from "./VideoCard";
import VideoHeader from "./VideoHeader";
import db from "./firebase";

function App() {
  const [reels, setReels] = useState([]);

  useEffect(() => {
    // App Component will run once when it loads
    db.collection("reels").onSnapshot((snapshot) => {
      setReels(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className="app">
      <div className="app__top">
        <img
          className="app__logo"
          src="https://www.freepnglogos.com/uploads/instagram-logos-png-images-free-download-2.png"
          alt=""
        />

        <h1>Reels</h1>
      </div>
      

      <div className="app__videos">
      <VideoHeader />

        {reels.map(({ channel, avatarSrc, song, url, likes, shares }) => (
          <VideoCard
            channel={channel}
            avatarSrc={avatarSrc}
            song={song}
            url={url}
            likes={likes}
            shares={shares}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
