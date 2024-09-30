import React from 'react';
import { Link } from 'react-router-dom';
import useLastVisitedPage from '../hooks/useLastVisitedPage.js';
import './css/Index.css';

function HowTo() {
  useLastVisitedPage();

  const sections = [
    { title: 'General Information', route: '/generalinfo' },
    { title: 'Emergency Mode', route: '/emergencymodeinfo' },
    { title: 'Map', route: '/mapinfo' },
    { title: 'Video Record', route: '/videorecordinginfo' },
    { title: 'Audio Record', route: '/audiorecordinginfo' },
    { title: 'Alarm', route: '/alarminfo' },
    { title: 'Strobe', route: '/strobeinfo' },
    { title: 'Fake Call', route: '/fakecallinfo' },
    { title: 'Timer', route: '/timerinfo' },
    { title: 'Bystander Report', route: '/bystanderreportinfo' },
    { title: 'World View', route: '/worldviewinfo' },
    { title: 'Stalker Log', route: '/stalkerloginfo' },
    { title: 'Voice Recognition', route: '/voicerecognitioninfo' },
    { title: 'Aftercare', route: '/aftercareinfo' },
    { title: 'History Log', route: '/historyloginfo' },
    { title: 'Preferences', route: '/preferencesinfo' }
  ];

  return (
    <div className="how-to-container">
      <h1>General Information and Instructions</h1>
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

export default HowTo;