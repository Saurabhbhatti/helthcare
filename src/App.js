import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import OurDoctorPage from './Components/OurDoctorPage/OurDoctorPage';
import BookAppoointment from './Components/Appoinments/BookAppoinment';



function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <Routes>
            <Route path='/' element={<OurDoctorPage />} />
            <Route path='/appointments' element={<BookAppoointment/>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
