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
import { UserLogin } from "./UserLogin";
import { useContext, useEffect } from "react";
import CartContext from "../context/cart/CartContext";
import { HeaderNewAudio } from "./HeaderNewAudio";
import { Audios } from "./Audios";
import { UserProvider } from "./userProvider";

export function Client() {
  // const { audioNavbar, setAudioNavbar } = useContext(CartContext);

  // const token = localStorage.getItem("ErdemToken");
  // console.log("enesdh", token);

  // if (token) {
  //   setAudioNavbar(true);
  //   window.location.reload();
  // } else {
  //   setAudioNavbar(false);
  // }

  const { audioNavbar, setAudioNavbar } = useContext(CartContext);

  // useEffect(() => {
  //   const token = localStorage.getItem("ErdemToken");
  //   if (token) {
  //     setAudioNavbar(true);
  //     // window.location.reload();
  //   } else {
  //     setAudioNavbar(false);
  //   }
  // }, []);

  // console.log("xoxo", audioNavbar);
  return (
    <>
      {/* {audioNavbar ? <HeaderNewAudio /> : <HeaderNew />} */}
      <HeaderNewAudio />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/products" element={<Info />} />
        <Route path="/products/:id" element={<Order />} />
        {/* <Route path="/audio" element={<AudioBookPlayer />} /> */}
        {/* <UserProvider> */}
        <Route path="/audio" element={<Audios />} />
        {/* </UserProvider> */}
        <Route path="/makeOrder" element={<MakeOrder />} />
        <Route path="/login" element={<UserLogin />} />
      </Routes>
      <Footer />
    </>
  );
}
