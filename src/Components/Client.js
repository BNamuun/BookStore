import { Route, Routes } from "react-router-dom";
import { Header } from "./Header";
import { NavbarTop } from "./NavbarTop";
import { Info } from "./info";
import { HeaderNew } from "./HeaderNew";
import { Footer } from "./Footer";
import { Details } from "./details";
import { Order } from "./Order";
import { ShoppingCard } from "./ShoppingCart";
import { AudioBookPlayer } from "./AudioExample";

export function Client() {
  return (
    <>
      <HeaderNew />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/products" element={<Info />} />
        <Route path="/products/:id" element={<Order />} />
        <Route path="/audio" element={<AudioBookPlayer />} />
        {/* <Route path="/shoppingCard" element={<ShoppingCard />} /> */}
      </Routes>
      <Footer />
    </>
  );
}
