import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/PrimaryTools.css';

function VideoRecording() {
  const [seconds, setSeconds] = useState(10);
  const [isRecording, setIsRecording] = useState(false);
  const [pin, setPin] = useState('');
  const [isPinComplete, setIsPinComplete] = useState(false);
  const navigate = useNavigate();

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
      if (value.length === 4) {
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
    <div className="videorecording-container">
      <img 
        src="https://64.media.tumblr.com/de1664fac8b56acd863c332d3c245c8f/0309429298651caf-94/s540x810/c587940f25cfd0d32c647c0df98fae7d8cccc2be.pnj"
        alt="Recording Indicator"
        className={`recording-image ${isRecording && !isPinComplete ? 'blinking' : ''}`}
      />
      {!isRecording && (
        <>
          <h3>VIDEO RECORDING TO START IN:</h3>
          <h2>{seconds} seconds</h2>
        </>
      )}
      {isRecording && !isPinComplete && (
        <>
          <h2>VIDEO RECORDING IN PROGRESS</h2>
          <p className="primarytoolp">recording being sent live to a protected server</p>
          <h3>ENTER PERSONAL PIN TO DEACTIVATE:</h3>
          <input id="primarytoolinput"
            type="password"
            value={pin}
            onChange={handlePinChange}
            maxLength={4}
            placeholder="Enter 4-digit PIN"
          />
        </>
      )}
      {isPinComplete && (
        <div>
          <h2>Recording has been deactivated.</h2>
          <button id="primarytoolbutton" onClick={returnToMap}>RETURN TO MAP</button>
        </div>
      )}
    </div>
  );
}

export default VideoRecording;