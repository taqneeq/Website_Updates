import React, { useState } from "react";

const Person = (props) => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover((prevState) => !prevState);
  };

  return (
    <div className="col-6 col-lg-3 mb-4 person" style={props.pos}>
      <img
        className="w-100 grow"
        src={props.src}
        alt=""
        onMouseEnter={onHover}
        onMouseLeave={onHover}
      />
      {hover && (
        <h1 className="text-white text-uppercase show position-fixed top-50 start-50 translate-middle">
          {props.name}
        </h1>
      )}
    </div>
  );
};

export default Person;
