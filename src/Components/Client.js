import { Route, Routes } from "react-router-dom";
import { Header } from "./Header";
import { NavbarTop } from "./NavbarTop";
import { Info } from "./info";
import { HeaderNew } from "./HeaderNew";
import { Footer } from "./Footer";
import { Details } from "./details";

export function Client() {
  return (
    <>
      <HeaderNew />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/products" element={<Info />} />
        <Route path="/detail" element={<Details />} />
      </Routes>
      <Footer />
    </>
  );
}
