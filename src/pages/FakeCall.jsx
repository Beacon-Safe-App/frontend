import React, { useState } from 'react';
import './css/Tools.css';

function FakeCall() {
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
        <div className="fake-call-container">
            <img 
                id="fake-call-image" 
                src="https://64.media.tumblr.com/2278b08277a5f1493ff55c1e6764d105/f6bf6f2d48f4ab11-11/s500x750/a6eb3c1db9c7a6ef98b6412abb36a0d1ce2f6352.pnj" 
                alt="fake call graphic" 
            />
            <p className="tool-p">This will make your phone ring and show a call screen so that it looks like the person you have selected is calling you</p>
            <h3 className="tool-h3">set the name and time of call:</h3>
            <form className="fake-call-form">
                <input 
                    type="text" 
                    className="tool-text-input" 
                    placeholder="caller name" 
                    required
                />
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
                SCHEDULE FAKE CALL
            </button>
        </div>
    );
}

export default FakeCall;