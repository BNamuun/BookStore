import { useEffect, useRef, useState } from "react";
import { BiArrowToRight, BiArrowToLeft } from "react-icons/bi";
import { BsFillPlayCircleFill, BsPauseCircle } from "react-icons/bs";
export function AudioBook({ img, audioSongImg, id }) {
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioPlayer = useRef();
  const progressBar = useRef();
  const animationRef = useRef();
  console.log(isPlaying);
  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  // useEffect(() => {
  //   return () => {
  //     if (isPlaying) {
  //       togglePlayPause();
  //     }
  //   };
  // }, []);
  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };
  function togglePlayPause() {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  }
  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };
  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  };
  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty(
      "--seek-before-width",
      `${(progressBar.current.value / duration) * 100}%`
    );
    setCurrentTime(progressBar.current.value);
  };
  const BFbuttonVal = 3;
  const backbutton = () => {
    progressBar.current.value = Number(progressBar.current.value - BFbuttonVal);
    changeRange();
  };
  const forwardbutton = () => {
    progressBar.current.value =
      Number(progressBar.current.value) + Number(BFbuttonVal);
    changeRange();
  };

  return (
    // <div className="containerF p-5">
    //   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5 ">
    <div className="relative">
      <img src={img} alt="test" className="hover:opacity-70" />
      <div className="absolute bottom-0 bg-zinc-700 bg-opacity-75 text-white w-full pt-2">
        <div className="flex flex justify-content-center items-center gap-2">
          <audio
            ref={audioPlayer}
            src={audioSongImg}
            preload="metadata"
          ></audio>
          <button
            className="outline-none flex items-center font-mono text-base cursor-pointer hover:bg-sky-600 text-2xl"
            onClick={backbutton}
          >
            <BiArrowToLeft />
          </button>
          <button
            className="flex outline-none bg-sky-400 rounded-r-full rounded-l-full w-8 h-8 text-8xl justify-items-center items-center"
            onClick={togglePlayPause}
          >
            {!isPlaying ? <BsFillPlayCircleFill /> : <BsPauseCircle />}
          </button>
          <button
            className="outline-none flex items-center font-mono text-base cursor-pointer hover:bg-sky-600  text-2xl"
            onClick={forwardbutton}
          >
            <BiArrowToRight />
          </button>
        </div>
        <div className="flex justify-content-center gap-2 w-full">
          <div>{calculateTime(currentTime)}</div>
          <input
            type="range"
            defaultValue="0"
            ref={progressBar}
            onChange={changeRange}
          ></input>
          <div>{duration && !isNaN(duration) && calculateTime(duration)}</div>
        </div>
      </div>
    </div>
    //   </div>
    // </div>
  );
}
