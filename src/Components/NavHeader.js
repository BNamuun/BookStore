import Raduga from "../images/6783234.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAtom } from "@fortawesome/free-solid-svg-icons";
export function NavHeader() {
  return (
    // style={{ backgroundColor: "#FEFF86" }}
    <div className="raduga d-flex">
      <div className="d-flex m-auto align-self-center navbar-txt">
        {" "}
        <FontAwesomeIcon
          className="mx-2"
          icon={faAtom}
          size="xl"
          style={{ color: "#251f51" }}
        />
        <p className="navText my-auto">
          Англи хэлний хүүхдийн хялбаршуулсан ном
        </p>
        <FontAwesomeIcon
          className="mx-2"
          icon={faAtom}
          size="xl"
          style={{ color: "#251f51" }}
        />
      </div>
    </div>
  );
}
