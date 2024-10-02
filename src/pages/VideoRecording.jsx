import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/PrimaryTools.css";

function VideoRecording({ userData }) {
  const [seconds, setSeconds] = useState(10);
  const [isRecording, setIsRecording] = useState(false);
  const [pin, setPin] = useState("");
  const [isPinComplete, setIsPinComplete] = useState(false);
  const [isPinInvalid, setIsPinInvalid] = useState(false);
  const navigate = useNavigate();
  const userPin = userData?.preferences?.pin || "NotDefined";

  if (userPin === "NotDefined") {
    return <h1>Please define a pin in preferences to use this feature</h1>;
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
    setPin(value);
    setIsPinInvalid(false);
  };

  const validatePin = () => {
    if (pin === userPin) {
      setIsPinComplete(true);
    } else {
      setIsPinInvalid(true);
    }
  };

  const returnToMap = () => {
    setSeconds(10);
    setIsRecording(false);
    setPin("");
    setIsPinComplete(false);
    setIsPinInvalid(false);
    navigate("/map");
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
          <h3>VIDEO RECORDING TO ACTIVATE IN:</h3>
          <h2>{seconds} seconds</h2>
          <button id="cancel-button" onClick={returnToMap}>
            CANCEL
          </button>
        </>
      )}
      {isRecording && !isPinComplete && (
        <>
          <h2>VIDEO RECORDING IN PROGRESS</h2>
          <h3>ENTER PERSONAL PIN TO DEACTIVATE:</h3>
          <input
            id="primarytoolinput"
            type="password"
            value={pin}
            onChange={handlePinChange}
            placeholder="Enter your PIN"
          />
          <button id="primarytoolbutton" onClick={validatePin}>
            SUBMIT
          </button>
          {isPinInvalid && (
            <div className="error-popup">
              <p>Invalid PIN. Please try again.</p>
            </div>
          )}
        </>
      )}
      {isPinComplete && (
        <div>
          <h2>VIDEO RECORDING HAS STOPPED</h2>
          <button id="primarytoolbutton" onClick={returnToMap}>
            RETURN TO MAP
          </button>
        </div>
      )}
    </div>
  );
}

export default VideoRecording;