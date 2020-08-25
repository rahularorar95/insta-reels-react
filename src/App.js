import React from "react";
import "./App.css";
import VideoCard from "./VideoCard";

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
        <VideoCard
          channel={"rahularora12"}
          avatarSrc={
            "https://instagram.fhyd2-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/70304817_397410767818755_9096343500143402189_n.jpg?_nc_ht=instagram.fhyd2-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=L8MDT9u-Gm0AX8-nQeX&oh=d5bd09aa5290ca8b38c7a4723beefa66&oe=5F6F44C7"
          }
          song={"test song by rahul"}
          url={
            "https://instagram.fhyd2-1.fna.fbcdn.net/v/t50.2886-16/118243489_120315363115172_7069253693288831033_n.mp4?_nc_ht=instagram.fhyd2-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=ET0pKX1NlwQAX9McKL4&oe=5F473F0E&oh=55c248a10915c7dacecbd400a01265af"
          }
          likes={950}
          shares={30}
        />
      </div>
    </div>
  );
}

export default App;
