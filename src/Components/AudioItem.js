import { useContext, useEffect, useRef } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { AudioContext } from "./AudioProvider";
export function AudioItem({ link, image }) {
  const { current, setCurrent } = useContext(AudioContext);
  const player = useRef();
  useEffect(() => {
    if (current !== link) {
      player.current.audio.current.pause();
    }
  }, [current]);
  return (
    <>
      <div className="relative">
        <img src={image} alt="test" className="hover:opacity-70" />
        <div className="absolute bottom-0 bg-zinc-700 bg-opacity-75 text-white w-full pt-2">
          <AudioPlayer
            ref={player}
            src={link}
            onPlay={(e) => setCurrent(link)}
          />
        </div>
      </div>
    </>
  );
}
