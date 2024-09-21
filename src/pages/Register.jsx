import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import './Register.css';

function Register() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phoneNumber: ''
  });

  const navigate = useNavigate();

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log('Submitting form...', formData);

    try {
      const response = await fetch('http://localhost:8080/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('HTTP error! Status: ${response.status');
      }

      const data = await response.json();
      console.log('Response received:', data);

        navigate('/map');
        } catch (error) {
        console.error('Error occurred:', error.message);
    }
  };

  const renderFormStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="form-step">
            <label htmlFor="name">What's your name?</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <button type="button" onClick={handleNext}>Next</button>
          </div>
        );
      case 2:
        return (
          <div className="form-step">
            <label htmlFor="email">What's your email?</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <button type="button" onClick={handleNext}>Next</button>
          </div>
        );
      case 3:
        return (
          <div className="form-step">
            <label htmlFor="password">Create a password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button type="button" onClick={handleNext}>Next</button>
          </div>
        );
      case 4:
        return (
          <div className="form-step">
            <label htmlFor="phoneNumber">What's your phone number?</label>
            <input
              type="tel"
              name="phoneNumber"
              id="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
            <button type="submit">Submit</button>
          </div>
        );
      default:
        return null;
    }
  }

  const progressPercentage = (step / 4) * 100;

  return (
    <div className="register-container">
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progressPercentage}%` }}></div>
      </div>
      <form className="register-form" onSubmit={(e) => {
        console.log('Form is being submitted');
        handleSubmit(e);
    }}>
        {renderFormStep()}
      </form>
    </div>
  );
}

export default Register;