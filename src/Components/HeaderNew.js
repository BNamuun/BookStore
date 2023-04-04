import "../css/nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookAtlas } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export function HeaderNew() {
  return (
    <>
      <div className="containerNav">
        <div className="headingS rowS">
          <div className="logo">
            Erdem store <FontAwesomeIcon icon={faBookAtlas} size="xl" />
          </div>
          <ul className="navItems rowS" style={{ fontWeight: "bold" }}>
            <Link to="/" as={Link}>
              Нүүр
            </Link>
            <Link to="/products" as={Link}>
              Бүгд
            </Link>
            <Link to="detail" as={Link}>
              Details
            </Link>
            <Link className="cta" to="/" as={Link}>
              Захиалах
            </Link>
            <Link to="/" as={Link}>
              Some btn
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}
