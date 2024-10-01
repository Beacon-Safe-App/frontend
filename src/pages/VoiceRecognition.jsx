import React, { useState } from 'react';
import './css/Tools.css';

function VoiceRecognition() {
  const [isVoiceRecognitionOn, setIsVoiceRecognitionOn] = useState(false);

  const toggleVoiceRecognition = () => {
    setIsVoiceRecognitionOn((prev) => !prev);
  };

  return (
    <div className="tool-image-container">
      <img
        id="soundwave-image"
        src="https://64.media.tumblr.com/8af2a9c2d43f428cb0601f3bd44c1f42/294aa19ab6f6efa0-9d/s540x810/2807e2afed143186d50970b18b0f24e3dc6f4a17.pnj"
        alt="sound wave graphic"
      />
      <p className="tool-p">
        Enabling voice recognition allows you to activate emergency mode with a verbal command, without opening the app or pressing the button.
        <br />
        <br />
        To learn more about voice recognition, or to reset preferences, click <a href="/preferences" target="_blank" rel="noopener noreferrer">here</a>.
      </p>
      <img
        id={isVoiceRecognitionOn ? "voice-recognition-on-image" : "voice-recognition-off-image"}
        src={isVoiceRecognitionOn ? "https://64.media.tumblr.com/a31af09dcd8d32085c51ed9f031d6734/83256c39e34d47c1-92/s500x750/9dba8b8fd636260219646ba165953608ca412e68.pnj" : "https://64.media.tumblr.com/fe5f443c5f5b32ce3ed0416d4f20bbb7/1c9f50e5858cb637-46/s500x750/e90e75d5718dbef627274f43acc8bd6aada1b36e.pnj"}
        alt={isVoiceRecognitionOn ? "voice recognition on graphic" : "voice recognition off graphic"}
        onClick={toggleVoiceRecognition}
        onMouseEnter={(e) => e.currentTarget.classList.add('hover')}
        onMouseLeave={(e) => e.currentTarget.classList.remove('hover')}
      />
      <label className="vr-tool-label">
        {isVoiceRecognitionOn ? "VOICE RECOGNITION IS TURNED ON" : "VOICE RECOGNITION IS TURNED OFF"}
      </label>
    </div>
  );
}

export default VoiceRecognition;