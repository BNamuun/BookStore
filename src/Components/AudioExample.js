import audioSongImg from "../music/Wild School.mp3";
import audioSongImg1 from "../music/The dress-up box.mp3";
import img from "../images/test.jpg";
import img1 from "../images/test_2.jpg";
import { AudioBook } from "./AudioBook";

export function AudioBookPlayer() {
  const audioArr = [
    { img: img, audioSongImg: audioSongImg },
    { img: img1, audioSongImg: audioSongImg1 },
    { img: img1, audioSongImg: audioSongImg1 },
    { img: img1, audioSongImg: audioSongImg1 },
  ];

  return (
    <>
      <div className="containerF p-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5 ">
          {audioArr.map((e) => {
            return <AudioBook img={e.img} audioSongImg={e.audioSongImg} />;
          })}
        </div>
      </div>
    </>
  );
}
