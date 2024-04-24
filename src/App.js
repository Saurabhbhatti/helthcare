import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import OurDoctorPage from './Components/OurDoctorPage/OurDoctorPage';
import HowItWorks from './pages/HowItWorks'
import BookAppoointment from './Components/Appoinments/BookAppoinment';
import OurPage from './Components/Card2/OurPage';
import DoctorsBio from "./Components/Header/DoctorsBio"


function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <Routes>
            <Route path='/' element={<OurDoctorPage />} />
            <Route path='/home' element={<OurDoctorPage />} />
            <Route path='/howitworks'element={<HowItWorks/>} />
            <Route path='/ourpage' element={<OurPage/>}/>
            <Route path='/appointments' element={<BookAppoointment/>} />
            <Route path='/refills' element={<BookAppoointment/>}/>
            <Route path='/otcteam' element={<DoctorsBio/>}/>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
