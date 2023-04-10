import "../css/nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookAtlas } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { SlBasket } from "react-icons/sl";
import CartContext from "../context/cart/CartContext";
import { useContext } from "react";
export function HeaderNew() {
  const { cartItems } = useContext(CartContext);
  const linkStyle = {
    textDecoration: "none",
    color: "#063255",
  };

  return (
    <>
      <div className="containerNav">
        <div className="headingS rowS">
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
            <Link className="cta" to="/" as={Link} style={linkStyle}>
              Захиалах
            </Link>
            <Link to="/shoppingCard" as={Link} style={linkStyle}>
              <SlBasket className="text-2xl" />
              {cartItems.length > 0 && (
                <div className="item__count">
                  {" "}
                  <span>{cartItems.length}</span>
                </div>
              )}
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}
