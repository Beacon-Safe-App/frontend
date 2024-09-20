// pages/Login.jsx
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/map');
  };

  return (
    <div className="login-container">
      <img id="logo-image" src="https://64.media.tumblr.com/716975a64c9046776c921f55ad51639b/5620776a7cc956d4-67/s2048x3072/f4b3cc26ac90e4bfc465e43e8177f4caeec26817.pnj" alt="logo"></img>
      <p>connect with your email:</p>
      <form className="login-form" onSubmit={handleSubmit}>
        <input type="email" className="email-input" placeholder="enter your email" required />
        <button type="submit" className="arrow-button">→</button>
      </form>
      <div className="terms-and-conditions">
        <p>by proceeding, you agree to our</p>
        <p>
          <Link to="/termsandconditions" className="terms-link">Terms & Conditions</Link>
        </p>
        <p>and confirm that you are at least 13 years old</p>
      </div>
    </div>
  );
}

export default Login;