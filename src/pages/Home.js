import playButton from "../play-button.svg"
import tqbg from "../assets/2.jpg"
import { useNavigate } from "react-router-dom";
import eventIcon from "../assets/event.png"
import Animate_cursor from '../components/animate_cursor'
import svid from "../assets/bgvi.mp4"


function Home()
{
    let navigate = useNavigate();
    const routeChange = () =>
    {
        let path = `events`;
        navigate(path);
    }
    return (
        <>
            <Animate_cursor />

            <div className="bgvid">

            <video autoPlay loop muted>
                <source src = {svid} type="video/mp4"/>
            </video>

            </div>
        <div>
                <div className="position-absolute text-white d-flex flex-column justify-content-center" style={{ top: '0', right: 0, bottom: 0, left: 0, backgroundColor: 'rgba(0,0,0,.7)' }}>
                    <div className="container">
                        <div className="row h-100">
                            <div className="col-7 my-auto px-4">
                                <div className="my-2 display-1 fade-in-text">Taqneeq
                                </div>
                                <h1 className="mt-2 display-3 fw-bold fade-in-text delayed">15.0</h1>
                                <strong className='fw-bold fade-in-text delayed'>NMIMS' OFFICIAL TECH FEST</strong>
                            </div>
                        </div>
                        <div className='mt-5 mouse-pointer' onClick={routeChange}>
                            <div className="row fade-in-text delayed1">
                                <div className="col-auto">
                                    <img className="mt-2 mouse-pointer" id="" src={eventIcon} alt="Your SVG"></img>
                                </div>
                                <div className="col-9 col-md-4">
                                    <div className='fw-bold fs-5'>Check Out Our Events Page!</div>
                                    <div className=''>Memories, Fun, Technical events, Innovative Experience. You name it we have it.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-3 col-md-2 align-self-end fade-in-text delayed'>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Home;
