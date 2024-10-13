import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>My Portfolio</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/aboutme">About Me</Link>
      </nav>
    </header>
  );
}

export default Header;