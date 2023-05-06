import React, { useState } from "react";

export function UploadAudio() {
  const [file, setFile] = useState([]);
  const [url, setUrl] = useState([]);
  async function handleUploadAudio(event) {
    const file = event.target.files[0];
    const fd = new FormData();
    fd.append("audio", file);
    await fetch(`${process.env.REACT_APP_API_URL}/audio/upload`, {
      method: "POST",
      body: fd,
    })
      .then((res) => res.json())
      .then((data) => setUrl(data));
  }
  console.log("url bna", url);
  //   const fileOnChange = async (event) => {
  // event.preventDefault();
  //   const data = await response.json();
  // setUrl(data);
  // console.log(data, "audioshuude");
  //   };

  return (
    <div>
      <h1>Upload Track</h1>

      <form method="post" encType="multipart/form-data">
        <label>File</label>
        <input type="file" name="audio" onChange={handleUploadAudio} />
      </form>
    </div>
  );
}
