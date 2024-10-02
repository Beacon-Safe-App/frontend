import React, { useState } from "react";
import "./css/Tools.css";

function BystanderReport() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bystander-report-container">
      <div
        className="tool-image-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          id="bystander-report-image"
          src="https://64.media.tumblr.com/7c08c6d91008d5d18c726b9f7c6e518d/f01001ad88d72c09-0d/s500x750/5a1b9bae2e00bfa2ee9ef921b8b38550051bd1ae.pnj"
          alt="stalker log pin graphic"
        />
        {isHovered && <p className="tool-label">CREATE A FLAG</p>}
      </div>
      <p className="tool-p">
        Here, you can create a flag for any instance of threat or violence that
        you personally witness.<br></br>
        <br></br>Use the flag icon to log your current location with date, time,
        and the ability to assign the instance to add images and/or notes
        regarding the incident you have witnessed or are witnessing.
      </p>
    </div>
  );
}

export default BystanderReport;
