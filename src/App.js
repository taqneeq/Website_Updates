// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import ContactUs from "./pages/ContactUs.js";
import Rewind from "./pages/Rewind.js";
import Navbar from "./components/Navbar.js";
import Preloader from './pages/Preloader';
import Head from './pages/Head';
import ParentContainer from './pages/ParentContainer';


function App()
{
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route index element={<Home />} />
                <Route exact path="contactus" element={<ContactUs />} />
                <Route exact path="rewind" element={<Rewind />} />
                <Route exact path="sponsors" element={<Head />} />
                <Route exact path="abouttq" element={<ParentContainer />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
