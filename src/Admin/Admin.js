import { Route, Routes } from "react-router-dom";
import { AddProducts } from "./AddProducts";
import { NavBar } from "./Navbar";
import { OrderList } from "./OrderList";
import { SignUp } from "../Components/SignUp";
import { UploadAudio } from "./AddAudio";

export function Admin() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>Welcome</h1>} />
        <Route path="/addProducts" element={<AddProducts />} />
        <Route path="/orders" element={<OrderList />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/uploadAudio" element={<UploadAudio />} />
      </Routes>
    </>
  );
}
