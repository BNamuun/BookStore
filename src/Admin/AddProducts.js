import axios from "axios";
import { useState } from "react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { Characteristic } from "../Components/Modal_chars";
export function AddProducts() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState([]);
  const [images, setImages] = useState([]);
  const [CKimages, setCKImages] = useState([]);
  const [content, setContent] = useState("");
  const [extraContent, setExtraContent] = useState("");
  const [uploading, setUploading] = useState(false);
  const [price, setPrice] = useState();
  const [modalVars, setModalVats] = useState();
  const [some, setSome] = useState("");
  async function handleFileUpload(event) {
    setUploading(true);
    const imageFile = event.target.files[0];
    const formData = new FormData();
    formData.append("images", imageFile); //formData.append(name, value) – add a form field with the given name and value,
    await fetch(`${process.env.REACT_APP_API_URL}/upload-images`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "some");
        setImages([...images, data]);
        setUploading(false);
      });
  }

  // console.log(price);
  function submit() {
    // console.log({ title, categoryId, text, image });
    axios
      .post(`${process.env.REACT_APP_API_URL}/products`, {
        title,
        content: text,
        detailedContent: content,
        extraContent: extraContent,
        charcs: modalVars,
        images,
        price,
        some,
      })
      .then((res) => {
        const { status } = res;
        if (status === 201) {
          alert("Success");
          setTitle("");
          setText("");
          setPrice();
          window.location.reload();
        }
      });
  }
  function savedata(state) {
    setModalVats(state);
  }

  console.log(modalVars);
  return (
    <div className="d-flex flex-column gap-3 m-5">
      <h2>Барааны нэр</h2>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="form-control"
        placeholder="Барааны нэр"
      ></input>
      <h2> Short product content</h2>
      <CKEditor
        editor={ClassicEditor}
        onChange={(event, editor) => {
          const data = editor.getData();
          setText(data);
          // console.log({ event, editor, data });
        }}
      />
      <h2> Detailed product content</h2>
      <CKEditor
        editor={ClassicEditor}
        data={content}
        onChange={(event, editor) => {
          const contentL = editor.getData();
          setContent(contentL);
          // console.log({ event, editor, data });
        }}
      />
      <h3>Additional information</h3>
      <CKEditor
        editor={ClassicEditor}
        data={extraContent}
        onChange={(event, editor) => {
          const extraContent = editor.getData();
          setExtraContent(extraContent);
          // console.log({ event, editor, data });
        }}
      />
      <Characteristic savedata={savedata} />

      {modalVars !== undefined && (
        <div>
          {Object.keys(modalVars).map((key) => (
            <p key={key}>
              {key}: {modalVars[key]}
            </p>
          ))}
        </div>
      )}

      <input
        value={some}
        onChange={(e) => setSome(e.target.value)}
        className="form-control"
        placeholder="Нэмэлт url"
      ></input>
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
        {images.map((image) => (
          <img src={image.path} width="100px" alt="" />
        ))}
        {image && <img src={image.path} width="100px" alt="" />}
      </div>
      <input
        type="number"
        id="quantity"
        name="quantity"
        onChange={(e) => setPrice(e.target.value)}
        className="form-control"
        placeholder="Үнэ"
      ></input>
      <button className="btn btn-primary m-3" onClick={submit}>
        Submit
      </button>
    </div>
  );
}
