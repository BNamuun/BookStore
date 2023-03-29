import Carousel from "react-bootstrap/Carousel";
import first from "../images/firstLevelBook.jpeg";
import second from "../images/usborneL2.jpeg";
import third from "../images/level3.jpeg";
import fourth from "../images/level4.jpeg";
export function CarouselNav() {
  return (
    <Carousel style={{ height: "70vh" }} variant="dark" fade>
      <Carousel.Item interval={2000} style={{ height: "70vh" }}>
        <img className="d-block w-50" src={first} alt="Second slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000} style={{ height: "70vh" }}>
        <img className="d-block w-50" src={second} alt="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000} style={{ height: "70vh" }}>
        <img className="d-block w-50" src={third} alt="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000} style={{ height: "70vh" }}>
        <img className="d-block w-50" src={fourth} alt="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
