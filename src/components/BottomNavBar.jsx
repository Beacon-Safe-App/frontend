import { Link } from 'react-router-dom';
import { useState } from 'react';
import './NavBar.css';

const navItems = [
    { id: 1, icon: 'https://64.media.tumblr.com/de1664fac8b56acd863c332d3c245c8f/0309429298651caf-94/s540x810/c587940f25cfd0d32c647c0df98fae7d8cccc2be.pnj', label: 'VIDEO RECORD', route: '/videorecording' },
    { id: 2, icon: 'https://64.media.tumblr.com/f932053ac4f4e8e0d294457d241adec9/ad51c2a0414ef920-b3/s540x810/dbf89ff192722ca3d2c9eb898e1f433a0f7a1033.pnj', label: 'AUDIO RECORD', route: '/audiorecording' },
    { id: 3, icon: 'https://64.media.tumblr.com/6be521812ff178b39835ac030de86de2/d15a111cd6df2c62-60/s540x810/b076adb5ee3907c69e536fd5caec8c3abe39cca2.pnj', label: 'EMERGENCY MODE', route: '/emergencymode' },
    { id: 4, icon: 'https://64.media.tumblr.com/6b561e80f7c47e3915828c3047c67aa1/6f3589135cc2e4a0-55/s540x810/f5bc0d98339befb7b15391b62f2ce5ffac411d06.pnj', label: 'ALARM', route: '/alarm' },
    { id: 5, icon: 'https://64.media.tumblr.com/383760b5e04414482fb1753d89a97f04/e2301e7bd4f21116-f4/s540x810/50b48c109a7c02bc2d90864410acc2c8addb730d.pnj', label: 'STROBE', route: '/strobe' },
];

const BottomNavBar = () => {
    return (
        <div className="bottom-navbar">
            <div className="bottom-scrollable-nav">
                {navItems.map(item => (
                    <div className="nav-item" key={item.id}>
                        <Link to={item.route}>
                            <img 
                                src={item.icon} 
                                alt={item.label} 
                                className={`bottom-nav-icon ${item.id === 3 ? 'bottom-nav-icon-red' : ''}`}
                            />
                        </Link>
                        <span className="nav-label">{item.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BottomNavBar;