import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookAtlas } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { RiFacebookCircleFill } from "react-icons/ri";
import "../css/footer.css";
export function Footer() {
  const linkStyle = {
    textDecoration: "none",
    color: "white",
  };
  return (
    <div className="footerS">
      <div className="containerF white d-flex justify-content-between">
        <div className="logo">
          Erdem store <FontAwesomeIcon icon={faBookAtlas} size="xl" />
        </div>
        <ul className="d-flex gap-3 white footText p-0 m-0 flex-wrap align-items-center">
          <Link to="/" as={Link} style={linkStyle}>
            Нүүр
          </Link>
          <Link to="/" as={Link} style={linkStyle}>
            Usborne
          </Link>
          <Link to="/" as={Link} style={linkStyle}>
            IELTS
          </Link>
          <Link to="/" as={Link} style={linkStyle}>
            Бусад
          </Link>
        </ul>

        <Link
          to={"https://www.facebook.com/"}
          target="_blank"
          as={Link}
          style={linkStyle}
        >
          {/* <GrFacebook /> */}
          <RiFacebookCircleFill style={{ fontSize: "50" }} />
        </Link>
      </div>
      <div className="m-auto containerF">
        <p className="footer-right text-center">
          © Бүх эрх хуулиар хамгаалагдасан болно – Erdem store
        </p>
      </div>
    </div>
  );
}
