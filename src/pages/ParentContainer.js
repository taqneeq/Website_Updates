import React from "react";
import logo1 from "../assets/img1.png"
import tqbg from "../assets/bg4.jpg"
import Animate_cursor from '../components/animate_cursor'
import videobg from '../assets/svid.mp4'
const ParentContainer = () => {
  return (
    <>
    
            <Animate_cursor />
    <div>
    <div className="main-tq">
      <video src={videobg} autoPlay loop muted/>
    </div>
    <div className="overlay"></div>
    <div className="Content-main-tq">
      <h1>ABOUT TAQNEEQ</h1>

      <br></br>
      <br></br>

      <p>Over the years, Taqneeq has turned out to be an exceptional tech fest with 3 fun-filled & power-packed days in a row,
         it has illuminated each & every side of technology, with immense successes in organising remarkable events such as 
         The Talk, Dare2Compete, Internship Fair, Game Development Workshop, Light Reaction, to name a few.</p>

         <br></br>

      <p>
      This year, as we reminisce about its previous versions, we seek to make it even more imposing & memorable for 
      all of us. Episode 15 of Taqneeq encircles around
      </p>

      <br></br>

      <p>
      What meets the eye is not necessarily as it seems to be. TQ 15.0 is back with even more energy & enthusiasm! 
      Times are busy and calendars full — save the dates!
      </p>

    </div>
   
      </div></>
  );
};

export default ParentContainer;
