import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// pages import
import Login from './pages/Login.jsx';
import MapPage from './pages/MapPage';
import Aftercare from './pages/Aftercare.jsx';
import About from './pages/About.jsx';
import Preferences from './pages/Preferences.jsx';
import Logout from './pages/Logout.jsx';
import Register from './pages/Register.jsx';
import TermsAndConditions from './pages/TermsAndConditions.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';

// css import
import './App.css';

function App() {
  const getBaseBackendURL = () => {
    switch (window.location.origin) {
     case "https://yellow-beach-0a6bcfb0f.5.azurestaticapps.net":
       console.log("Running in the production environment")
       return ("https://beacon-backend-prod.azurewebsites.net")
     default: 
       console.log("Running in the local environment")
       return("http://localhost:8080/")
    }
}

const baseBackendURL = getBaseBackendURL()

  const [userData, setUserData] = useState(null);

  const loginUser = async (loginData) => {
    const request = await fetch(`${baseBackendURL}/auth/login`, {
      method: "POST",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(loginData),
    });
    const requestData = await request.json();
    console.log(requestData);

    if (requestData.message === "Login successful") {
      console.log(`user ${requestData.data[0]._id} successfully logged in`)
      setUserData(requestData.data[0])
      return true;
    } else {
      setUserData(null);
      return false;
    }
  };

  const [destination, setDestination] = useState('');

  const updateDestination = (address) => {
    setDestination(address);
    console.log(`the value of destination is now set to ${destination}`);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Login loginUser={loginUser} />
          }
        />
        <Route
          path="/register"
          element={
            <>
              <Register baseBackendURL={baseBackendURL} />
            </>
          }
        />
        <Route
          path="/map"
          element={
            <>
              <MapPage />
            </>
          }
        />
        <Route
          path="/aftercare"
          element={
            <>
              <Aftercare />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <About />
            </>
          }
        />
        <Route
          path="/preferences"
          element={
            <>
              <Preferences userData={userData} />
            </>
          }
        />
        <Route 
          path="/logout"
          element={
            <Logout />
          } 
        />
        <Route
          path="/termsandconditions"
          element={
            <>
              <TermsAndConditions />
            </>
          }
        />
        <Route
          path="/privacypolicy"
          element={
            <>
              <PrivacyPolicy />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
