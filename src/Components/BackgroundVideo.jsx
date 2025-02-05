import React, { useState } from "react";
import "./BackgroundVideo.css";
import CustomCursor from "./CustomCursor";

function BackgroundVideo() {
  const [cursorVisible, setCursorVisible] = useState(false);

  return (
    <>
      <div className="background-video-container">

        <div
          className="video-container"
          onMouseEnter={() => setCursorVisible(true)}
          onMouseLeave={() => setCursorVisible(false)}
        >
          <CustomCursor isVisible={cursorVisible} />
          <video autoPlay muted loop id="myVideo" className="background-video">
            <source src="/Assets/MakeItCount.mp4" type="video/mp4" />
          </video>
        </div>
     
      </div>
    </>
  );
}

export default BackgroundVideo;
