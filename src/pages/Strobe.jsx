import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/PrimaryTools.css";

function Strobe({ userData }) {
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
    <div
      className={`strobe-container ${
        isRecording && !isPinComplete ? "flashing-background" : ""
      }`}
    >
      <img
        src="https://64.media.tumblr.com/383760b5e04414482fb1753d89a97f04/e2301e7bd4f21116-f4/s540x810/50b48c109a7c02bc2d90864410acc2c8addb730d.pnj"
        alt="Strobe Indicator"
        className={`recording-image ${
          isRecording && !isPinComplete ? "blinking" : ""
        }`}
      />
      {!isRecording && (
        <>
          <h3>STROBE TO ACTIVATE IN:</h3>
          <h2>{seconds} seconds</h2>
          <button id="cancel-button" onClick={returnToMap}>
            CANCEL
          </button>
        </>
      )}
      {isRecording && !isPinComplete && (
        <>
          <h2>STROBE ACTIVATED</h2>
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
          <h2>STROBE DEACTIVATED</h2>
          <button id="primarytoolbutton" onClick={returnToMap}>
            RETURN TO MAP
          </button>
        </div>
      )}
    </div>
  );
}
export default Strobe;
