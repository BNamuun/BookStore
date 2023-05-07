import audioSongImg from "../music/Wild School.mp3";
import audioSongImg1 from "../music/The dress-up box.mp3";
import img from "../images/test.jpg";
import img1 from "../images/test_2.jpg";
import { AudioBook } from "./AudioBook";
import { useEffect, useReducer, useRef, useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { MusicPlayer } from "./musicPlayer";

import "react-h5-audio-player/lib/styles.css";
import axios from "axios";

export function AudioBookPlayer() {
  const [activeId, setActiveId] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [AudioInfo, setAudioInfo] = useState([]);
  function loadAudioInfo() {
    axios.get(`${process.env.REACT_APP_API_URL}/audioInfo`).then((res) => {
      const { data, status } = res;
      if (status === 200) {
        setAudioInfo(data);
      } else {
        alert(`Алдаа гарлаа${status}`);
      }
    });
  }

  // console.log(AudioInfo);

  useEffect(() => {
    loadAudioInfo();
  }, []);

  if (!AudioInfo) return <h3>Loading...</h3>;

  const handlePlay = (id) => {
    setActiveId(id);
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };
  console.log("active", activeId);
  console.log("pause", isPlaying);
  return (
    <>
      <div className="containerF p-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {AudioInfo.map((e) => (
            <div key={e.id} className="relative">
              <img
                src={e.images.path}
                alt="test"
                className="hover:opacity-70"
              />
              <div className="absolute bottom-0 bg-zinc-700 bg-opacity-75 text-white w-full pt-2">
                <AudioPlayer
                  src={e.audio}
                  onPlay={() => handlePlay(e._id)}
                  onPause={handlePause}
                  onCanPlay={isPlaying && activeId === e._id}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
