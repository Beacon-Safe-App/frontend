import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// pages import
import About from './pages/About.jsx';
import Aftercare from './pages/Aftercare.jsx';
import Alarm from './pages/Alarm.jsx';
import AudioRecording from './pages/AudioRecording.jsx';
import BystanderReport from './pages/BystanderReport.jsx';
import EmergencyMode from './pages/EmergencyMode.jsx';
import FakeCall from './pages/FakeCall.jsx';
import HistoryLog from './pages/HistoryLog.jsx';
import HowTo from './pages/HowTo.jsx';
import Login from './pages/Login.jsx';
import Logout from './pages/Logout.jsx';
import MapPage from './pages/MapPage';
import Preferences from './pages/Preferences.jsx';
import Profile from './pages/Profile.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import Register from './pages/Register.jsx';
import StalkerLog from './pages/StalkerLog.jsx';
import Strobe from './pages/Strobe.jsx';
import TermsAndConditions from './pages/TermsAndConditions.jsx';
import VideoRecording from './pages/VideoRecording.jsx';
import VoiceRecognition from './pages/VoiceRecognition.jsx';
import WalkWithMe from './pages/WalkWithMe.jsx';
import WorldView from './pages/WorldView.jsx';

// components import
import TopNavBar from './components/TopNavBar.jsx';
import BottomNavBar from './components/BottomNavBar.jsx'

// css import
import './App.css';
import { render } from 'react-dom';

function App() {
  const getBaseBackendURL = () => {
    switch (window.location.origin) {
      case "https://yellow-beach-0a6bcfb0f.5.azurestaticapps.net":
        console.log("Running in the production environment")
        return ("https://beacon-backend-prod.azurewebsites.net")
      default:
        console.log("Running in the local environment")
        return ("http://localhost:8080")
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
      sessionStorage.setItem('userLoggedIn', 'true')
      setUserData(requestData.data[0])
      return true
    } else {
      setUserData(null);
      sessionStorage.setItem('userLoggedIn', 'false')
      return false
    }
  };

  const logoutUser = async () => {
    const URL = `${baseBackendURL}/auth/logout`
    await fetch(URL, {
        method: "POST",
        credentials: 'include'
    })
    sessionStorage.setItem('userLoggedIn', 'false')
    setUserData(null)
  }

  const getCurrentUserData = async () => {
    const request = await fetch (`${baseBackendURL}/auth/`, {
      method: "GET",
      credentials: 'include',
  })
  const requestData = await request.json()
  if (requestData.message === "Returning user data") {
    sessionStorage.setItem('userLoggedIn', 'true')
    setUserData(requestData.data[0])
  } else {
    sessionStorage.setItem('userLoggedIn', 'false')
    setUserData(null)
  }
  }

  useEffect(() => {
    getCurrentUserData()
  }, [])

  const renderOnlyLogin = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Login loginUser={loginUser} userData={userData} />
          }
        />
        <Route
          path="/logout"
          element={
            <Logout logoutUser={logoutUser}/>
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
      </Routes>
    </Router>
  )}

  const renderAllRoutes = () => {
    return (
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Login loginUser={loginUser} userData={userData} />
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
            path="/aftercare"
            element={
              <>
                <TopNavBar />
                <Aftercare />
                <BottomNavBar />
              </>
            }
          />
          <Route
            path="/alarm"
            element={
              <>
                <Alarm />
              </>
            }
          />
          <Route
            path="/audiorecording"
            element={
              <>
                <AudioRecording />
              </>
            }
          />
          <Route
            path="/bystanderreport"
            element={
              <>
                <TopNavBar />
                <BystanderReport />
                <BottomNavBar />
              </>
            }
          />
          <Route
            path="/emergencymode"
            element={
              <>
                <EmergencyMode />
              </>
            }
          />
          <Route
            path="/fakecall"
            element={
              <>
                <TopNavBar />
                <FakeCall />
                <BottomNavBar />
              </>
            }
          />
          <Route
            path="/strobe"
            element={
              <>
                <Strobe />
              </>
            }
          />
          <Route
            path="/historylog"
            element={
              <>
                <HistoryLog />
              </>
            }
          />
          <Route
            path="/logout"
            element={
              <Logout logoutUser={logoutUser}/>
            }
          />
          <Route
            path="/howto"
            element={
              <>
                <HowTo />
              </>
            }
          />
          <Route
            path="/map"
            element={
              <>
                <TopNavBar />
                <MapPage baseBackendURL={baseBackendURL}/>
                <BottomNavBar />
              </>
            }
          />
          <Route
            path="/preferences"
            element={
              <>
                <Preferences userData={userData} baseBackendURL={baseBackendURL} />
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
          <Route
            path="/profile"
            element={
              <>
                <Profile userData={userData} baseBackendURL={baseBackendURL} />
              </>
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
            path="/stalkerlog"
            element={
              <>
                <TopNavBar />
                <StalkerLog />
                <BottomNavBar />
              </>
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
            path="/videorecording"
            element={
              <>
                <VideoRecording />
              </>
            }
          />
          <Route
            path="/voicerecognition"
            element={
              <>
                <TopNavBar />
                <VoiceRecognition />
                <BottomNavBar />
              </>
            }
          />
          <Route
            path="/walkwithme"
            element={
              <>
                <TopNavBar />
                <WalkWithMe />
                <BottomNavBar />
              </>
            }
          />
          <Route
            path="/worldview"
            element={
              <>
                <TopNavBar />
                <MapPage baseBackendURL={baseBackendURL}/>
                <BottomNavBar />
              </>
            }
          />
        </Routes>
      </Router>
    );
  }

  if (sessionStorage.getItem('userLoggedIn') === 'true') {
    console.log('rendering all routes')
    return renderAllRoutes()
  } else {
    console.log('rendering only login route')
    return renderOnlyLogin()
  }
  
}

export default App;
