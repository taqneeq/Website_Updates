import logo from './logo.svg';
import './App.css';
import EventsCarousel from "./components/EventsCarousel"


function App() {
  return (
    <div className="App">
      <h1>Today's Events</h1>
      <EventsCarousel/>

    </div>
  );
}

export default App;
