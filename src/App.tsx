import React from "react";
import logo from "./logo.svg";
import selfish from "./selfish.mp4";
import "./App.css";
import "./index.css";

function App() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div>
        <video
          className="aspect-w-16 aspect-h-2"
          src={selfish}
          autoPlay
          height="full"
          loop
          muted
        />
      </div>
    </div>
  );
}

export default App;
