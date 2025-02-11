import React, { useEffect, useRef } from "react";
import "./TrailHeadCursor.css";


function TrailHeadCursor({ isVisible }) {

  const text = <>
  APPLY <br /> NOW
  </>

  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const trackCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    document.addEventListener("mousemove", trackCursor);

    return () => {
      document.removeEventListener("mousemove", trackCursor);
    };
  }, []);

  return (
    <div ref={cursorRef} className="cursor" style={{ display: isVisible ? "flex" : "none" }}>
      <div className="text">
        {text}
      </div>
    </div>
  );
}

export default TrailHeadCursor;
