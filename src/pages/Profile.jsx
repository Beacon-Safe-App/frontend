import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useLastVisitedPage from '../hooks/useLastVisitedPage.js';
import './css/Index.css';

function Profile({ userData, baseBackendURL }) {
    useLastVisitedPage();

    const [formData, setFormData] = useState({
        name: '',
        pronouns: '',
        phoneNumber: '',
        email: '',
        password: '',
        pinNumber: '',
        interventionPreferences: '',
        primaryContacts: '',
        accessibility: '',
        additionalRequirements: '',
        voiceRecognition: ''
    });

    useEffect(() => {
        if (userData) {
          setFormData({
            name: userData.name || '',
            pronouns: userData.pronouns || '',
            phoneNumber: userData.phoneNumber || '',
            email: userData.email || '',
            password: '',
            pinNumber: userData.pinNumber || '',
            interventionPreferences: userData.preferences?.interventionPreferences || '',
            primaryContacts: userData.preferences?.primaryContacts || '',
            accessibility: userData.preferences?.accessibility || '',
            additionalRequirements: userData.preferences?.additionalRequirements || '',
            voiceRecognition: userData.preferences?.voiceRecognition || '',
          });
        }
      }, [userData]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${baseBackendURL}/auth/update/${userData._id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const result = await response.json();
            if (result.status === 'success') {
                alert('Profile updated successfully');
            } else {
                alert('Failed to update profile');
            }
        } catch (err) {
            console.error('Error updating profile:', err);
        }
    };

    return (
        <div className="how-to-container">
            <h1>PROFILE</h1>
            <div className="return-to-login">
                <Link to={sessionStorage.getItem('lastVisitedPage') || '/'} className="return-link">← Return</Link>
            </div>

            <form onSubmit={handleSubmit} className="profile-form">
                <div className="section-list">
                    {['Name', 'Pronouns', 'Phone Number', 'Email', 'Password', 'Personal Pin Number', 'Intervention Preferences', 'Primary Contacts', 'Accessibility', 'Additional Requirements', 'Voice Recognition'].map((label, idx) => (
                        <div key={idx} className="section-item">
                            <label>{label}</label>
                            <input
                                type={label.includes('Password') || label.includes('Pin') ? 'password' : 'text'}
                                name={label.replace(/\s+/g, '').toLowerCase()}
                                value={formData[label.replace(/\s+/g, '').toLowerCase()]}
                                onChange={handleChange}
                                placeholder={label}
                            />
                        </div>
                    ))}
                    <button type="submit" className="submit-button">Save Changes</button>
                </div>
            </form>
        </div>
    );
}

export default Profile;