import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useLastVisitedPage from '../hooks/useLastVisitedPage.js';
import './css/Profile.css';

function Profile({ userData, baseBackendURL }) {
    useLastVisitedPage();

    const [formData, setFormData] = useState({
        name: '',
        pronouns: '',
        phoneNumber: '',
        email: '',
        password: '',
        pin: '',
        interventionPreferences: '',
        contacts: '',
        accessibility: '',
        addtlreq: '',
    });

    useEffect(() => {
        if (userData) {
            setFormData({
                name: userData?.name || '',
                pronouns: userData?.preferences?.pronouns || '',
                phoneNumber: userData?.phoneNumber || '',
                email: userData?.email || '',
                password: '',
                pin: userData?.preferences?.pin || '',
                interventionPreferences: userData?.preferences?.interventionPreferences.join(', ') || '',
                contacts: userData?.preferences?.contacts
                    ?.map(contact => contact.name)
                    .join(', ') || '',
                accessibility: userData?.preferences?.accessibility || '',
                addtlreq: userData?.preferences?.addtlreq || '',
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
        <div className="profile-container">
            <h1>PROFILE</h1>
            <div className="return-to-login">
                <Link to={sessionStorage.getItem('lastVisitedPage') || '/'} className="return-link">← RETURN</Link>
            </div>

            <form onSubmit={handleSubmit} className="profile-form">
                <div className="profile-section-list">
                    <div className="profile-section-item">
                        <label>NAME</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder={formData.name || 'Name'}
                        />
                    </div>

                    <div className="profile-section-item">
                        <label>PRONOUNS</label>
                        <input
                            type="text"
                            name="pronouns"
                            value={formData.pronouns}
                            onChange={handleChange}
                            placeholder={formData.pronouns || 'Pronouns'}
                        />
                    </div>

                    <div className="profile-section-item">
                        <label>PHONE NUMBER</label>
                        <input
                            type="tel"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            placeholder={formData.phoneNumber || 'Phone Number'}
                        />
                    </div>

                    <div className="profile-section-item">
                        <label>EMAIL</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder={formData.email || 'Email'}
                        />
                    </div>

                    <div className="profile-section-item">
                        <label>PASSWORD</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="New Password"
                        />
                    </div>

                    <div className="profile-section-item">
                        <label>PERSONAL PIN</label>
                        <input
                            type="password"
                            name="pin"
                            value={formData.pin}
                            onChange={handleChange}
                            placeholder={formData.pin || 'Pin Number'}
                        />
                    </div>

                    <div className="profile-section-item">
                        <label>INTERVENTION PREFERENCES</label>
                        <input
                            type="text"
                            name="interventionPreferences"
                            value={formData.interventionPreferences}
                            onChange={handleChange}
                            placeholder={formData.interventionPreferences || 'Intervention Preferences'}
                        />
                    </div>

                    <div className="profile-section-item">
                        <label>PRIMARY CONTACTS</label>
                        <input
                            type="text"
                            name="contacts"
                            value={formData.contacts}
                            onChange={handleChange}
                            placeholder={formData.contacts || 'Primary Contacts'}
                        />
                    </div>

                    <div className="profile-section-item">
                        <label>ACCESSIBILITY</label>
                        <input
                            type="text"
                            name="accessibility"
                            value={formData.accessibility}
                            onChange={handleChange}
                            placeholder={formData.accessibility || 'Accessibility'}
                        />
                    </div>

                    <div className="profile-section-item">
                        <label>ADDITIONAL REQUIREMENTS</label>
                        <input
                            type="text"
                            name="addtlreq"
                            value={formData.addtlreq}
                            onChange={handleChange}
                            placeholder={formData.addtlreq || 'Additional Requirements'}
                        />
                    </div>
                    <button type="submit" className="submit-button">SAVE CHANGES</button>
                </div>
            </form>
        </div>
    );
}

export default Profile;