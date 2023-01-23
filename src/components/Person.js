import React, { useState } from "react";

const Person = (props) => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover((prevState) => !prevState);
  };

  return (
    <div className="col-6 col-lg-3 mb-3 person" style={props.pos}>
      <img
        className="w-100 grow"
        src={props.src}
        alt=""
        onMouseEnter={onHover}
        onMouseLeave={onHover}
      />
      {hover && (
        <div className="text-white show position-fixed top-50 start-50 translate-middle">
          <h1>{props.name}</h1>
          <h4>
            {props.role} &middot; {props.dept}
          </h4>
        </div>
      )}
    </div>
  );
};

export default Person;
