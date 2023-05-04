import level_1 from "../images/firstLevelBook.png";
import level_2 from "../images/usborneL2.png";
import level_3 from "../images/level3.png";
import level_4 from "../images/level4.png";
import Nancy from "../images/Nancy.jpg";
import "../css/general.css";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { useNavigate } from "react-router-dom";
export function GeneralInfo() {
  const navigate = useNavigate();
  return (
    <>
      <section>
        <div className="containerM">
          <div className="row">
            <div className="col-sm-6 imgP col-12 m-auto">
              <img src={level_1} className="p-5" alt="some" />
            </div>
            <div className="col-sm-6 textP col-12 m-auto">
              <h1>Finsweet Was A Dream To Work With</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
                provident voluptatum ea sed autem minima labore esse reiciendis
                et suscipit!
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
                provident voluptatum ea sed autem minima labore esse reiciendis
                et suscipit!
              </p>
              <AwesomeButton
                style={{ width: "200px", fontSize: "1.1rem" }}
                type="primary"
                onPress={() => {
                  navigate("/products/0fb7da45-4222-4665-bbcf-9849757627be");
                }}
              >
                {" "}
                Дэлгэрэнгүй
              </AwesomeButton>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 textP col-12 m-auto">
              <h1>Finsweet Was A Dream To Work With</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
                provident voluptatum ea sed autem minima labore esse reiciendis
                et suscipit!
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
                provident voluptatum ea sed autem minima labore esse reiciendis
                et suscipit!
              </p>
              <AwesomeButton
                style={{ width: "200px", fontSize: "1.1rem" }}
                type="danger"
              >
                {" "}
                Дэлгэрэнгүй
              </AwesomeButton>
            </div>
            <div className="col-sm-6 imgP col-12 m-auto">
              <img src={level_2} className="p-5" alt="some" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 imgP col-12 m-auto">
              <img src={level_3} className="p-5" alt="some" />
            </div>
            <div className="col-sm-6 textP col-12 m-auto">
              <h1>Finsweet Was A Dream To Work With</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
                provident voluptatum ea sed autem minima labore esse reiciendis
                et suscipit!
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
                provident voluptatum ea sed autem minima labore esse reiciendis
                et suscipit!
              </p>
              <AwesomeButton
                style={{
                  width: "200px",
                  fontSize: "1.1rem",
                }}
                type="primary"
              >
                {" "}
                Дэлгэрэнгүй
              </AwesomeButton>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 textP col-12 m-auto">
              <h1>Finsweet Was A Dream To Work With</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
                provident voluptatum ea sed autem minima labore esse reiciendis
                et suscipit!
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
                provident voluptatum ea sed autem minima labore esse reiciendis
                et suscipit!
              </p>
              <AwesomeButton
                style={{ width: "200px", fontSize: "1.1rem" }}
                type="primary"
              >
                {" "}
                Дэлгэрэнгүй
              </AwesomeButton>
            </div>
            <div className="col-sm-6 imgP col-12 m-auto">
              <img src={level_4} className="p-5" alt="some" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 imgP col-12 m-auto">
              <img src={Nancy} className="p-5" alt="some" />
            </div>
            <div className="col-sm-6 textP col-12 m-auto">
              <h1>Finsweet Was A Dream To Work With</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
                provident voluptatum ea sed autem minima labore esse reiciendis
                et suscipit!
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
                provident voluptatum ea sed autem minima labore esse reiciendis
                et suscipit!
              </p>
              <AwesomeButton
                style={{
                  width: "200px",
                  fontSize: "1.1rem",
                }}
                type="primary"
              >
                {" "}
                Дэлгэрэнгүй
              </AwesomeButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
