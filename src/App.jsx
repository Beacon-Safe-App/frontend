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
import NavBar from './components/NavBar.jsx';
import TermsAndConditions from './components/TermsAndConditions.jsx';

function App() {
  const [destination, setDestination] = useState('')

  const updateDestination = (address) => {
    setDestination(address)
    console.log(`the value of destination is now set to ${destination}`)
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/map"
          element={
            <>
              <NavBar />
              <DestinationPickList updateDestination={updateDestination} />
              <GoogleMap destination={destination} hardcodeStartAddress={true} startAddress={'1530 E 19th St Brooklyn NY 11230'} />
            </>
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
              <Preferences />
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
