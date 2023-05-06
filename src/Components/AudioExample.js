import audioSongImg from "../music/Wild School.mp3";
import audioSongImg1 from "../music/The dress-up box.mp3";
import img from "../images/test.jpg";
import img1 from "../images/test_2.jpg";
import { AudioBook } from "./AudioBook";
import { useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { MusicPlayer } from "./musicPlayer";

import "react-h5-audio-player/lib/styles.css";

export function AudioBookPlayer() {
  const [activeId, setActiveId] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioArr = [
    { id: 1, img: img, audioSongImg: audioSongImg },
    { id: 2, img: img1, audioSongImg: audioSongImg1 },
    { id: 3, img: img1, audioSongImg: audioSongImg1 },
    { id: 4, img: img1, audioSongImg: audioSongImg1 },
  ];

  // Create an audio player instance for each audio file
  const audioPlayers = audioArr.map(() => new Audio());

  const handlePlay = (id) => {
    // Stop currently playing audio (if any)
    if (activeId !== null) {
      audioPlayers[activeId].pause();
    }

    // Start playing the clicked audio file
    audioPlayers[id].play();
    setIsPlaying(true);
    setActiveId(id);
  };

  const handlePause = (id) => {
    // Pause the clicked audio file
    audioPlayers[id].pause();
    setIsPlaying(false);
    setActiveId(null);
  };

  return (
    <>
      <div className="containerF p-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {audioArr.map((e) => (
            <div key={e.id} className="relative">
              <img src={e.img} alt="test" className="hover:opacity-70" />
              <div className="absolute bottom-0 bg-zinc-700 bg-opacity-75 text-white w-full pt-2">
                <AudioPlayer
                  src={e.audioSongImg}
                  onPlay={() => handlePlay(e.id)}
                  onPause={() => handlePause(e.id)}
                  playing={activeId === e.id && isPlaying}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
