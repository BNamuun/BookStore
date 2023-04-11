import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Client } from "./Components/Client";
import "bootstrap/dist/css/bootstrap.min.css";
import { Admin } from "./Admin/Admin";
import CartState from "./context/cart/CartState";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartState>
          <Routes>
            <Route path="/*" element={<Client />}></Route>
            <Route path="/admin/*" element={<Admin />}></Route>
          </Routes>
        </CartState>
      </BrowserRouter>
    </>
  );
}

export default App;
