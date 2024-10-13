import React from 'react';
import './app.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './pages/portfolio';
import Header from './components/header';
import Contact from './pages/contact';
import Resume from './pages/resume';
import AboutMe from './pages/aboutme';
import Footer from './components/footer'; // Ensure Footer is correctly imported

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/aboutme" element={<AboutMe />} />
        </Routes>
      </main>
      <Footer /> {/* Ensure Footer is correctly used */}
    </Router>
  );
}

export default App;