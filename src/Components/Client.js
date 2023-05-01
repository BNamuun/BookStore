import { Route, Routes } from "react-router-dom";
import { Header } from "./Header";
import { Info } from "./info";
import { HeaderNew } from "./HeaderNew";
import { Details } from "./details";
import { ShoppingCard } from "./ShoppingCart";
import { ShoppingCardDetails } from "./ShoppingCardDetails";
import { NavbarTop } from "./NavbarTop";
import { Footer } from "./Footer";
import { Order } from "./Order";
import { AudioBookPlayer } from "./AudioExample";
import { MakeOrder } from "./makeOrder";

export function Client() {
  return (
    <>
      <HeaderNew />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/products" element={<Info />} />
        <Route path="/products/:id" element={<Order />} />
        <Route path="/audio" element={<AudioBookPlayer />} />
        <Route path="/makeOrder" element={<MakeOrder />} />
      </Routes>
      <Footer />
    </>
  );
}
