import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import OurDoctorPage from "./Components/OurDoctorPage/OurDoctorPage";
import HowItWorks from "./pages/HowItWorks";
import BookAppoointment from "./Components/Appoinments/BookAppoinment";
import OurPage from "./pages/OurPage";
import DoctorsBio from "./pages/DoctorsBio";
import Pricing from "./pages/Pricing";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<OurDoctorPage />} />
          <Route path="/home" element={<OurDoctorPage />} />
          <Route path="/howitworks" element={<HowItWorks />} />
          <Route path="/ourpage" element={<OurPage />} />
          <Route path="/appointments" element={<BookAppoointment />} />
          <Route path="/refills" element={<BookAppoointment />} />
          <Route path="/otcteam" element={<DoctorsBio />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
