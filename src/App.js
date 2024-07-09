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
import Layout from './Components/Layout';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route
            path='/'
            element={
              <Layout>
                <OurDoctorPage />
              </Layout>
            }
          />
          <Route
            path='/home'
            element={
              <Layout>
                <OurDoctorPage />
              </Layout>
            }
          />
          <Route
            path='/appointments'
            element={
              <Layout>
                <BookAppointment />
              </Layout>
            }
          />
          <Route
            path='/otc-team'
            element={
              <Layout>
                <DoctorsBio />
              </Layout>
            }
          />
          <Route
            path='/how-it-works'
            element={
              <Layout>
                <HowItWorks />
              </Layout>
            }
          />
          <Route
            path='/product'
            element={
              <Layout>
                <ProductPage />
              </Layout>
            }
          />
          <Route
            path='/pricing'
            element={
              <Layout>
                <Pricing />
              </Layout>
            }
          />
          <Route
            path='/blog'
            element={
              <Layout>
                <Blog />
              </Layout>
            }
          />
          <Route path='/blog/:slug' element={<BlogDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
