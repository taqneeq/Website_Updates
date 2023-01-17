import playButton from "./play-button.svg"
import tqbg from "./assets/tqbg.jpg"
import tqlogo from "./assets/tqlogo.png"

function App()
{
    return (
        <div>
            <nav class="navbar navbar-dark shadow-5-strong px-5 fixed-top">
                <a class="navbar-brand" href="#">Contact</a>
                <a class="navbar-brand" href="#">
                    <img src={tqlogo} width="50" height="50" alt=""/>
                </a>
            </nav>
            <div style={{ height: '100vh', backgroundImage: `url(${ tqbg })`, backgroundSize: 'cover', backgroundPosition: 'center' }} className="position-relative w-100 hero-bg">
                <div className="position-absolute text-white d-flex flex-column justify-content-center" style={{ top: '0', right: 0, bottom: 0, left: 0, backgroundColor: 'rgba(0,0,0,.7)' }}>
                    <div className="container">
                        <div className="row h-100">
                            <div className="col-md my-auto">
                                <div className="my-2 display-3">Taqneeq
                                </div>
                                <h1 className="mt-2 display-3 fw-bold">15.0</h1>
                                <strong className='fw-bold'>ONE AND ONLY TEACH FEST OF NMIMS</strong>
                            </div>
                        </div>
                        <div className='mt-6'>
                            <div className="row">
                                <div className="col-auto">
                                    <img className="play-icon mt-2" id="play" src={playButton} alt="Your SVG" />
                                </div>
                                <div className="col-9 col-md-4">
                                    <div className='fw-bold fs-5'>Check out our TqRewind</div>
                                    <div className=''>Memories, Fun, Technical events, Innovative Experience. You name it we have it.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-2 align-self-end'>
                        <div className='hero-hr'></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
