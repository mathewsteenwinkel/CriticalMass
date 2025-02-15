import React, { useEffect, useRef } from "react";
import "./CustomCursor.css";

function CustomCursor({ isVisible }) {
  const cursorRef = useRef(null);
  const position = useRef({ x: 0, y: 0 }); // Target position
  const cursorPos = useRef({ x: 0, y: 0 }); // Current position (animated)
  const animationFrameId = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const trackCursor = (e) => {
      position.current.x = e.clientX;
      position.current.y = e.clientY;
    };

    document.addEventListener("mousemove", trackCursor);

    const animate = () => {
      cursorPos.current.x += (position.current.x - cursorPos.current.x) * 0.1; // Smoothing factor
      cursorPos.current.y += (position.current.y - cursorPos.current.y) * 0.1;

      if (cursor) {
        cursor.style.left = `${cursorPos.current.x}px`;
        cursor.style.top = `${cursorPos.current.y}px`;
      }

      animationFrameId.current = requestAnimationFrame(animate);
    };

    animate(); // Start animation loop

    return () => {
      document.removeEventListener("mousemove", trackCursor);
      cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  return (
    <div ref={cursorRef} className="cursor" style={{ display: isVisible ? "flex" : "none" }}>
      <div className="playButton"></div>
    </div>
  );
}

export default CustomCursor;
