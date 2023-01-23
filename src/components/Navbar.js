import React from 'react'
import tqlogo from "../assets/tqlogo.png"

export default function Navbar()
{
    return (
        <div>
            <nav class="navbar navbar-dark shadow-5-strong p-navbar fixed-top">
                <div class="menu-wrap">
                    <input type="checkbox" class="toggler" />
                    <div class="hamburger"><div></div></div>
                    <div class="menu">
                        <div>
                            <div>
                                <ul>
                                    <li><a href="#"><b>About TQ</b></a></li>
                                    <li><a href="#"><b>Schedule</b></a></li>
                                    <li><a href="#"><b>Events</b></a></li>
                                    <li><a href="#"><b>Case Studies</b></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <a class="navbar-brand fw-bold" href="contactus">Contact</a>
                <a class="navbar-brand" href="/">
                    <img src={tqlogo} width="65" height="65" alt="" />
                </a>
            </nav>
        </div>
    )
}
