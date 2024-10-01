import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './css/Preferences.css';

function Preferences({ userData, baseBackendURL }) {
  const userId = userData._id

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    pin: `${userData.preferences.pin}` || '',
    pronouns: `${userData.preferences.pronouns}` || '',
    accessibility: `${userData.preferences.accessibility}` || '',
    addtlreq: `${userData.preferences.addtlreq}` || '',
    interventionPreferences: userData.preferences.interventionPreferences || [],
    contacts: userData.preferences.contacts || [{ name: '', phone_number: '' }],
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
    updatedContacts[index][event.target.name] = event.target.value;

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
      const response = await fetch(`${baseBackendURL}/auth/${userId}`, {
        method: 'PUT',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ preferences: { formData } }),
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

  const renderFormStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="form-step">
            <label htmlFor="pin">a pin number will be used to deactivate any active security tools. for example, if using the 'walk with me' feature, in order to ensure you have reached your destination safely and emergency mode should not be activated, you will be asked to enter your pin.</label>
            <input
              type="text"
              name="pin"
              id="pin"
              placeholder="please choose a 4-digit pin"
              value={formData.pin}
              onChange={handleChange}
              required
            />
            <button type="button" onClick={handleNext}>→</button>
          </div>
        );
      case 2:
        return (
          <div className="form-step">
            <label htmlFor="pronouns">we ask for your pronouns to ensure that anyone intervening and supporting you in a state of emergency will address you correctly.</label>
            <input
              type="text"
              name="pronouns"
              id="pronouns"
              placeholder="preferred pronouns"
              value={formData.pronouns}
              onChange={handleChange}
              required
            />
            <button type="button" onClick={handleNext}>→</button>
          </div>
        );
      case 3:
        return (
          <div className="form-step">
            <label htmlFor="accessibility">we ask for you to let us know of any accessibility considerations one should be aware of in the event that you are in an emergency. an example could be that you are deaf or hard of hearing, or that you require a wheelchair.</label>
            <input
              type="text"
              name="accessibility"
              id="accessibility"
              placeholder="accessibility requirements"
              value={formData.accessibility}
              onChange={handleChange}
              required
            />
            <button type="button" onClick={handleNext}>→</button>
          </div>
        );
      case 4:
        return (
          <div className="form-step">
            <label htmlFor="addtlreq">we leave this section open-ended, if there is anything else you want intervening parties to be aware of in the event that you are in an emergency situation.</label>
            <input
              type="text"
              name="addtlreq"
              id="addtlreq"
              placeholder="additional notes"
              value={formData.addtlreq}
              onChange={handleChange}
              required
            />
            <button type="button" onClick={handleNext}>→</button>
          </div>
        );
      case 5:
        return (
          <div className="form-step">
            <h3>Intervention Preferences (select all that apply):</h3>
            <div className="options-box">
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
            <div className="options-box">
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
            <div className="options-box">
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
            <div className="options-box">
              <label>
                <input
                  type="checkbox"
                  name="auin_civil"
                  checked={formData.interventionPreferences.includes('auin_civil')}
                  onChange={handleCheckboxChange}
                />
                civil servant intervention
              </label>
            </div>
            <div className="options-box">
              <label>
                <input
                  type="checkbox"
                  name="auin_community"
                  checked={formData.interventionPreferences.includes('auin_community')}
                  onChange={handleCheckboxChange}
                />
                community intervention
              </label>
            </div>
            <div className="options-box">
              <label>
                <input
                  type="checkbox"
                  name="perin_community"
                  checked={formData.interventionPreferences.includes('perin_community')}
                  onChange={handleCheckboxChange}
                />
                personal intervention
              </label>
            </div>
            <button type="button" onClick={handleNext}>→</button>
          </div>
        );
      case 6:
        return (
          <div className="form-step" >
            <h3 className="primary-contacts-title">Primary Contacts:</h3>
            <div className="contacts-container">
              <div className="contact-box-scrollable">
                {formData.contacts.map((contact, index) => (
                  <div key={index} className="contact-entry">
                    <label>
                      Contact Name:
                      <input
                        type="text"
                        name="name"
                        value={contact.name}
                        onChange={(event) => handleContactChange(index, event)}
                      />
                    </label>
                    <label>
                      Phone Number:
                      <input
                        type="tel"
                        name="phone_number"
                        value={contact.phone_number}
                        onChange={(event) => handleContactChange(index, event)}
                      />
                    </label>
                  </div>
                ))}
              </div>

              {formData.contacts.length < 10 && (
                <button type="button" className="add-contact-button" onClick={addNewContact}>
                  add a new contact
                </button>
              )}
            </div>

            <button type="submit" className="submit-preferences-button">
              submit preferences
            </button>
          </div >
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
      <div className="return-home">
        <p><a href="/map" target="_blank" rel="noopener noreferrer">return home</a></p>
      </div>
    </div>
  );
}

export default Preferences;