import { Link } from 'react-router-dom';
import { useState } from 'react';
import './NavBar.css';

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav>
            <button onClick={toggleMenu}>
                {isOpen ? 'Close Menu' : 'Open Menu'}
            </button>

            {isOpen && (
                <ul>
                    <li><Link to="/">Login</Link></li>
                    <li><Link to="/map">Map</Link></li>
                    <li><Link to="/aftercare">Aftercare</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/preferences">Preferences</Link></li>
                    <li><Link to="/logout">Logout</Link></li>
                </ul>
            )}
        </nav>
    );
}

export default NavBar;