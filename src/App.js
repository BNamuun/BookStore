import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Client } from "./Components/Client";
import "bootstrap/dist/css/bootstrap.min.css";
import { Admin } from "./Admin/Admin";
// import NewState from "./context/cart/NewState";
// import CartState from "./context/cart/CartState";
import NewState from "./context/cart/NewState";
function App() {
  return (
    <>
      <BrowserRouter>
        <NewState>
          <Routes>
            <Route path="/*" element={<Client />}></Route>
            <Route path="/admin/*" element={<Admin />}></Route>
          </Routes>
        </NewState>
      </BrowserRouter>
    </>
  );
}

export default App;
