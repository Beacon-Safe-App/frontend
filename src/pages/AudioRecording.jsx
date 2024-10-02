import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/PrimaryTools.css';

function AudioRecording({userData}) {
  const [seconds, setSeconds] = useState(10);
  const [isRecording, setIsRecording] = useState(false);
  const [pin, setPin] = useState('');
  const [isPinComplete, setIsPinComplete] = useState(false);
  const navigate = useNavigate();
  const userPin = userData?.preferences?.pin || 'NotDefined'

  if (userPin === 'NotDefined') {
      return (
          <h1>Please define a pin in preferences to use this feature</h1>
      )
  }

  useEffect(() => {
    if (seconds > 0 && !isRecording) {
      const timerId = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timerId);
    } else if (seconds === 0) {
      setIsRecording(true);
    }
  }, [seconds, isRecording]);

  const handlePinChange = (event) => {
    const value = event.target.value;
    if (value.length <= 4) {
      setPin(value);
      if (Number(value) === Number(userPin)) {
        setIsPinComplete(true);
      }
    }
  };

  const returnToMap = () => {
    setSeconds(10);
    setIsRecording(false);
    setPin('');
    setIsPinComplete(false);
    navigate('/map');
  };

  return (
    <div className="audiorecording-container">
      <img
        src="https://64.media.tumblr.com/f932053ac4f4e8e0d294457d241adec9/ad51c2a0414ef920-b3/s540x810/dbf89ff192722ca3d2c9eb898e1f433a0f7a1033.pnj"
        alt="Recording Indicator"
        className={`recording-image ${isRecording && !isPinComplete ? 'blinking' : ''}`}
      />
      {!isRecording && (
        <>
          <h3>AUDIO RECORDING TO START IN:</h3>
          <h2>{seconds} seconds</h2>
          <button id="cancel-button" onClick={returnToMap}>
            CANCEL
          </button>
        </>
      )}
      {isRecording && !isPinComplete && (
        <>
          <h2>AUDIO RECORDING IN PROGRESS</h2>
          <p className="primarytoolp">recording being sent live to a protected server</p>
          <h3>ENTER PERSONAL PIN TO DEACTIVATE:</h3>
          <input id="primarytoolinput"
            type="password"
            value={pin}
            onChange={handlePinChange}
            maxLength={4}
            placeholder="Enter your PIN"
          />
        </>
      )}
      {isPinComplete && (
        <div>
          <h2>RECORDING HAS STOPPED</h2>
          <button id="primarytoolbutton" onClick={returnToMap}>RETURN TO MAP</button>
        </div>
      )}
    </div>
  );
}

export default AudioRecording;