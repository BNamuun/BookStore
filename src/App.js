import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Client } from "./Components/Client";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Client />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
