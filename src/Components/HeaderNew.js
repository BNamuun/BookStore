import "../css/nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookAtlas } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export function HeaderNew() {
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
            <Link to="detail" as={Link} style={linkStyle}>
              Details
            </Link>
            <Link className="cta" to="/" as={Link} style={linkStyle}>
              Захиалах
            </Link>
            <Link to="/" as={Link} style={linkStyle}>
              Some btn
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}
