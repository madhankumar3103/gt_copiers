// Footer.js

import React from 'react';
import './Footer.css'; // Import the CSS file
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo">&copy;2024 Company Name. All rights reserved.</div>
        <nav className="footer_left">
          <ul>
            <li><Link to="/">Terms of Service</Link></li>
            <li><Link to="/about">Privacy Policy</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </nav>
    </footer>
  );
};

export default Footer;