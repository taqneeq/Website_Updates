import React from "react";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import events from './pages/Event'

export default function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route exact path="events" element={<Event/>}></Route>
   </Routes>
   </BrowserRouter>
  );

  
}
