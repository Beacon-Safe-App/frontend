import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useLastVisitedPage from "../hooks/useLastVisitedPage.js";
import "./css/Profile.css";

function Profile({ userData, baseBackendURL, getCurrentUserData }) {
  useLastVisitedPage();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
  });

  useEffect(() => {
    if (userData) {
      //   console.log(userData);
      setFormData({
        name: userData?.name || "",
        phoneNumber: userData?.phoneNumber || "",
        email: userData?.email || "",
      });
    }
  }, [userData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const prepareFormData = () => {
    const updatedData = { ...formData };
    if (!updatedData.password) delete updatedData.password;
    return updatedData;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${baseBackendURL}/auth/${userData._id}`, {
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(prepareFormData()),
      });
      const result = await response.json();
      if (result.status === "success") {
        alert("Profile updated successfully");
        getCurrentUserData();
        navigate("/");
      } else {
        alert("Failed to update profile");
      }
    } catch (err) {
      console.error("Error updating profile:", err);
    }
  };

  return (
    <div className="profile-container">
      <h1>PROFILE</h1>
      <div className="return-to-login">
        <Link to={"/map"} className="return-link">
          ← RETURN
        </Link>
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
              placeholder={formData.name || "Name"}
            />
          </div>

          <div className="profile-section-item">
            <label>PHONE NUMBER</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder={formData.phoneNumber || "Phone Number"}
            />
          </div>

          <div className="profile-section-item">
            <label>EMAIL</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={formData.email || "Email"}
            />
          </div>

          <button type="submit" className="submit-button">
            SAVE CHANGES
          </button>
        </div>
      </form>
    </div>
  );
}

export default Profile;