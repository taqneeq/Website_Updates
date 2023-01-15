import React, { useState } from 'react'
import { useEffect } from 'react';
import './head.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import Animate_cursor from "./Animate_cursor";


export default function Head() {

    const [mode, Setmode] = useState(false);

    useEffect(() => {
        Aos.init()
    }, []);


    function show_display() {
        Setmode(true);
        document.getElementById("sponsor_display").style.display = "none";
        document.getElementById("menu").style.display = "none";
        document.getElementById("heading-div").style.display = "none";
    }

    function remove_display() {
        Setmode(false);
        document.getElementById("menu").style.display = "block";
        document.getElementById("sponsor_display").style.display = "flex";
        document.getElementById("heading-div").style.display = "flex";
    }



    function reveal() {
        var reveals = document.querySelectorAll(".reveal");

        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 10;

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            } else {
                reveals[i].classList.remove("active");
            }
        }
    }
    window.addEventListener("scroll", reveal);
    const height = "630px";
    return (
        <>
            <Animate_cursor />
            <div className="background" style={{
                backgroundImage: `url(${process.env.PUBLIC_URL + "/Background.jpg"})`,
                backgroundSize: "cover",
                height: "100vh",
                width: "100%",
                backgroundRepeat: "no-repeat",
                padding: "0px"
            }}>

                {/* <div className="heading-div">
                    <h1 className='heading'>Heading</h1><br />
                    <h1 className='heading' id="heading-bold">Heading</h1><br />
                    <p className='demo-text'>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                </div> */}


                <div id="menu" class="colors show" onClick={show_display}>
                    <div id="bar1" class="bar"></div>
                    <div id="bar2" class="bar"></div>
                    <div id="bar3" class="bar"></div>
                </div>

 
                {mode && (
                    <div data-aos="fade-right" className="container-fluid bg-dark" style={{ height: "100vh", width: "100%" }}>

                        <div id="remove" onClick={remove_display}>
                            <div id="menu" class="colors remove" >
                                <div id="bar1" class="bar"></div>
                                <div id="bar2" class="bar"></div>
                                <div id="bar3" class="bar"></div>
                            </div>
                        </div>




                        <ul data-aos="fade-right" className="contents" id="contents">
                            <li data-aos = "fade-down" data-aos-delay="500"><span><a href="#">Home</a></span></li>
                            <li data-aos = "fade-down" data-aos-delay="700"><span><a href="#">About</a></span></li>
                            <li data-aos = "fade-down" data-aos-delay="900"><span><a href="#">Services</a></span></li>
                            <li data-aos = "fade-down" data-aos-delay="1100"><span><a href="#">Case Studies</a></span></li>
                            <li data-aos = "fade-down" data-aos-delay="1300"><span><a href="#">Contact</a></span></li>
                        </ul>
                    </div>

                )}

                
            </div>

            <div className='container' style={{ paddingLeft: "10px" }} id='sponsor_display'>

                <div data-aos="fade-up" class="thumbnail reveal sponsor-space">
                    <img data-aos-delay="500" src="https://1minus1-2021.s3.eu-west-2.amazonaws.com/xboxstudios_14f0ae6c71.svg" alt="Sponsor 1" />
                </div>


                <div data-aos="fade-up" class="thumbnail reveal sponsor-space">
                    <img data-aos="fade-up" data-aos-delay="600" src="https://1minus1-2021.s3.eu-west-2.amazonaws.com/forza_new_a0a1ddff76.png" alt="Sponser 2" />
                </div>


                <div data-aos="fade-up" class="thumbnail reveal sponsor-space">
                    <img data-aos="fade-up" data-aos-delay="700" src="https://1minus1-2021.s3.eu-west-2.amazonaws.com/turn10_d3a138ac2d.svg" alt="Sponsor 3" />
                </div>


                <div data-aos="fade-up" class="thumbnail reveal sponsor-space">
                    <img data-aos="fade-up" data-aos-delay="800" src="https://1minus1-2021.s3.eu-west-2.amazonaws.com/small_fasttravel_29cfc45cba.png" alt="Sponsor 4" />
                </div>


                <div data-aos="fade-up" class="thumbnail reveal sponsor-space">
                    <img data-aos="fade-up" data-aos-delay="900" src="https://1minus1-2021.s3.eu-west-2.amazonaws.com/inxile_logo_e4244e8471.png" alt="Sponsor 5" />
                </div>


                <div data-aos="fade-up" class="thumbnail reveal sponsor-space">
                    <img data-aos="fade-up" data-aos-delay="1000" src="https://1minus1-2021.s3.eu-west-2.amazonaws.com/small_Rocksteady_ef14bba52a.png" alt="Sponsor 6" />
                </div>


                <div data-aos="fade-up" class="thumbnail reveal sponsor-space">
                    <img data-aos="fade-up" data-aos-delay="1100" src="https://1minus1-2021.s3.eu-west-2.amazonaws.com/compulsion_logo1_8966ff869a.png" alt="Sponsor 7" />
                </div>


                <div data-aos="fade-up" class="thumbnail reveal sponsor-space">
                    <img data-aos="fade-up" data-aos-delay="1200" src="https://1minus1-2021.s3.eu-west-2.amazonaws.com/studiotypes_9313d3a373.svg" alt="Sponsor 8" />
                </div>


                <div data-aos="fade-up" class="thumbnail reveal sponsor-space">
                    <img data-aos="fade-up" data-aos-delay="1300" src="https://1minus1-2021.s3.eu-west-2.amazonaws.com/lightspeed_logo_new_a2fce9d216.png" alt="Sponsor 9" />
                </div>


                <div data-aos="fade-up" class="thumbnail reveal sponsor-space">
                    <img data-aos="fade-up" data-aos-delay="1400" src="https://1minus1-2021.s3.eu-west-2.amazonaws.com/tencent_new_2b1e37a84a.png" alt="Sponsor 10" />
                </div>


                <div data-aos="fade-up" class="thumbnail reveal sponsor-space">
                    <img data-aos="fade-up" data-aos-delay="1500" src="https://1minus1-2021.s3.eu-west-2.amazonaws.com/PLAION_Logo_horizontal_RGB_pos_7a5f8aea77.png" alt="Sponsor 11" />
                </div>


                <div class="thumbnail reveal sponsor-space">
                    <img data-aos="fade-up" data-aos-delay="1600" src="https://1minus1-2021.s3.eu-west-2.amazonaws.com/bonus_new2_f619346e15.png" alt="Sponsor 12" />
                </div>


            </div>

        </>



    )
}
