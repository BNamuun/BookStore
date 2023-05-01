import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
export function MusicPlayer(img, audio) {
  return (
    <>
      <div className="relative">
        <img src={img} alt="test" className="hover:opacity-70" />
        <div className="absolute bottom-0 bg-zinc-700 bg-opacity-75 text-white w-full pt-2">
          <AudioPlayer
            src={audio}
            onPlay={(e) => console.log("onPlay")}

            // other props here
          />
        </div>
      </div>
    </>
  );
}
