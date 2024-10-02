import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/PrimaryTools.css';

function EmergencyMode({userData}) {
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
            if (Number(value) === Number(userPin) ) {
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
        <div className="emergency-mode-container">
            <img
                id="emergencymodeimage"
                src="https://64.media.tumblr.com/ff0c0acfd36166ef8045cd9c28e2a108/7f1ced686e95d4d2-d3/s540x810/313897fa76ee2c68a08b2548c30e60bf847a593e.pnj"
                alt="Emergency Mode Indicator"
                className={`${isRecording && !isPinComplete ? 'emergencyblinking' : ''}`}
            />
            {!isRecording && (
                <>
                    <h3>EMERGENCY MODE TO START IN:</h3>
                    <h2>{seconds} seconds</h2>
                    <button id="cancel-button" onClick={returnToMap}>
                        CANCEL
                    </button>
                </>
            )}
            {isRecording && !isPinComplete && (
                <>
                    <h2>EMERGENCY MODE IN PROGRESS</h2>
                    <p className="primarytoolp">primary contacts being alerted and location actively being shared.<br></br>video and audio recording in progress.<br></br>recordings being sent live to our protected server.</p>
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
                    <h2>EMERGENCY MODE HAS STOPPED</h2>
                    <button id="primarytoolbutton" onClick={returnToMap}>RETURN TO MAP</button>
                </div>
            )}
        </div>
    );
}

export default EmergencyMode;