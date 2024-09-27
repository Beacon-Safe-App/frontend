import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// pages import
import About from './pages/About.jsx';
import Aftercare from './pages/Aftercare.jsx';
import Alarm from './pages/Alarm.jsx';
import AudioRecording from './pages/AudioRecording.jsx';
import BystanderReport from './pages/BystanderReport.jsx';
import EmergencyMode from './pages/EmergencyMode.jsx';
import FakeCall from './pages/FakeCall.jsx';
import Flashlight from './pages/Flashlight.jsx';
import HistoryLog from './pages/HistoryLog.jsx';
import Login from './pages/Login.jsx';
import Logout from './pages/Logout.jsx';
import MainMenu from './pages/MainMenu.jsx';
import MapPage from './pages/MapPage';
import Preferences from './pages/Preferences.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import Register from './pages/Register.jsx';
import StalkerLog from './pages/StalkerLog.jsx';
import TermsAndConditions from './pages/TermsAndConditions.jsx';
import VideoRecording from './pages/VideoRecording.jsx';
import VoiceActivation from './pages/VoiceActivation.jsx';
import WalkWithMe from './pages/WalkWithMe.jsx';
import WorldView from './pages/WorldView.jsx';

// components import
import TopNavBar from './components/TopNavBar.jsx';
import BottomNavBar from './components/BottomNavBar.jsx'

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
        return ("http://localhost:8080/")
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
              <FakeCall />
            </>
          }
        />
        <Route
          path="/flashlight"
          element={
            <>
              <Flashlight />
            </>
          }
        />
        <Route
          path="/historylog"
          element={
            <>
              <TopNavBar />
              <HistoryLog />
              <BottomNavBar />
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
          path="/mainmenu"
          element={
            <>
              <MainMenu />
            </>
          }
        />
        <Route
          path="/map"
          element={
            <>
              <TopNavBar />
              <MapPage />
              <BottomNavBar />
            </>
          }
        />
        <Route
          path="/preferences"
          element={
            <>
              <TopNavBar />
              <Preferences userData={userData} />
              <BottomNavBar />
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
          path="/voiceactivation"
          element={
            <>
              <VoiceActivation />
            </>
          }
        />
        <Route
          path="/walkwithme"
          element={
            <>
              <WalkWithMe />
            </>
          }
        />
        <Route
          path="/worldview"
          element={
            <>
              <TopNavBar />
              <WorldView />
              <BottomNavBar />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
