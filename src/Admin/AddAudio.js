import React, { useState } from "react";
import axios from "axios";
export function UploadAudio() {
  const [file, setFile] = useState([]);
  const [audio, setUrl] = useState([]);
  const [images, setImage] = useState("");
  const [uploading, setUploading] = useState(false);
  const [title, setTitle] = useState("");
  async function handleFileUpload(event) {
    setUploading(true);
    const imageFile = event.target.files[0];
    const formData = new FormData();
    formData.append("image", imageFile); //formData.append(name, value) – add a form field with the given name and value,
    await fetch(`${process.env.REACT_APP_API_URL}/upload-image`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        setImage(data);
        setUploading(false);
      });
  }
  console.log("ene", images);
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
  function submit() {
    // console.log({ title, categoryId, text, image });
    axios
      .post(`${process.env.REACT_APP_API_URL}/audioInfo`, {
        title,
        audio,
        images,
      })
      .then((res) => {
        const { status } = res;
        if (status === 201) {
          alert("Success");
          setUrl("");
          setImage("");
          setTitle("");
          window.location.reload();
        }
      });
  }
  // console.log("url bna", audio);
  //   const fileOnChange = async (event) => {
  // event.preventDefault();
  //   const data = await response.json();
  // setUrl(data);
  // console.log(data, "audioshuude");
  //   };

  return (
    <div className="m-auto max-w-screen-xl mt-5 grid gap-y-7">
      <div>
        <h2 className="text-orange-400">Аудионы нэр</h2>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form-control"
          placeholder="Аудионы нэр"
        ></input>
      </div>
      <div>
        <h1>Upload audio</h1>

        <form method="post" encType="multipart/form-data">
          <label>File</label>
          <input type="file" name="audio" onChange={handleUploadAudio} />
        </form>
      </div>
      <div>
        <h1>Upload picture</h1>
        <div>
          <input type="file" name="image" onChange={handleFileUpload} />
          {uploading && (
            <div className="spinner-border" role="status">
              {" "}
            </div>
          )}
          {images && <img src={images.path} width="100" alt="" />}
        </div>
      </div>
      <button className="btn btn-primary m-3" onClick={submit}>
        Submit
      </button>
    </div>
  );
}
