import React, { useState } from "react";
import "./BackgroundVideo.css";
import CustomCursor from "./CustomCursor";
import Blog from "./Blog";

function BackgroundVideo() {
  const [cursorVisible, setCursorVisible] = useState(false);

  return (
    <>
      <div
        className="video-container"
        onMouseEnter={() => setCursorVisible(true)}
        onMouseLeave={() => setCursorVisible(false)}
      >
        <CustomCursor isVisible={cursorVisible} />
        <video autoPlay muted loop id="myVideo" className="background-video">
          <source src="/Assets/MakeItCount.mp4" type="video/mp4" />
        </video>
        <Blog />
      </div>
    </>
  );
}

export default BackgroundVideo;
