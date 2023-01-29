import React, { useState } from 'react'
import nmims from '../assets/nmims.jpg'
import mobile from '../assets/mobile.png'
import address from '../assets/location.png'
import email from '../assets/email.png'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Animate_cursor from '../components/animate_cursor'
function ContactUs()
{
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) =>
    {
        const form = event.currentTarget;
        if (form.checkValidity() === false)
        {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    return (
        <>
            <Animate_cursor />
        <div className='bg-black bg-gradient text-white'>
            <div className="text-center bg-image" style={{ backgroundImage: `url(${ nmims })`, height: '400px', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="h-100" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                    <div className="d-flex justify-content-center align-items-center h-100">
                        <div className="text-white">
                            <div className="mt-2 display-5 fw-bold contact-border">CONTACT US</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container text-center mt-5">
                <div className='fs-2 fw-semibold fst'>Get in Touch with us!</div>
                <div className="row mt-5 d-flex justify-content-center align-items-center h-100">
                    <div class="col-4 col-md-3" style={{ borderRight: '2px solid white' }}>
                        <div className='m-3'>
                            <img src={mobile} height={40} />
                            <div className='fw-bold mt-3'>PHONE</div>
                            <div className='fw-bolder fs-6'>Phone +63 996 632 521</div>
                        </div>
                    </div>
                    <div class="col-4 col-md-3" style={{ borderRight: '2px solid white' }}>
                        <div className='m-3'>
                            <img src={address} height={40} />
                            <div className='fw-bold mt-3'>ADDRESS</div>
                            <div className='fw-bolder fs-6'>Phone +63 996 632 521</div>
                        </div>
                    </div>
                    <div class="col-4 col-md-3">
                        <div className='m-3'>
                            <img src={email} height={40} />
                            <div className='fw-bold mt-3'>EMAIL</div>
                            <div className='fw-bolder fs-6'>Phone +63 996 632 521</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <div class="row">
                    <div class="col-md-6 offset-md-3 text-center wow fadeInUp">
                        <div class="separator"><span><i class="fa fa-square"></i></span></div>
                        <div class="spacer-single"></div>
                    </div>

                    <div class="col-md-8 offset-md-2 wow fadeInUp">
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Form.Group md="4" controlId="validationCustom01">
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Your Name"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">Please provide a valid name.</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className='mt-4' md="4" controlId="validationCustom04">
                                <Form.Control type="email" placeholder="Gmail" required pattern=".+@gmail\.com" />
                                <Form.Control.Feedback type="invalid">Please provide a valid gmail.</Form.Control.Feedback>
                                <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className='mt-4' md="4" controlId="validationCustom06">
                                <Form.Control type="number" placeholder="You Number" required pattern="[0-9]+" />
                                <Form.Control.Feedback type="invalid">Please Provide valid number</Form.Control.Feedback>
                                <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className='mt-4' md="4" controlId="validationCustom05">
                                <Form.Control
                                    as="textarea"
                                    placeholder="Your Message"
                                    style={{ height: '100px' }}
                                    required
                                />
                                <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">Please enter a message you want to send</Form.Control.Feedback>
                            </Form.Group>
                            <div className='text-center'>
                                <br></br>
                                <Button className='mt-4' variant="outline-light" size="lg" type="submit">Submit</Button>
                            </div>
                        </Form>
                        <div>
                            {/* <MapSection location={location} zoomLevel={17} /> include it here */}
                        </div>
                        <div className='text-center mt-5'>
                            <div className='fs-2 fw-semibold fst'>Connect with us!</div>
                            <br></br>
                            <div className='d-flex justify-content-center align-items-center my-2'>
                                <a target="_blank" href="https://www.facebook.com/taqneeq/">
                                    <img src="https://img.icons8.com/ios-filled/50/FFFFFF/facebook--v1.png" />
                                </a>
                                <a className='mx-3' target="_blank" href="https://www.youtube.com/channel/UC8ZivFUH8eR848Pv-Uljlpw?app=desktop">
                                    <img src="https://img.icons8.com/sf-black-filled/64/FFFFFF/youtube-play.png" />
                                </a>
                                <a target="_blank" href="https://www.instagram.com/taqneeqfest/">
                                    <img src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/FFFFFF/external-instagram-social-media-tanah-basah-glyph-tanah-basah.png" />
                                </a>
                                <a target="_blank" className='mx-3' href="https://www.linkedin.com/company/taqneeqfest/">
                                    <img src="https://img.icons8.com/glyph-neue/64/FFFFFF/linkedin.png" />
                                </a>
                            </div>
                            <br></br>
                            <br></br>
                        </div>
                        <br></br>
                    </div>
                </div>
            </div>
        </div >
        </>
    )
}

export default ContactUs
