import { Route, Routes } from "react-router-dom";
import { Header } from "./Header";
import { NavbarTop } from "./Navbar";

export function Client() {
  return (
    <>
      <NavbarTop />
      <Routes>
        <Route path="/" element={<Header />} />
      </Routes>
    </>
  );
}
