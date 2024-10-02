import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/Register.css";

function Register(props) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    pin: "",
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
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // console.log("Submitting form...", formData);

    try {
      formData["preferences"] = {};
      formData["preferences"]["pin"] = formData.pin;
      const response = await fetch(`${props.baseBackendURL}/auth`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("HTTP error! Status: ${response.status");
      }

      const data = await response.json();
      // console.log("Response received:", data);

      navigate("/");
    } catch (error) {
      console.error("Error occurred:", error.message);
    }
  };

  const renderFormStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="form-step">
            <label htmlFor="name">
              your name will be used with any alerts sent to your primary
              contacts in the event of an emergency.
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              id="nextregisterarrowbutton"
              onClick={handleNext}
            >
              →
            </button>
          </div>
        );
      case 2:
        return (
          <div className="form-step">
            <label htmlFor="email">
              your email address will be the unique identifier associated with
              your account and will be used for login.
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              id="nextregisterarrowbutton"
              onClick={handleNext}
            >
              →
            </button>
          </div>
        );
      case 3:
        return (
          <div className="form-step">
            <label htmlFor="password">
              your password will be used to log in to your account.
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              id="nextregisterarrowbutton"
              onClick={handleNext}
            >
              →
            </button>
          </div>
        );
      case 4:
        return (
          <div className="form-step">
            <label htmlFor="phoneNumber">
              your phone number is used for two of the app's primary safety
              tools.
            </label>
            <input
              type="tel"
              name="phoneNumber"
              id="phoneNumber"
              placeholder="phone number"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              id="nextregisterarrowbutton"
              onClick={handleNext}
            >
              →
            </button>
          </div>
        );
      case 5:
        return (
          <div className="form-step">
            <label htmlFor="pin">
              this pin will be used for additional validation in the several
              safely tools available in the app
            </label>
            <input
              type="text"
              name="pin"
              id="pin"
              placeholder="pin"
              value={formData.pin}
              onChange={handleChange}
              required
            />
            <button type="submit" id="registersubmitbutton">
              SUBMIT
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  const progressPercentage = (step / 5) * 100;

  return (
    <div className="register-container">
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      <form
        className="register-form"
        onSubmit={(e) => {
          // console.log("Form is being submitted");
          handleSubmit(e);
        }}
      >
        {renderFormStep()}
      </form>
      <div className="return-to-login">
        <Link to={"/"} className="return-link">
          ← RETURN
        </Link>
      </div>
    </div>
  );
}

export default Register;
