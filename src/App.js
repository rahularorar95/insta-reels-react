import React from "react";
import "./App.css";
import VideoCard from './VideoCard'

function App() {
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
        <VideoCard />
        <VideoCard />
        <VideoCard />
        {/* <Video /> */}
        {/* <Video /> */}
        {/* <Video /> */}
        {/* <Video /> */}

      </div>
    </div>
  );
}

export default App;
