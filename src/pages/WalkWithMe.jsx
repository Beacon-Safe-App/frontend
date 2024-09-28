import React, { useState } from 'react';
import './css/Tools.css';

function WalkWithMe() {
  const generateOptions = (max) => {
      let options = [];
      for (let i = 0; i <= max; i++) {
          options.push(i < 10 ? `0${i}` : i.toString());
      }
      return options;
  };

  const hoursOptions = generateOptions(11);
  const minutesOptions = generateOptions(59);
  const secondsOptions = generateOptions(59);

  const [selectedHour, setSelectedHour] = useState('00');
  const [selectedMinute, setSelectedMinute] = useState('00');
  const [selectedSecond, setSelectedSecond] = useState('00');

  return (
      <div className="walk-with-me-container">
          <img 
              id="walk-with-me-image" 
              src="https://64.media.tumblr.com/3939f85fd631cd31a2205bf3cbfc3f8b/3ae0b1f208ac5141-2e/s540x810/b89be2573657d6f352e1e3644ea6304c84dc00e1.pnj" 
              alt="timed walk with me graphic" 
          />
          <p className="tool-p">This "walk with me" feature sets a timer for your safe arrival. When it ends, you'll need to enter your PIN to deactivate it. If not, your phone will switch to emergency mode.</p>
          <form className="walk-with-me-form">
              <input 
                  type="text" 
                  className="destination-text-input" 
                  placeholder="destination address" 
                  required
              />
              <h3 className="tool-h3">SET TIME:</h3>
              <div className="time-selector-container">
                  <div className="time-scroll hours-scroll">
                      {hoursOptions.map((hour) => (
                          <div 
                              key={hour} 
                              className={`time-option ${selectedHour === hour ? 'selected' : ''}`}
                              onClick={() => setSelectedHour(hour)}
                          >
                              {hour}
                          </div>
                      ))}
                  </div>
                  <div className="time-label">hours</div>
                  
                  <div className="time-scroll minutes-scroll">
                      {minutesOptions.map((minute) => (
                          <div 
                              key={minute} 
                              className={`time-option ${selectedMinute === minute ? 'selected' : ''}`}
                              onClick={() => setSelectedMinute(minute)}
                          >
                              {minute}
                          </div>
                      ))}
                  </div>
                  <div className="time-label">min</div>

                  <div className="time-scroll seconds-scroll">
                      {secondsOptions.map((second) => (
                          <div 
                              key={second} 
                              className={`time-option ${selectedSecond === second ? 'selected' : ''}`}
                              onClick={() => setSelectedSecond(second)}
                          >
                              {second}
                          </div>
                      ))}
                  </div>
                  <div className="time-label">sec</div>
              </div>
          </form>
          <button type="submit" className="tool-button" id="fake-call-button">
              START TIMER
          </button>
      </div>
  );
}

export default WalkWithMe;