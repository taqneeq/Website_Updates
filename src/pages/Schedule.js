import videobg from '../assets/svid.mp4'

const Timeline = () =>
{
    return (
        <>

            <div className="sch">
                <video src={videobg} autoPlay loop muted />
                <div className='overlay'></div>
            </div>


            <div>
                <div className="position-absolute text-white d-flex flex-column justify-content-md-center" style={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                    <div className="container px-5 mt-20">
                        <div className="row">
                            <div className="col my-auto text-center">
                                <h2 className="text-white display-4 text-center fw-bold">SCHEDULE</h2>
                            </div>
                            <div className="timeline">
                                <div data-bs-toggle="modal" data-bs-target="#schedule1" className="timeline__event   ">
                                    <div className="timeline__event__icon ">
                                        <i className="lni-cake"></i>

                                    </div>
                                    <div className="timeline__event__date">
                                        <a>20-11-2020</a>
                                    </div>
                                    <div className="timeline__event__content ">
                                        <div className="timeline__event__title">
                                            Lorem ipsum
                                        </div>
                                        <div className="timeline__event__description">
                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                                        </div>
                                    </div>
                                </div>
                                <div data-bs-toggle="modal" data-bs-target="#schedule1" className="timeline__event   ">
                                    <div className="timeline__event__icon ">
                                        <i className="lni-cake"></i>

                                    </div>
                                    <div className="timeline__event__date">
                                        <a>20-11-2020</a>
                                    </div>
                                    <div className="timeline__event__content ">
                                        <div className="timeline__event__title">
                                            Lorem ipsum
                                        </div>
                                        <div className="timeline__event__description">
                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                                        </div>
                                    </div>
                                </div>
                                <div data-bs-toggle="modal" data-bs-target="#schedule1" className="timeline__event   ">
                                    <div className="timeline__event__icon ">
                                        <i className="lni-cake"></i>

                                    </div>
                                    <div className="timeline__event__date">
                                        <a>20-11-2020</a>
                                    </div>
                                    <div className="timeline__event__content ">
                                        <div className="timeline__event__title">
                                            Lorem ipsum
                                        </div>
                                        <div className="timeline__event__description">
                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                                        </div>
                                    </div>
                                </div>
                                <div data-bs-toggle="modal" data-bs-target="#schedule1" className="timeline__event   ">
                                    <div className="timeline__event__icon ">
                                        <i className="lni-cake"></i>

                                    </div>
                                    <div className="timeline__event__date">
                                        <a>20-11-2020</a>
                                    </div>
                                    <div className="timeline__event__content ">
                                        <div className="timeline__event__title">
                                            Lorem ipsum
                                        </div>
                                        <div className="timeline__event__description">
                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                                        </div>
                                    </div>
                                </div>
                                <div data-bs-toggle="modal" data-bs-target="#schedule1" className="timeline__event  animated   ">
                                    <div className="timeline__event__icon ">
                                        <i className="lni-cake"></i>

                                    </div>
                                    <div className="timeline__event__date">
                                        <a>20-11-2020</a>
                                    </div>
                                    <div className="timeline__event__content ">
                                        <div className="timeline__event__title">
                                            Lorem ipsum
                                        </div>
                                        <div className="timeline__event__description">
                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* modals for schedule page */}
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

export default Timeline;