import { AudioBook } from "./AudioBook";
import audioSongImg from "../music/Wild School.mp3";
import audioSongImg1 from "../music/The dress-up box.mp3";
import img from "../images/test.jpg";
import img1 from "../images/test_2.jpg";
import { AudioBookExample } from "./AudioBookEx";

export function AudioExample() {
  const audioArr = [
    { img: img, audioSongImg: audioSongImg },
    { img: img1, audioSongImg: audioSongImg1 },
  ];

  return (
    <>
      {audioArr.map((e) => {
        return <AudioBookExample img={e.img} audioSongImg={e.audioSongImg} />;
      })}
    </>
  );
}
