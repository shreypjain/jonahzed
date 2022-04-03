import React from "react";
import logo from "./logo.svg";
import pp from "./unnamed.jpeg";
import nightfever from "./nightfever.png";
import "./App.css";
import "./index.css";
import TypewriterComponent from "typewriter-effect";

function App() {
  return (
    <div
      className="flex justify-center items-center h-screen w-screen"
      style={{
        background: `url("https://i.ytimg.com/vi/EVDg3jVDHec/maxresdefault.jpg")`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
      }}
    >
      <div className="flex-row items-center justify-center text-center">
        <div
          className="w-full cursor-pointer flex align-middle justify-center pt-24 -mt-24 pb-4 mx-auto"
          onClick={() => window.open("#")}
        >
          <img
            className="w-16 h-16 outline outline-1 outline-white rounded-full"
            src={pp}
            alt="profile pic"
          />
        </div>
      </div>
      <div
        className="border-white border-t-2 border-b-2 w-64 pt-16 md:pt-8 pb-16 md:pb-8"
        style={{ width: 300 }}
      >
        <div
          className="flex flex-row justify-center items-center cursor-pointer hover:animate-pulse"
          onClick={() => {
            window.open("https://ffm.to/nightfever");
          }}
        >
          <img src={nightfever} alt="nightfever" />
        </div>
        <div className="text-center">
          <TypewriterComponent
            onInit={(typewriter) => {
              typewriter
                .typeString("stream night fever today")
                .pauseFor(2500)
                .start();
            }}
          />
        </div>
      </div>
      <nav style={{ width: "50vw" }}>
        <div className="flex items-center sm:flex-col flex-row rounded-md h-18 pt-12">
          <div className="sm:w-72 w-full border-2 rounded-md">
            <div
              className="flex flex-row h-12 justify-center items-center cursor-pointer width-36 w-full transition duration-500 ease-in-out hover:bg-gray-200 border-b-2"
              onClick={() => {
                window.open(
                  "https://www.youtube.com/channel/UCRAHtBkbXHdIY669xju1Ruw",
                  "_blank"
                );
              }}
            >
              youtube
            </div>
            <div
              className="flex flex-row h-12 justify-center items-center cursor-pointer width-36 w-full transition duration-500 ease-in-out hover:bg-gray-200 border-b-2"
              onClick={() => {
                window.open(
                  "https://open.spotify.com/artist/4mPkv3XVHp9mMeSXp5Ix3D?si=8c580cb1f5fb4267",
                  "_blank"
                );
              }}
            >
              spotify
            </div>
            <div
              className="flex flex-row h-12 justify-center items-center cursor-pointer width-36 w-full transition duration-500 ease-in-out hover:bg-gray-200 border-b-2"
              onClick={() => {
                window.open("https://soundcloud.com/jonahzzz", "_blank");
              }}
            >
              soundcloud
            </div>
            <div
              className="flex flex-row h-12 justify-center items-center cursor-pointer width-36 w-full transition duration-500 ease-in-out hover:bg-gray-200 border-b-2"
              onClick={() => {
                window.open("https://www.instagram.com/jonahzd/", "_blank");
              }}
            >
              apple music
            </div>
            <div
              className="flex flex-row h-12 justify-center items-center cursor-pointer width-36 w-full transition duration-500 ease-in-out hover:bg-gray-200"
              onClick={() => {
                window.open(
                  "https://music.apple.com/ca/artist/jonah-zed/807598675",
                  "_blank"
                );
              }}
            >
              instagram
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
