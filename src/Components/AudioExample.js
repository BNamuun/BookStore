import audioSongImg from "../music/Wild School.mp3";
import audioSongImg1 from "../music/The dress-up box.mp3";
import img from "../images/test.jpg";
import img1 from "../images/test_2.jpg";
import { AudioBook } from "./AudioBook";
import { useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { MusicPlayer } from "./musicPlayer";
export function AudioBookPlayer() {
  const [activeId, setActiveId] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioState, setAudioState] = useState({
    audioPlayer: new Audio(),
    audioSrc: "",
  });

  console.log("front", activeId);
  const audioArr = [
    { id: 1, img: img, audioSongImg: audioSongImg },
    { id: 2, img: img1, audioSongImg: audioSongImg1 },
    { id: 3, img: img1, audioSongImg: audioSongImg1 },
    { id: 4, img: img1, audioSongImg: audioSongImg1 },
  ];
  // isPlaying={activeId === e.id}

  // function getActiveId(activatedId) {
  //   setActiveId(activatedId);
  // }
  return (
    <>
      <div className="containerF p-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5 ">
          {audioArr.map((e) => {
            return (
              <AudioBook
                img={e.img}
                id={e.id}
                audioSongImg={e.audioSongImg}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                activeId={activeId}
              />
              // <MusicPlayer img={e.img} audio={e.audioSongImg} />
              // <div className="relative">
              //   <img src={e.img} alt="test" className="hover:opacity-70" />
              //   <div className="absolute bottom-0 bg-zinc-700 bg-opacity-75 text-white w-full pt-2">
              //     <AudioPlayer
              //       src={e.audioSongImg}
              //       onPlay={(e) => console.log("onPlay")}

              //       // other props here
              //     />
              //   </div>
              // </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
