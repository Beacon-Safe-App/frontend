import React from 'react';
import { Link } from 'react-router-dom';
import useLastVisitedPage from '../hooks/useLastVisitedPage.js';
import './css/Textblock.css';

function Profile() {
    useLastVisitedPage();
    return (
        <div className="textblock-container">
            <h1>PROFILE</h1>
            <div className="return-to-login">
                <Link to={sessionStorage.getItem('lastVisitedPage') || '/'} className="return-link">← Return</Link>
            </div>
        </div>
    );
}

export default Profile;