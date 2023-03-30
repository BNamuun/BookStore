import axios from "axios";
import { useEffect, useState } from "react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
export function AddProducts() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const [uploading, setUploading] = useState(false);

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

  function submit() {
    // console.log({ title, categoryId, text, image });
    axios
      .post(`${process.env.REACT_APP_API_URL}/articles`, {
        title,
        content: text,
        image,
      })
      .then((res) => {
        const { status } = res;
        if (status === 201) {
          alert("Success");
          setTitle("");
          setText("");
        }
      });
  }
  // console.log(categoryId);
  return (
    <div className="d-flex flex-column gap-3 m-5">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="form-control"
        placeholder="Гарчиг"
      ></input>

      <CKEditor
        editor={ClassicEditor}
        data={text}
        onChange={(event, editor) => {
          const data = editor.getData();
          setText(data);
          // console.log({ event, editor, data });
        }}
      />
      {/* <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="form-control"
        placeholder="Мэдээ оруулах"
      ></input> */}
      {/* <form
        action="http://localhost:8000/upload-image"
        method="post"
        enctype="multipart/form-data"
        style={{ margin: "2em" }}
      >
        <input type="file" name="image" />
        <button type="submit">Submit</button>
      </form> */}
      <div>
        <input type="file" name="image" onChange={handleFileUpload} />
        {uploading && (
          <div className="spinner-border" role="status">
            {" "}
          </div>
        )}
        {image && <img src={image.path} width="100" alt="" />}
      </div>
      <button className="btn btn-primary m-3" onClick={submit}>
        Submit
      </button>
    </div>
  );
}
