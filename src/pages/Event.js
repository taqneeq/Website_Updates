import React from 'react'

export default function Event()
{
    return (
        <>
            <div className="position-absolute text-white d-flex flex-column justify-content-md-center" style={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                <div className="container mt-25">
                    <div class="hero-section">
                        <div class="card-grid">
                            <a class="card_event" href="modal">
                                <div class="card__background"></div>
                                <div class="card__content">
                                    <p class="card__category">5th <br />February</p>
                                    <h3 class="card__heading">PINEWOOD DERBY</h3>
                                </div>
                            </a>
                            <a class="card_event" href="#">
                                <div class="card__background"></div>
                                <div class="card__content">
                                    <p class="card__category">5th <br />February</p>
                                    <h3 class="card__heading">Maze Solver</h3>
                                </div>
                            </a>
                            <a class="card_event" href="#">
                                <div class="card__background"></div>
                                <div class="card__content">
                                    <p class="card__category">5th <br />February</p>
                                    <h3 class="card__heading">Smart Football</h3>
                                </div>
                            </a>
                            <a class="card_event" href="#">
                                <div class="card__background"></div>
                                <div class="card__content">
                                    <p class="card__category">6th <br />February</p>
                                    <h3 class="card__heading">Mission Impossible</h3>
                                </div>
                            </a>
                            <a class="card_event" href="#">
                                <div class="card__background"></div>
                                <div class="card__content">
                                    <p class="card__category">6th <br />February</p>
                                    <h3 class="card__heading">Piano Tiles</h3>
                                </div>
                            </a>
                            <a class="card_event" href="#">
                                <div class="card__background"></div>
                                <div class="card__content">
                                    <p class="card__category">6th <br />February</p>
                                    <h3 class="card__heading">Earthquake Proof</h3>
                                </div>
                            </a>
                        </div>

                    </div>
                </div>
            </div>


            <div class="modal fade" id="schedule1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <img class="card-img-top" src="https://images.unsplash.com/photo-1675141194800-ae6f2f729ed9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Card image cap"></img>
                        </div>
                        <div class="modal-body">
                            <h1 className='modal-texts'>lorem</h1>
                            <p className='modal-texts' >lorem</p>

                        </div>
                        <div class="modal-footer">
                            <a type="button" class="btn btn-primary" href="#">Register</a>
                            <button type="button" class="btn btn-secondary" data-dismiss="schedule1">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
