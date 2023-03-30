import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Client } from "./Components/Client";
import "bootstrap/dist/css/bootstrap.min.css";
import { Admin } from "./Admin/Admin";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Client />}></Route>
          <Route path="/admin/*" element={<Admin />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
