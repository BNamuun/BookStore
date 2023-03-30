import Carousel from "react-bootstrap/Carousel";
import first from "../images/firstLevelBook.jpeg";
import second from "../images/usborneL2.jpeg";
import third from "../images/level3.jpeg";
import fourth from "../images/level4.jpeg";
export function CarouselNav() {
  return (
    <Carousel style={{ height: "70vh" }} variant="dark" fade>
      <Carousel.Item
        interval={2000}
        style={{ height: "70vh" }}
        className="row align-items-center"
      >
        <img
          className="d-block carousel-img w-50 col"
          src={first}
          alt="Second slide"
        />
        <Carousel.Caption className="col">
          <h3>First slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className="btn btn-primary">SOme </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item
        interval={2000}
        style={{ height: "70vh" }}
        className="row align-items-center"
      >
        <img
          className="d-block carousel-img w-50 col"
          src={second}
          alt="Second slide"
        />
        <Carousel.Caption className="col">
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className="btn btn-primary">SOme </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item
        interval={2000}
        style={{ height: "70vh" }}
        className="row align-items-center"
      >
        <img
          className="d-block carousel-img w-50 col"
          src={third}
          alt="Second slide"
        />
        <Carousel.Caption className="col">
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className="btn btn-primary">SOme </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item
        interval={2000}
        style={{ height: "70vh" }}
        className="row align-items-center"
      >
        <img
          className="d-block carousel-img w-50 col"
          src={fourth}
          alt="Third slide"
        />
        <Carousel.Caption className="col">
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          <button className="btn btn-primary">SOme </button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
