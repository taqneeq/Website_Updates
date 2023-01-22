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
        document.getElementById("hide_sponsor").style.display = "none";
        document.getElementById("menu").style.display = "none";
        document.getElementById("heading-div").style.display = "none";
    }

    function remove_display() {
        Setmode(false);
        document.getElementById("menu").style.display = "block";
        document.getElementById("hide_sponsor").style.display = "flex";
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
                            <li data-aos="fade-down" data-aos-delay="500"><span><a href="#">Home</a></span></li>
                            <li data-aos="fade-down" data-aos-delay="700"><span><a href="#">About</a></span></li>
                            <li data-aos="fade-down" data-aos-delay="900"><span><a href="#">Services</a></span></li>
                            <li data-aos="fade-down" data-aos-delay="1100"><span><a href="#">Case Studies</a></span></li>
                            <li data-aos="fade-down" data-aos-delay="1300"><span><a href="#">Contact</a></span></li>
                        </ul>
                    </div>

                )}
            </div>
            
            <section class="gallery min-vh-100" id="hide_sponsor">
                <div class="container-lg" data-aos="fade-up">
                    <div class="row gy-4 row-cols-1 row-cols-sm-2 row-cols-md-3" data-aos="fade-up">
                        <div class="col" data-aos="fade-up">
                            <img data-aos="fade-up" data-aos-delay="500" src="https://1minus1-2021.s3.eu-west-2.amazonaws.com/lightspeed_logo_new_a2fce9d216.png" class="gallery-item" alt="gallery" />
                        </div>
                        <div class="col" data-aos="fade-up">
                            <img data-aos="fade-up" data-aos-delay="600" src="https://1minus1-2021.s3.eu-west-2.amazonaws.com/lightspeed_logo_new_a2fce9d216.png" class="gallery-item" alt="gallery" />
                        </div>
                        <div class="col" data-aos="fade-up">
                            <img data-aos="fade-up" data-aos-delay="700" src="https://1minus1-2021.s3.eu-west-2.amazonaws.com/lightspeed_logo_new_a2fce9d216.png" class="gallery-item" alt="gallery" />
                        </div>
                        <div class="col" data-aos="fade-up">
                            <img data-aos="fade-up" data-aos-delay="800" src="https://1minus1-2021.s3.eu-west-2.amazonaws.com/lightspeed_logo_new_a2fce9d216.png" class="gallery-item" alt="gallery" />
                        </div>
                        <div class="col" data-aos="fade-up">
                            <img data-aos="fade-up" data-aos-delay="900" src="https://1minus1-2021.s3.eu-west-2.amazonaws.com/lightspeed_logo_new_a2fce9d216.png" class="gallery-item" alt="gallery" />
                        </div>
                        <div class="col" data-aos="fade-up">
                            <img data-aos="fade-up" data-aos-delay="1000" src="https://1minus1-2021.s3.eu-west-2.amazonaws.com/lightspeed_logo_new_a2fce9d216.png" class="gallery-item" alt="gallery" />
                        </div>
                        <div class="col" data-aos="fade-up">
                            <img data-aos="fade-up" data-aos-delay="1100" src="https://1minus1-2021.s3.eu-west-2.amazonaws.com/lightspeed_logo_new_a2fce9d216.png" class="gallery-item" alt="gallery" />
                        </div>
                        <div class="col" data-aos="fade-up">
                            <img data-aos="fade-up" data-aos-delay="1200" src="https://1minus1-2021.s3.eu-west-2.amazonaws.com/lightspeed_logo_new_a2fce9d216.png" class="gallery-item" alt="gallery" />
                        </div>
                        <div class="col" data-aos="fade-up">
                            <img data-aos="fade-up" data-aos-delay="1300" src="https://1minus1-2021.s3.eu-west-2.amazonaws.com/lightspeed_logo_new_a2fce9d216.png" class="gallery-item" alt="gallery" />
                        </div>
                        <div class="col" data-aos="fade-up">
                            <img data-aos="fade-up" data-aos-delay="1400" src="https://1minus1-2021.s3.eu-west-2.amazonaws.com/lightspeed_logo_new_a2fce9d216.png" class="gallery-item" alt="gallery" />
                        </div>
                        <div class="col" data-aos="fade-up">
                            <img data-aos="fade-up" data-aos-delay="1500" src="https://1minus1-2021.s3.eu-west-2.amazonaws.com/lightspeed_logo_new_a2fce9d216.png" class="gallery-item" alt="gallery" />
                        </div>
                        <div class="col" data-aos="fade-up">
                            <img data-aos="fade-up" data-aos-delay="1600" src="https://1minus1-2021.s3.eu-west-2.amazonaws.com/lightspeed_logo_new_a2fce9d216.png" class="gallery-item" alt="gallery" />
                        </div>
                        <div class="col" data-aos="fade-up">
                            <img data-aos="fade-up" data-aos-delay="1700" src="https://1minus1-2021.s3.eu-west-2.amazonaws.com/lightspeed_logo_new_a2fce9d216.png" class="gallery-item" alt="gallery" />
                        </div>
                        <div class="col" data-aos="fade-up">
                            <img data-aos="fade-up" data-aos-delay="1800" src="https://1minus1-2021.s3.eu-west-2.amazonaws.com/lightspeed_logo_new_a2fce9d216.png" class="gallery-item" alt="gallery" />
                        </div>
                        <div class="col" data-aos="fade-up">
                            <img data-aos="fade-up" data-aos-delay="1900" src="https://1minus1-2021.s3.eu-west-2.amazonaws.com/lightspeed_logo_new_a2fce9d216.png" class="gallery-item" alt="gallery" />
                        </div>
                        <div class="col" data-aos="fade-up">
                            <img data-aos="fade-up" data-aos-delay="2000" src="https://1minus1-2021.s3.eu-west-2.amazonaws.com/lightspeed_logo_new_a2fce9d216.png" class="gallery-item" alt="gallery" />
                        </div>
                        <div class="col" data-aos="fade-up">
                            <img data-aos="fade-up" data-aos-delay="2100" src="https://1minus1-2021.s3.eu-west-2.amazonaws.com/lightspeed_logo_new_a2fce9d216.png" class="gallery-item" alt="gallery" />
                        </div>
                        <div class="col" data-aos="fade-up">
                            <img data-aos="fade-up" data-aos-delay="2200" src="https://1minus1-2021.s3.eu-west-2.amazonaws.com/lightspeed_logo_new_a2fce9d216.png" class="gallery-item" alt="gallery" />
                        </div>
                    </div>
                </div>
            </section>


            <section id="blog" class="blog flex-column flex-reverse">
                <div class="row">
                    <div class="column">
                        <div class="column1">
                            <img src="https://media.istockphoto.com/id/1288385045/photo/snowcapped-k2-peak.jpg?s=612x612&w=0&k=20&c=sfA4jU8kXKZZqQiy0pHlQ4CeDR0DxCxXhtuTDEW81oo=" id="move" />
                        </div>
                    </div>
                    <div class="column">
                        <div class="column2 bg-blog">
                            <h2 id="top_heading">30th May,2022</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem exercitationem molestiae saepe fugiat, fuga quaerat sapiente quisquam aspernatur, cupiditate perferendis eius eveniet nam obcaecati, quasi fugit blanditiis laborum culpa at autem animi id voluptates accusamus sed! Blanditiis voluptate illum ut!</p>
                            <a href="blog.html" class="btn btn-outline">
                                <i class="fas fa-chevron"></i>
                                Find out More
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            

            <section id="blog" class="blog flex-column test_1">
                <div class="row">
                    <div class="column">
                        <div class="column1">
                            <img src="https://media.istockphoto.com/id/1288385045/photo/snowcapped-k2-peak.jpg?s=612x612&w=0&k=20&c=sfA4jU8kXKZZqQiy0pHlQ4CeDR0DxCxXhtuTDEW81oo=" id="move" />
                        </div>
                    </div>
                    <div class="column">
                        <div class="column2 bg-blog">
                            <h2 id="top_heading">30th May,2022</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem exercitationem molestiae saepe fugiat, fuga quaerat sapiente quisquam aspernatur, cupiditate perferendis eius eveniet nam obcaecati, quasi fugit blanditiis laborum culpa at autem animi id voluptates accusamus sed! Blanditiis voluptate illum ut!</p>
                            <a href="blog.html" class="btn btn-outline">
                                <i class="fas fa-chevron"></i>
                                Find out More
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
