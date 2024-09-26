import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './css/Textblock.css';

function Logout() {
  return (
    <div className="textblock-container">
            <h3>YOU HAVE BEEN SUCCESSFULLY LOGGED OUT</h3>
            <br></br>
            <br></br>
            <br></br>
            <p>to re-log in, click <Link to="/" className="login-link">here</Link></p>
        </div>
  );
}

export default Logout;