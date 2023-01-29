import React, { useState } from 'react'
import { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import Animate_cursor from '../components/animate_cursor'


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
    const height = "600px";
    return (
        <>
            <Animate_cursor />
            <section class="gallery min-vh-100" id="hide_sponsor">
                <div class="container-lg" data-aos="fade-up">
                    <div class="sponsor row gy-4 row-cols-1 row-cols-sm-2 row-cols-md-3" data-aos="fade-up">
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
                    </div>
                </div>
            </section>
        </>
    )
}
