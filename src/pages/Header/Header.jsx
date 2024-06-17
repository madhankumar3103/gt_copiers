import React, { useState , useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './Header.css';
import LoginPopup from './LoginPopup.jsx';
import CollapsiblePanel from './CollapsiblePanel';

const Header = () => { 
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const navigate = useNavigate();
  
  const openLoginPopup = () => {
    setIsLoginOpen(true);
  };

  const closeLoginPopup = () => {
    setIsLoginOpen(false);
  };

  const handleLogin = () => {
    navigate('/login'); 
   // setIsLoginOpen(true);
  };
  useEffect(() => {
    const isLoggedInData = localStorage.getItem('isLoggedIn');
    if(isLoggedInData!=null){
      setIsLoggedIn(true);
      const value = JSON.parse(isLoggedInData)
      setDisplayText(value['name']);
    }
  }, []);
  const handleLogout = () => {
    // Simulate logout action
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };
    return (
        <header className="header">
        <div className="logo">GT COPIERS</div>
        <nav>
          <ul>
            {isLoggedIn ? (
              <>
                <div className="account">
                <div className="user-info">
                  <img src="female.png" alt="User Avatar" className="avatar" />
                  <span className="username">{displayText}</span>
                </div>
                <div className="dropdown-content">
                  <a href="/profile">Profile</a>
                  <a href="/settings">Settings</a>
                  <a href="/logout">Logout</a>
                </div>
              </div>
               
              </>
            ) : (
              <li><Link to="/login">Login</Link></li>
            )}
             <LoginPopup isOpen={isLoginOpen} onClose={closeLoginPopup} />
          </ul>
        </nav>
      </header>
    );
};

export default Header;