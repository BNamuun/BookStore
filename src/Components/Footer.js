import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookAtlas } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { RiFacebookCircleFill } from "react-icons/ri";
import "../css/footer.css";
export function Footer() {
  return (
    <div className="footerS pt-5">
      <div className="containerF white d-flex justify-content-between">
        <div className="logo">
          Erdem store <FontAwesomeIcon icon={faBookAtlas} size="xl" />
        </div>
        <ul className="d-flex gap-3 white footText">
          <Link to="/" as={Link}>
            Нүүр
          </Link>
          <Link to="/" as={Link}>
            Usborne
          </Link>
          <Link to="/" as={Link}>
            IELTS
          </Link>
          <Link to="/" as={Link}>
            Бусад
          </Link>
        </ul>

        <Link to={"https://www.facebook.com/"} target="_blank" as={Link}>
          {/* <GrFacebook /> */}
          <RiFacebookCircleFill style={{ fontSize: "50" }} />
        </Link>
      </div>
      <div className="m-auto text-center">
        <p>© All rights reserved – Erdem store</p>
      </div>
    </div>
  );
}
