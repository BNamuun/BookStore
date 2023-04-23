import { Route, Routes } from "react-router-dom";
import { Header } from "./Header";
import { Info } from "./info";
import { HeaderNew } from "./HeaderNew";
import { Footer } from "./Footer";
import { Order } from "./Order";
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
        {/* <Route path="/orderedItems" element={<ShoppingCard />} /> */}
      </Routes>
      <Footer />
    </>
  );
}
