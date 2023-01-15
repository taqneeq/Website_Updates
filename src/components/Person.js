import React, { useState } from "react";
// import Carousel from "@brainhubeu/react-carousel";
// import "@brainhubeu/react-carousel/lib/style.css";

const Person = (props) => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover((prevState) => !prevState);
  };

  return (
    <div className="col-lg-3 position-relative">
      <img
        className="w-100 grow"
        src={props.src}
        alt=""
        onMouseEnter={onHover}
        onMouseLeave={onHover}
      />
      {hover && (
        <h1 className="text-white text-uppercase fw-bold show position-fixed top-50 start-50 translate-middle z-5">
          {props.name}
        </h1>
      )}
    </div>
  );
};

export default Person;
