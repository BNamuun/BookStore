import "../css/nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookAtlas } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import CartContext from "../context/cart/CartContext";
import { useContext } from "react";
import { ShoppingCard } from "./ShoppingCart";
import { Button } from "bootstrap";
import { BsWindowSidebar } from "react-icons/bs";
export function HeaderNewAudio() {
  const { items, handleOpen, showModal, handleClose } = useContext(CartContext);
  // console.log(showModal);
  const linkStyle = {
    textDecoration: "none",
    color: "#063255",
  };
  function handleOut() {
    window.confirm("Та гарахдаа итгэлтэй байна уу?");
    localStorage.removeItem("ErdemToken");
    window.location.reload();
  }
  return (
    <>
      <div className="containerNav relative sticky top-0 z-50">
        <div className="headingS rowS ">
          <div className="logo">
            Erdem store <FontAwesomeIcon icon={faBookAtlas} size="xl" />
          </div>
          <ul className="navItems rowS m-0" style={{ fontWeight: "bold" }}>
            <Link to="/" as={Link} style={linkStyle}>
              Нүүр
            </Link>
            <Link to="/products" as={Link} style={linkStyle}>
              Бүгд
            </Link>
            <Link to="/audio" as={Link} style={linkStyle}>
              AudioBook
            </Link>
            {/* <Link className="cta" to="/" as={Link} style={linkStyle}>
              Захиалах
            </Link> */}
            <Link to="/login" as={Link} style={linkStyle}>
              Нэвтрэх
            </Link>
            <button className="text-orange-600" onClick={handleOut}>
              Гарах
            </button>
            {/* <div className="relative" style={linkStyle}> */}
            <div className="relative">
              <TiShoppingCart onClick={handleOpen} className="text-2xl" />

              {items.length > 0 && (
                <div className="item-count absolute -top-3 -right-3 bg-red-500 text-xs text-white rounded-full h-6 text-center w-6 p-1">
                  {" "}
                  <span>{items.length}</span>
                </div>
              )}
            </div>
            {/* </div> */}
          </ul>
        </div>

        <ShoppingCard
          showModal={showModal}
          handleClose={handleClose}
          className="absolute top-6"
        />
      </div>
    </>
  );
}
