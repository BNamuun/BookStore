import "../css/nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookAtlas } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import CartContext from "../context/cart/CartContext";
import { useContext } from "react";
import { Modal } from "bootstrap";
export function HeaderNew() {
  const { items, showModal, setShowModal } = useContext(CartContext);
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
              <div className="relative">
                <TiShoppingCart
                  // onClick={() => showHideCart()}
                  className="text-2xl"
                />
                {showModal && (
                  <Modal size="medium" onClose={() => setShowModal(false)}>
                    <img
                      src={items.image}
                      alt="some"
                      style={{ width: "100px" }}
                    />
                  </Modal>
                )}

                {items.length > 0 && (
                  <div className="item-count absolute -top-3 -right-3 bg-red-500 text-xs text-white rounded-full h-6 text-center w-6 p-1">
                    {" "}
                    <span>{items.length}</span>
                  </div>
                )}
              </div>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}
