import { useState } from "react";
import "./App.css";
import LandingPage from "../LandingPage/LandingPage";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import Navbar from "../Navbar/Navbar";
import { useLocation } from "react-router-dom";
import Pictures from "../Pictures/Pictures";

function App() {

  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<LandingPage />} />
          <Route path = "/pictures" element = {<Pictures/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
