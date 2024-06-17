// LoginPopup.js

import React, { useState } from 'react';
import Modal from 'react-modal'; // Ensure you have installed react-modal first
import './Header.css'; // Import the CSS file

Modal.setAppElement('#root'); // Set the root element for accessibility

const LoginPopup = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const customStyles = {
    content: {
      width: '50%',
      height: '60%',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleLogin = () => {
    // Implement your login logic here
    console.log(`Logging in with username: ${username} and password: ${password}`);
    // Close the popup after login
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      contentLabel="Login Modal"
      style={customStyles}

    >
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </Modal>
  );
};

export default LoginPopup;
