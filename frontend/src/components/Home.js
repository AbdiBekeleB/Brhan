import React from "react";
import Carousel from "react-bootstrap/Carousel";
import s01 from "../static/s01.jpg";
import s02 from "../static/s02.png";
import s03 from "../static/s03.jpg";

const Home = () => {
  return (
    <div className="row pt-2">
      <Carousel variant="dark">
        <Carousel.Item>
          <img className="d-block w-100" src={s01} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={s02} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={s03} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
