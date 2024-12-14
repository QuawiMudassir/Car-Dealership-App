import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CarList from './pages/CarList/CarList';
import LandingPage from './pages/LandingPage/LandingPage'
import CarDetails from './pages/CarDetails/CarDetails';
import FlipNavWrapper from './components/UI/NavBar';
import LoginPage from './pages/LoginPage/LoginPage'
import AdminDashboard from './pages/AdminDashboard/AdminDashboard';
import AddCar from './pages/AddCar/AddCar';
import EditCar from './pages/EditCar/EditCar';
import Footer from './components/UI/Footer';
import ContactUs from './pages/ContactUs/ContactUs'
import NotFound from './pages/NotFound/NotFound'


function App() {
  return (
    <Router>
      <div className="App">
        <FlipNavWrapper />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/cars" element={<CarList />} />
          <Route path="/cars/:id" element={<CarDetails />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
          <Route path="/AddCar" element={<AddCar />} />
          <Route path="/EditCar/:id" element={<EditCar />} />
          <Route path="/Contact" element={<ContactUs />} />
          <Route path="/404" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
