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
                src="https://64.media.tumblr.com/503ec7e61c04fc363f74cbdec833b0f9/b839c8aa3e6f5850-e5/s500x750/9036ce408a7251efffa18a164b10a769a2986d57.pnj"
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