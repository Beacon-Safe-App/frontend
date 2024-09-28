import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './css/Login.css';

function Login({ loginUser }) {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const loginData = { email: email, password: password };
    const success = await loginUser(loginData);
    if (success) {
      navigate('/map');
    } else {
      alert('Login failed. Please check your email and password.');
    }
  };

  return (
    <div className="login-container">
      <img id="logo-image" src="https://64.media.tumblr.com/716975a64c9046776c921f55ad51639b/5620776a7cc956d4-67/s2048x3072/f4b3cc26ac90e4bfc465e43e8177f4caeec26817.pnj" alt="logo" />
      <form className="login-form" onSubmit={handleSubmit}>
        <input 
          type="email" 
          className="email-input" 
          placeholder="enter your email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          className="password-input"
          placeholder="your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="loginarrow-button" id="arrow">→</button>
        <div className="registration-prompt">
          <p>
            <Link to="/register" className="register-link">register</Link>
          </p>
        </div>
      </form>
      <div className="terms-and-conditions">
        <p>by proceeding, you agree to our</p>
        <p>
          <Link to="/termsandconditions" className="terms-link">Terms & Conditions</Link>
        </p>
        <p>and our</p>
        <p>
          <Link to="/privacypolicy" className="privacy-link">Privacy Policy</Link>
        </p>
        <p>and confirm that you are at least 13 years old</p>
      </div>
    </div>
  );
}

export default Login;