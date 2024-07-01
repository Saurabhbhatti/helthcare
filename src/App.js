import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import OurDoctorPage from './Components/OurDoctorPage/OurDoctorPage';
import HowItWorks from './pages/HowItWorks';
import BookAppointment from './Components/Appoinments/BookAppoinment';
import DoctorsBio from './pages/DoctorsBio';
import Pricing from './pages/Pricing';
import ProductPage from './pages/ProductPage';
import Blog from './pages/BlogPage';
import BlogDetail from './pages/BlogDetail';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<OurDoctorPage />} />
          <Route path='/home' element={<OurDoctorPage />} />
          <Route path='/how-it-works' element={<HowItWorks />} />
          <Route path='/appointments' element={<BookAppointment />} />
          <Route path='/otc-team' element={<DoctorsBio />} />
          <Route path='/product' element={<ProductPage />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/blog/:slug' element={<BlogDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
