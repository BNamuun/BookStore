import { Route, Routes } from "react-router-dom";
import { AddProducts } from "./AddProducts";
import { NavBar } from "./Navbar";

export function Admin() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>Welcome</h1>} />
        <Route path="/addProducts" element={<AddProducts />} />
      </Routes>
    </>
  );
}
