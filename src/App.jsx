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

function App() {
  const [destination, setDestination] = useState('')

  const updateDestination = (address) => {
    setDestination(address)
    console.log(`the value of destination is now set to ${destination}`)
  }

  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Login</Link></li>
          <li><Link to="/map">Map</Link></li>
          <li><Link to="/aftercare">Aftercare</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/preferences">Preferences</Link></li>
          <li><Link to="/logout">Logout</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/map"
          element={
            <>
            <DestinationPickList updateDestination = {updateDestination}/>
            <GoogleMap destination = {destination} hardcodeStartAddress = {true} startAddress= {'1530 E 19th St Brooklyn NY 11230'} />
            </>
          }
        />
        <Route path="/aftercare" element={<Aftercare />} />
        <Route path="/about" element={<About />} />
        <Route path="/preferences" element={<Preferences />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
}

export default App;
