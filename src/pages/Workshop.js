import React from 'react'


export default function Workshop()
{

    const drone = () =>
    {
        window.open("https://www.example.com", "_blank");
    };

    const motorsport = () =>
    {
        window.open("https://www.example.com", "_blank");
    };

    const arvr = () =>
    {
        window.open("https://www.example.com", "_blank");
    };

    const gamedev = () =>
    {
        window.open("https://www.example.com", "_blank");
    };

    return (
        <>
            <div>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css" />

            <div className="mt-10">
                <h1 className='text-white text-center display-3 fw-bold ml-5'>
                    WORKSHOPS
                </h1>
            </div>
            <div className="wcontainer mt-5">
                <div className="wcard">
                    <h2>Drone Building</h2>
                    <i className="fas fa-arrow-right" />
                    <p>Click here to register!</p>
                    <div className="pic" />
                    <ul>
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />

                    </ul>
                    <div className="social">
                        <i className="fab fa-facebook-f" />
                        <i className="fab fa-twitter" />
                        <i className="fab fa-instagram" />
                        <i className="fab fa-github" />
                    </div>
                    <button onClick={drone}></button>
                </div>


                <div className="wcard wcard2">
                    <h2>Motorsport</h2>
                    <i className="fas fa-arrow-right" />
                    <p>Click here to register!</p>
                    <div className="pic" />
                    <ul>
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                    </ul>
                    <div className="social">
                        <i className="fab fa-facebook-f" />
                        <i className="fab fa-twitter" />
                        <i className="fab fa-instagram" />
                        <i className="fab fa-github" />
                    </div>
                    <button onClick={motorsport}></button>
                </div>

                <div className="wcard wcard3">
                    <h2>AR/VR</h2>
                    <i className="fas fa-arrow-right" />
                    <p>Click here to register!</p>
                    <div className="pic" />
                    <ul>
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                    </ul>
                    <div className="social">
                        <i className="fab fa-facebook-f" />
                        <i className="fab fa-twitter" />
                        <i className="fab fa-instagram" />
                        <i className="fab fa-github" />
                    </div>
                    <button onClick={arvr}></button>
                </div>

                <div className="wcard wcard4">
                    <h2>Game Dev</h2>
                    <i className="fas fa-arrow-right" />
                    <p>Click here to register!</p>
                    <div className="pic" />
                    <ul>
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                    </ul>
                    <div className="social">
                        <i className="fab fa-facebook-f" />
                        <i className="fab fa-twitter" />
                        <i className="fab fa-instagram" />
                        <i className="fab fa-github" />
                    </div>
                    <button onClick={gamedev}></button>
                </div>



                </div>
                </div>
        </>
    )
}
