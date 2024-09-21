// pages/Password.jsx
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Password.css';

function Password() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/map');
  };

  return (
    <div className="password-container">
      <img id="logo-image" src="https://64.media.tumblr.com/716975a64c9046776c921f55ad51639b/5620776a7cc956d4-67/s2048x3072/f4b3cc26ac90e4bfc465e43e8177f4caeec26817.pnj" alt="logo"></img>
      <p>enter your password:</p>
      <form className="password-form" onSubmit={handleSubmit}>
        <input type="password" className="password-input" placeholder="your password" required />
        <button type="submit" className="arrow-button">→</button>
      </form>
    </div>
  );
}

export default Password;