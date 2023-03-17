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
      className="flex justify-center items-center overflow-auto relative"
      style={{
        background: `url("https://i.ytimg.com/vi/EVDg3jVDHec/maxresdefault.jpg")`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        height: "50vh",
        width: "100vw",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="sticky flex-row items-center justify-center text-center pt-12">
        <div
          className="w-full cursor-pointer flex align-middle justify-center pt-4 pb-4 mx-auto"
          onClick={() => window.open("/gallery", "_self")}
        >
          <img
            className="w-16 h-16 outline outline-1 outline-white rounded-full"
            src={pp}
            alt="profile pic"
          />
        </div>
      </div>
      {/*}<div
        className="border-white md:border-t-2 md:border-b-2 w-64 pt-2 md:pt-16 md:pb-16"
        style={{ width: 300 }}
      >
        <div
          className="flex flex-row justify-center items-center cursor-pointer hover:animate-pulse"
          onClick={() => {
            window.open("https://ffm.to/lowlife-inlove");
          }}
        >
          <img
            src={
              "https://t2.genius.com/unsafe/576x576/https%3A%2F%2Fimages.genius.com%2Fba7338dad0033136e6d6f779f97d31a1.716x716x1.jpg"
            }
            alt="low-life-in-love"
          />
        </div> -->
        <div className="text-center">
          <TypewriterComponent
            onInit={(typewriter) => {
              typewriter
                .typeString("stream low life in love today")
                .pauseFor(2500)
                .start();
            }}
          />
        </div>
          </div>*/}
      <nav style={{ width: "50vw" }}>
        <div className="sm:flex sm:items-center sm:flex-col rounded-md h-18 pt-2 sm:pt-12 sm:pb-6">
          <div className="grid grid-cols-2 sm:grid-cols-none sm:flex sm:flex-row text-sm sm:text-base w-full border-2 rounded-md">
            <div
              className="flex flex-row h-12 justify-center text-center items-center cursor-pointer width-36 w-full transition duration-500 ease-in-out hover:bg-gray-200 hover:text-gray-900"
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
              className="flex flex-row h-12 justify-center text-center items-center cursor-pointer width-36 w-full transition duration-500 ease-in-out hover:bg-gray-200 border-l-2 hover:text-gray-900"
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
              className="flex flex-row h-12 justify-center text-center items-center cursor-pointer width-36 w-full transition duration-500 ease-in-out hover:bg-gray-200 sm:border-l-2 hover:text-gray-900"
              onClick={() => {
                window.open("https://soundcloud.com/jonahzzz", "_blank");
              }}
            >
              soundcloud
            </div>
            <div
              className="flex flex-row h-12 justify-center text-center items-center cursor-pointer width-36 w-full transition duration-500 ease-in-out hover:bg-gray-200 border-l-2 hover:text-gray-900"
              onClick={() => {
                window.open("https://www.instagram.com/jonahzd/", "_blank");
              }}
            >
              apple music
            </div>
            <div
              className="flex flex-row h-12 justify-center text-center items-center cursor-pointer width-36 w-full transition duration-500 ease-in-out hover:bg-gray-200 sm:border-l-2 hover:text-gray-900"
              onClick={() => {
                window.open(
                  "https://music.apple.com/ca/artist/jonah-zed/807598675",
                  "_blank"
                );
              }}
            >
              instagram
            </div>
            <div
              className="flex flex-row h-12 justify-center text-center items-center cursor-pointer width-36 w-full transition duration-500 ease-in-out hover:bg-gray-200 border-l-2 hover:text-gray-900"
              onClick={() => {
                window.open("mailto:team@jonahzed.com", "_blank");
              }}
            >
              contact
            </div>
            <div
              className="flex flex-row h-12 justify-center text-center items-center cursor-pointer width-36 w-full transition duration-500 ease-in-out hover:bg-gray-200 sm:border-l-2 hover:text-gray-900"
              onClick={() => {
                window.open("/gallery", "_self");
              }}
            >
              gallery
            </div>
            {/* <div
              className="hidden sm:flex flex-row h-12 justify-center text-center items-center cursor-pointer width-36 w-full transition duration-500 ease-in-out hover:bg-gray-200 border-l-2 hover:text-gray-900"
              onClick={() => {}}
            >
              
            </div> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
