import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

const OurDoctorPage = lazy(() =>
  import("./Components/OurDoctorPage/OurDoctorPage")
);
const HowItWorks = lazy(() => import("./pages/HowItWorks"));
const BookAppoointment = lazy(() =>
  import("./Components/Appoinments/BookAppoinment")
);
const DoctorsBio = lazy(() => import("./pages/DoctorsBio"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Blog = lazy(() => import("./pages/BlogPage"));
const BlogDetails = lazy(() => import("./pages/BlogDetails"));
const BlogPage = lazy(() => import("./pages/BlogPage"));

function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<div></div>}>
          <Routes>
            <Route path="/" element={<OurDoctorPage />} />
            <Route path="/home" element={<OurDoctorPage />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/appointments" element={<BookAppoointment />} />
            <Route path="/refills" element={<BookAppoointment />} />
            <Route path="/otc-team" element={<DoctorsBio />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blogpage" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
