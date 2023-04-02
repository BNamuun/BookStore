import Carousel from "react-bootstrap/Carousel";
import first from "../images/firstLevelBook.png";
import second from "../images/usborneL2.png";
import third from "../images/level3.png";
import fourth from "../images/level4.png";
export function CarouselNav() {
  return (
    <Carousel style={{ height: "70vh" }} variant="dark">
      <Carousel.Item
        interval={3000}
        style={{ height: "70vh" }}
        className="row align-items-center bg-1 bg-style pt-5"
      >
        <img
          className="d-block carousel-img w-50 col"
          src={first}
          alt="Second slide"
        />
        <Carousel.Caption className="col">
          <h3>Англи хэлний хүүхдийн анхан шатны ном</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur
            adipiscing elit.
          </p>
          <button className="btn btn-primary"> Дэлгэрэнгүй </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item
        interval={3000}
        style={{ height: "70vh" }}
        className="row align-items-center bg-2 bg-style"
      >
        <img
          className="d-block carousel-img w-50 col"
          src={second}
          alt="Second slide"
        />
        <Carousel.Caption className="col">
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className="btn btn-primary"> Дэлгэрэнгүй </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item
        interval={3000}
        style={{ height: "70vh" }}
        className="row align-items-center bg-3 bg-style"
      >
        <img
          className="d-block carousel-img w-50 col"
          src={third}
          alt="Second slide"
        />
        <Carousel.Caption className="col">
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className="btn btn-primary"> Дэлгэрэнгүй </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item
        interval={3000}
        style={{ height: "70vh" }}
        className="row align-items-center bg-4 bg-style"
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
          <button className="btn btn-primary"> Дэлгэрэнгүй </button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
