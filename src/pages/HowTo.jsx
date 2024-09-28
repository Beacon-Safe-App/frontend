import React from 'react';
import { Link } from 'react-router-dom';
import useLastVisitedPage from '../hooks/useLastVisitedPage.js';

function HowTo() {
  useLastVisitedPage();

  return (
    <div>
      <h1>HOW-TO</h1>
      <div className="return-to-login">
        <Link to={sessionStorage.getItem('lastVisitedPage') || '/'} className="return-link">← Return</Link>
      </div>
    </div>
  );
}

export default HowTo;