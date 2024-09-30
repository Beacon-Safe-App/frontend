import React from 'react';
import { Link } from 'react-router-dom';
import useLastVisitedPage from '../hooks/useLastVisitedPage.js';
import './css/Index.css';

function HistoryLog() {
    useLastVisitedPage();

    const sections = [
        { title: 'Emergencies', route: '/emergencylog' },
        { title: 'Video Records', route: '/videorecordinglog' },
        { title: 'Audio Records', route: '/audiorecordinglog' },
        { title: 'Alarm Used', route: '/alarmlog' },
        { title: 'Strobe Used', route: '/strobelog' },
        { title: 'Routed To', route: '/routelog' },
        { title: 'Fake Calls', route: '/fakecalllog' },
        { title: 'Aftercare', route: '/aftercarelog' },
        { title: 'Timer Used', route: '/timerlog' },
        { title: 'Bystander Reports', route: '/bystanderreportlog' },
        { title: 'Stalker Log', route: '/stalkerloglog' },
    ];

    return (
        <div className="how-to-container">
            <h1>HISTORY LOG</h1>
            <div className="return-to-login">
                <Link to={sessionStorage.getItem('lastVisitedPage') || '/'} className="return-link">← Return</Link>
            </div>

            <div className="section-list">
                {sections.map((section, index) => (
                    <div key={index} className="section-item">
                        <span>{section.title}</span>
                        <Link to={section.route} className="arrow-link">→</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HistoryLog;