import React, { useState } from "react";

const Person = (props) => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover((prevState) => !prevState);
  };

  return (
    <div className="col-lg-3 position-relative mb-5 incIndex" style={props.pos}>
      <img
        className="w-100 grow"
        src={props.src}
        alt=""
        onMouseEnter={onHover}
        onMouseLeave={onHover}
      />
      {hover && (
        <h1
          className="text-white text-uppercase show position-fixed top-50 start-50 translate-middle"
          style={{ fontSize: "4rem", fontWeight: "900" }}
        >
          {props.name}
        </h1>
      )}
    </div>
  );
};

export default Person;
