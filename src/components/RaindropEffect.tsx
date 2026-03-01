// raindrop effect - album cover images falling down the screen
// purely cosmetic bg animation, doesnt block clicks

"use client";

import { useEffect, useRef } from "react";

// the images that randomly fall as raindrops
const images = ["/imgs/drake.jpg", "/imgs/her loss.jpg", "/imgs/tecca .jpg"];

export default function RaindropEffect() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // creates a single raindrop element with a random image and position
    function createRaindrop() {
      if (!container) return;

      const drop = document.createElement("div");
      drop.className = "raindrop";

      // pick a random album cover
      const img = document.createElement("img");
      const randomImage = images[Math.floor(Math.random() * images.length)];
      img.src = randomImage;
      img.alt = "";
      img.loading = "lazy";

      // random position and speed so they dont all look the same
      const startX = Math.random() * window.innerWidth;
      const duration = 3 + Math.random() * 4;
      const delay = Math.random() * 2;

      drop.style.left = `${startX}px`;
      drop.style.top = "-100px";
      drop.style.animationDuration = `${duration}s`;
      drop.style.animationDelay = `${delay}s`;

      drop.appendChild(img);
      container.appendChild(drop);

      // clean up after the animation finishes so we dont leak dom nodes
      // duration + delay because the drop waits before it starts falling
      setTimeout(() => {
        drop.remove();
      }, (duration + delay) * 1000);
    }

    // spawn a new raindrop every 800ms
    const interval = setInterval(createRaindrop, 800);

    // kick off a few immediately so the screen isnt empty on load
    for (let i = 0; i < 3; i++) {
      setTimeout(createRaindrop, i * 100);
    }

    // cleanup when the component unmounts - stop spawning + nuke all existing drops
    return () => {
      clearInterval(interval);
      if (container) {
        container.innerHTML = "";
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true" // screen readers should ignore this, its just eye candy
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 5,
        overflow: "hidden",
      }}
    />
  );
}
