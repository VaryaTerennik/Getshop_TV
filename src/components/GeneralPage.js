import BannerStart from "./BannerStart";
import ReactPlayer from "react-player";
import { useState, useEffect } from "react";

function GeneralPage() {
  const [stateVideo, setStateVideo] = useState({
    // url: null,
    // pip: false,
    playing: true,
    controls: false,
    // light: false,
    volume: 0.8,
    playedSeconds: 0,
    // muted: false,
    // played: 0,
    // loaded: 0,
    // duration: 0,
    // playbackRate: 1.0,
    // loop: false
  });

  const handleProgress = (stateVideo) => {
    if (!stateVideo.seeking) {
      setStateVideo(stateVideo);
    }
  };

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => prevProgress + stateVideo.playedSeconds);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [stateVideo.playedSeconds]);
  return (
    <div className="video__wrapper">
      <div className="video__container">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=M7FIvfx5J10`}
          playing={true}
          width={1280}
          height={720}
          controls={false}
          onProgress={handleProgress}
        ></ReactPlayer>
      </div>
      {progress >= 5 && <BannerStart />}
    </div>
  );
}

export default GeneralPage;
