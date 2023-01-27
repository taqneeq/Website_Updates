import React from "react";
import * as FontAwesome from "react-icons/fa";
import "./Feature.css";

<<<<<<< HEAD
const Feature = ({ iconName, iconLabel }) => {
  const Icon = FontAwesome[iconName];
  return (
    <div className="feature">
      <div className="feature__circle">
        <Icon className="feature__icon" />
      </div>
      <span className="feature__label">{iconLabel}</span>
    </div>
  );
=======
const Feature = ({ iconName, iconLabel }) =>
{
    const Icon = FontAwesome[iconName];
    return (
        <div className="feature">
            <div className="feature__circle">
                <Icon className="feature__icon" />
            </div>
            <span className="feature__label">{iconLabel}</span>
        </div>
    );
>>>>>>> 769890ef5e3ebd0f955735385b3e6d0d9ea8a229
};

export default Feature;
