import React from "react";
import logo1 from "../assets/img1.png"
import tqbg from "../assets/bg4.jpg"

const ParentContainer = () => {
  return (
    <><div style={{ height: '100vh', backgroundImage: `url(${ tqbg })`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <span> ABOUT TAQNEEQ! </span>
    <div className="parentContainer scroll-c">
        <div className="abouttext">
          <p>
            Over the years, Taqneeq has turned out to be an exceptional tech fest
            with 3 fun-filled & power-packed days in a row, it has illuminated each
            & every side of technology, with immense successes in organising remarkable
            events such as The Talk, Dare2Compete, Internship Fair, Game Development Workshop,
            Light Reaction, to name a few.
          </p>
          <br></br>
          <p>
            This year, as we reminisce about its previous versions, we seek to make it even more
            imposing & memorable for all of us. Episode 15 of Taqneeq encircles around
          </p>
          <br></br>
          <p>
            What meets the eye is not necessarily as it seems to be. TQ 15.0 is back with even
            more energy & enthusiasm! Times are busy and calendars full — save the dates!
          </p>
        </div>
        <br></br>
        <img src={logo1} className="aboutimage" />
      </div>
      </div></>
  );
};

export default ParentContainer;
