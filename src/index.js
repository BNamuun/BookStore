import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Helmet from "react-helmet";
<Helmet>
  <head>
    <meta property="og:title" content="Namuun" />
    <meta property="og:url" content="https://book-store-flame.vercel.app/" />
    <meta property="og:type" content="article" />
    <meta
      property="og:description"
      content="iim yum ban skdj flks jfkls jlkf"
    />
    <meta
      property="og:image"
      content="https://res.cloudinary.com/dkmzrowed/image/upload/v1683468942/public/level1/p7vz2u1jtqgs2glupzud.jpg"
    />
  </head>
</Helmet>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
