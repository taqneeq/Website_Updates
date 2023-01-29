import React from 'react'
import tqlogo from "../assets/tqlogo.png"
import Animate_cursor from '../components/animate_cursor'
import { useEffect } from 'react';
import { useState } from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";


export default function Navbar()
{
    

    return (
        <>
        <div>
            <nav className="navbar navbar-dark shadow-5-strong p-navbar fixed-top">
                <div className="menu-wrap">
                    <input type="checkbox" className="toggler" />
                    <div className="hamburger"><div></div></div>
                    <div className="menu">
                        <div>
                            <div>
                                <ul>
                                    <li><a href="sponsors"><b>Sponsors</b></a></li>
                                    <li><a href="abouttq"><b>About TQ</b></a></li>
                                    <li><a href="schedule"><b>Schedule</b></a></li>
                                    <li><a href="workshops"><b>Workshops</b></a></li>
                                    <li><a href="events"><b>Events</b></a></li>
                                    <li><a href="contactus"><b>Contact</b></a></li>
                                    <li><a href="rewind"><b>Rewind</b></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="navbar-brand fw-bold" href="contactus"></a>
                <a className="navbar-brand" href="/">
                    <img src={tqlogo} width="65" height="65" alt="" />
                </a>
            </nav>
        </div>
        <Animate_cursor />

        </>
    )
}
