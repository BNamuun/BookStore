import audioSongImg from "../music/Wild School.mp3";
import audioSongImg1 from "../music/The dress-up box.mp3";
import img from "../images/test.jpg";
import img1 from "../images/test_2.jpg";
import { AudioBook } from "./AudioBook";
import { useState } from "react";

export function AudioBookPlayer() {
  const [activeId, setActiveId] = useState(null);
  const audioArr = [
    { id: 1, img: img, audioSongImg: audioSongImg },
    { id: 2, img: img1, audioSongImg: audioSongImg1 },
    { id: 3, img: img1, audioSongImg: audioSongImg1 },
    { id: 4, img: img1, audioSongImg: audioSongImg1 },
  ];
  // isPlaying={activeId === e.id}
  return (
    <>
      <div className="containerF p-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5 ">
          {audioArr.map((e) => {
            return (
              <AudioBook img={e.img} id={e.id} audioSongImg={e.audioSongImg} />
            );
          })}
        </div>
      </div>
    </>
  );
}
