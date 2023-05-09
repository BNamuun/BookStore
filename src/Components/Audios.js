import axios from "axios";
import { AudioItem } from "./AudioItem";
import { AudioProvider } from "./AudioProvider";
import { useEffect, useState } from "react";

export function Audios() {
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

  console.log(AudioInfo);

  useEffect(() => {
    loadAudioInfo();
  }, []);
  if (!AudioInfo) return <h3>Loading...</h3>;
  return (
    <>
      <AudioProvider>
        <div className="containerF p-5 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {AudioInfo.map((e) => {
              return <AudioItem link={e.audio} image={e.images.path} />;
            })}
          </div>
        </div>
      </AudioProvider>
    </>
  );
}
