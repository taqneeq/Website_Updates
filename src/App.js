// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import ContactUs from "./pages/ContactUs.js";
import Rewind from "./pages/Rewind.js";
import Navbar from "./components/Navbar.js";
import Preloader from './pages/Preloader';


function App()
{
    return (
        <BrowserRouter>
            <Navbar />
            <Preloader />
            <Routes>
                <Route index element={<Home />} />
                <Route exact path="contactus" element={<ContactUs />} />
                <Route exact path="rewind" element={<Rewind />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
