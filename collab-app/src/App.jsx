import './App.css'
import { Typography } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './navBar/nav';
import Events from './pages/Events';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={
          <>
            <Typography variant="h4">Welcome To</Typography>
            <Typography variant="h1">Collab</Typography>
            <Typography variant="h6">A collaborative platform allowing students and organizations to collaborate through events right on your campus!</Typography>
          </>
        } />
        <Route path="/events" element={<Events />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App

// const COLORS = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

// export const AuroraHero = () => {
//   const color = useMotionValue(COLORS[0]);
//   const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;

//   return (
//     <motion.section
//       style={{
//         backgroundImage,
//       }}
//       className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200"
//     ></motion.section>
//   );
// };
