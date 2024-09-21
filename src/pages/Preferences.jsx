// pages/Preferences.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import './Preferences.css';

function Preferences({ userData }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    pin: '',
    pronouns: '',
    accessibility: '',
    addtlreq: '',
    interventionPreferences: [],
    contacts: [{ name: '', phoneNumber: '' }],
  });

  const navigate = useNavigate();

  const handleNext = () => {
    if (step < 6) setStep(step + 1);
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

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    let newPreferences = formData.interventionPreferences;

    if (checked) {
      newPreferences = [...newPreferences, name];
    } else {
      newPreferences = newPreferences.filter((pref) => pref !== name);
    }

    setFormData({
      ...formData,
      interventionPreferences: newPreferences,
    });
  };

  const handleContactChange = (index, event) => {
    const updatedContacts = [...formData.contacts];
    updatedContacts[index] [event.target.name] = event.target.value;

    setFormData({
      ...formData,
      contacts: updatedContacts,
    });
  };

  const addNewContact = () => {
    if (formData.contacts.length < 10) {
      setFormData({
        ...formData,
        contacts: [...formData.contacts, { name: '', phoneNumber: '' }],
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await fetch(`http://localhost:8080/users/update/${userData.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
      if (response.ok) {
        console.log("User preferences updated successfully", result);
        navigate('/map');
      } else {
        console.error("Failed to update preferences:", result.message);
      }
    } catch (error) {
      console.error("An error occurred while updating preferences:", error);
    }
  };

  // Function to render the form based on the current step
  const renderFormStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="form-step">
            <label htmlFor="pin">please choose a 4-digit pin:</label>
            <input
              type="text"
              name="pin"
              id="pin"
              value={formData.pin}
              onChange={handleChange}
              required
            />
            <button type="button" onClick={handleNext}>Next</button>
          </div>
        );
      case 2:
        return (
          <div className="form-step">
            <label htmlFor="pronouns">pronouns:</label>
            <input
              type="text"
              name="pronouns"
              id="pronouns"
              value={formData.pronouns}
              onChange={handleChange}
              required
            />
            <button type="button" onClick={handleNext}>Next</button>
          </div>
        );
      case 3:
        return (
          <div className="form-step">
            <label htmlFor="accessibility">accessibility considerations:</label>
            <input
              type="text"
              name="accessibility"
              id="accessibility"
              value={formData.accessibility}
              onChange={handleChange}
              required
            />
            <button type="button" onClick={handleNext}>Next</button>
          </div>
        );
      case 4:
        return (
          <div className="form-step">
            <label htmlFor="addtlreq">Do you have any additional notes or requirements in the event that you are in a state of emergency?</label>
            <input
              type="text"
              name="addtlreq"
              id="addtlreq"
              value={formData.addtlreq}
              onChange={handleChange}
              required
            />
            <button type="button" onClick={handleNext}>Next</button>
          </div>
        );
      case 5:
        return (
          <div className="form-step">
            <label>Intervention Preferences (select all that apply):</label>
            <div>
              <label>
                <input
                type="checkbox"
                name="auin_police"
                checked={formData.interventionPreferences.includes('auin_police')}
                onChange={handleCheckboxChange}
                />
                police intervention
              </label>
            </div>
            <div>
              <label>
                <input
                type="checkbox"
                name="auin_security"
                checked={formData.interventionPreferences.includes('auin_security')}
                onChange={handleCheckboxChange}
                />
                professional security intervention
              </label>
            </div>
            <div>
              <label>
                <input
                type="checkbox"
                name="auin_government"
                checked={formData.interventionPreferences.includes('auin_government')}
                onChange={handleCheckboxChange}
                />
                law enforcement intervention
              </label>
            </div>
            <div>
              <label>
                <input
                type="checkbox"
                name="auin_civil"
                checked={formData.interventionPreferences.includes('auin_civil')}
                onChange={handleCheckboxChange}
                />
                civil servant intervention (e.g. park rangers, fire department, transit workers, etc.)
              </label>
            </div>
            <div>
              <label>
                <input
                type="checkbox"
                name="auin_community"
                checked={formData.interventionPreferences.includes('auin_community')}
                onChange={handleCheckboxChange}
                />
                community member intervention (others with the Beacon Safe app)
              </label>
            </div>
            <div>
              <label>
                <input
                type="checkbox"
                name="perin_community"
                checked={formData.interventionPreferences.includes('perin_community')}
                onChange={handleCheckboxChange}
                />
                personal intervention if community members are experiencing an emergency (others with the Beacon Safe app)
              </label>
            </div>
            <button type="button" onClick={handleNext}>Next</button>
          </div>
        );
        case 6:
          return (
            <div className="form-step">
              <label>Primary Contacts:</label>
              {formData.contacts.map((contact, index) => (
                <div key={index}>
                  <label>
                    Contact Name:
                    <input
                    type="text"
                    name="name"
                    value={contact.name}
                    onChange={(event) => handleContactChange(index, event)}
                    required
                    />
                  </label>
                  <label>
                    Phone Number:
                    <input
                    type="tel"
                    name="phone_number"
                    value={contact.phone_number}
                    onChange={(event) => handleContactChange(index, event)}
                    required
                    />
                  </label>
                </div>
              ))}
              {formData.contacts.length < 10 && (
                <button type="button" onClick={addNewContact}>
                  Add a new contact
                </button>
              )}
              <button type="submit">Submit Preferences</button>
            </div>
          );
      default:
        return null;
    }
  };

  const progressPercentage = (step / 6) * 100;

  return (
    <div className="preferences-container">
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progressPercentage}%` }}></div>
      </div>
      <form className="preferences-form" onSubmit={handleSubmit}>
        {renderFormStep()}
      </form>
    </div>
  );
}

export default Preferences;