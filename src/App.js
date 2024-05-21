import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

const OurDoctorPage = lazy(() => import("./Components/OurDoctorPage/OurDoctorPage"));
const HowItWorks = lazy(() => import("./pages/HowItWorks"));
const BookAppoointment = lazy(() => import("./Components/Appoinments/BookAppoinment"));
const OurPage = lazy(() => import("./pages/OurPage"));
const DoctorsBio = lazy(() => import("./pages/DoctorsBio"));
const Pricing = lazy(() => import("./pages/Pricing"));

function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
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
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
