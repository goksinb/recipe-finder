import {useEffect, useRef} from "react";
import heroVideo from "../assets/hero.mp4";
// import heroPoster from "../assets/hero-poster.jpg"; // optional
// import heroWebm from "../assets/hero.webm"; // optional
import "../styles/video.css";

export default function BackgroundVideo({
  mp4 = heroVideo, // use imported file by default
  webm = "/media/hero.webm",
  poster = "/media/hero-poster.jpg",
  className = "",
}) {
  const ref = useRef(null);

  useEffect(function () {
    const video = ref.current;
    if (!video) return;

    function handleVisibility() {
      if (document.hidden) {
        video.pause();
      } else if (
        !window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        video.play().catch(function () {});
      }
    }

    document.addEventListener("visibilitychange", handleVisibility);
    handleVisibility();
    return function () {
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <div className={`bg-video ${className}`} aria-hidden="true">
      <video
        ref={ref}
        className="bg-video__media"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster}
      >
        <source src={webm} type="video/webm" />
        <source src={mp4} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="bg-video__scrim" />
    </div>
  );
}
