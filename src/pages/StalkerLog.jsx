import React, { useState } from 'react';
import './css/Tools.css';

function StalkerLog() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="fake-call-container">
            <div 
                className="tool-image-container"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <img
                    id="tool-image"
                    src="https://64.media.tumblr.com/ebbd27e2a24d7aee92525b0a6be0bf33/68d315420f546d0f-0c/s540x810/994db3a0cd38d9dcb8b32166d4036b478d399bea.pnj"
                    alt="fake call graphic"
                />
                {isHovered && <p className="tool-label">PIN AN INSTANCE</p>}
            </div>
            <p className="tool-p">Here, you can track repeated stalking and/or harassment by creating a profile for the individual and documenting each associated instance.<br></br><br></br>Use the pin icon to log your current location with date, time, and the ability to assign the instance to a profile, add images and/or add notes.<br></br><br></br>In an emergency, this information can be shared with your primary contacts or relevant entities based on your chosen intervention preferences.</p>
            <button type="submit" className="tool-button" id="fake-call-button">
                INDIVIDUAL PROFILES & RECORDED DATA
            </button>
        </div>
    );
}

export default StalkerLog;