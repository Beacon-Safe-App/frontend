import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import GoogleMap from './components/map.jsx';
import DestinationPickList from './components/destinationPickList.jsx';
import Login from './pages/Login.jsx';
import Aftercare from './pages/Aftercare.jsx';
import About from './pages/About.jsx';
import Preferences from './pages/Preferences.jsx';
import Logout from './pages/Logout.jsx';
import Register from './pages/Register.jsx';
import NavBar from './components/NavBar.jsx';
import TermsAndConditions from './components/TermsAndConditions.jsx';

function App() {
  const baseBackendURL = "http://localhost:8080";

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
          element={<Login loginUser={loginUser} />}
        />
        <Route
          path="/register"
          element={
            <>
              <NavBar />
              <Register />
            </>
          }
        />
        <Route
          path="/map"
          element={
            <div className="map-page">
              <NavBar />
              <DestinationPickList updateDestination={updateDestination} />
              <GoogleMap
                destination={destination}
                hardcodeStartAddress={true}
                startAddress={'1530 E 19th St Brooklyn NY 11230'}
              />
            </div>
          }
        />
        <Route
          path="/aftercare"
          element={
            <>
              <NavBar />
              <Aftercare />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <NavBar />
              <About />
            </>
          }
        />
        <Route
          path="/preferences"
          element={
            <>
              <NavBar />
              <Preferences userData={userData} />
            </>
          }
        />
        <Route path="/logout" element={<Logout />} />
        <Route
          path="/termsandconditions"
          element={
            <>
              <NavBar />
              <TermsAndConditions />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
