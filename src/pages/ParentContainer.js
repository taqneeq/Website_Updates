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
    <div className="Content-main-tq">
      <h1>About Taqneeq</h1>
      <p>lorem</p>
    </div>
   





      </div></>
  );
};

export default ParentContainer;
