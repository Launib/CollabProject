import './App.css'
import { Typography } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import collabLogo from './assets/collab.logo-1REAL.png';
import NavBar from './navBar/nav';
import Events from './pages/Events';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Footer from './pages/Footer';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={
          <>
            <Typography variant="h4" color="black">Welcome To</Typography>
            <img src={collabLogo} alt="Collab Logo" style={{ maxWidth: '300px', height: 'auto' }} />
            <Typography variant="h6" color="black">A collaborative platform allowing students and organizations to collaborate through events right on your campus!</Typography>
          </>
        } />
        <Route path="/events" element={<Events />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;