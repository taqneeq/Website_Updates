import React from 'react'
import tqlogo from "../assets/tqlogo.png"
import "aos/dist/aos.css";


export default function Navbar()
{

    return (
        <>
        <div>
            <nav className="navbar shadow-5-strong p-navbar fixed-top">
                <div className="menu-wrap">
                    <input type="checkbox" className="toggler" />
                    <div className="hamburger"><div></div></div>
                    <div className="menu">
                        <div>
                            <div>
                                <ul>
                                    <li><a className='fw-bold' href="abouttq">About TQ</a></li>
                                    <li><a className='fw-bold' href="sponsors">Sponsors</a></li>
                                    <li><a className='fw-bold' href="schedule">Schedule</a></li>
                                    <li><a className='fw-bold' href="workshops">Workshops</a></li>
                                    <li><a className='fw-bold' href="events">Events</a></li>
                                    <li><a className='fw-bold' href="contactus">Contact</a></li>
                                    <li><a className='fw-bold' href="rewind">Rewind</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="navbar-brand fw-bold" href="contactus"></a>
                <a className="navbar-brand" href="/">
                    <img src={tqlogo} width="50" height="50" alt="" />
                </a>
            </nav>
        </div>
        

        </>
    )
}
