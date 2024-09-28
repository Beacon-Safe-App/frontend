import React from 'react';
import { Link } from 'react-router-dom';
import './css/Tools.css';

function Aftercare() {
  return (
    <div>
      <div id="aftercare-image-container">
        <img
          id="aftercare-image"
          src="https://64.media.tumblr.com/282acc941483affb05df77a1a579cf5d/706ebadc41efb6aa-7e/s500x750/592d4ce6668d9ae491140ec0743500e0f68c348a.pnj"
          alt="aftercare graphic"
        />
      </div>
      <p className="tool-p">
        Here, you can discover what rights you have as a victim of a crime based
        on the jurisdiction the crime was committed in.
        <br></br>
        <br></br>
        You can also browse our list of available resources and victim-focused
        organizations, including support and advocacy groups in your
        community.
        <br></br>
        <br></br>
        Please use the tools below to search for rights and due process by crime
        type and location, browse resources, or track steps and progress related
        to your individual case.
      </p>
      <div id="aftercare-submenu-container">
        <div className="tool-image-container">
          <img
            className="aftercare-submenu-image"
            src="https://64.media.tumblr.com/882a0b1bc64bb2015a5de2bd6deab64c/54435b07c46fa88a-60/s500x750/760b706bbb6be26f60467caf37b1626087128014.pnj"
            alt="justice graphic"
          />
          <div className="tool-label">JUDICIAL</div>
        </div>
        <div className="tool-image-container">
          <img
            className="aftercare-submenu-image"
            src="https://64.media.tumblr.com/6bfa4c4a4f299e8ad8f72aeeded94d3a/573598edc97c31a9-38/s540x810/d39a1405141b8a5279abdfe63032ebde0a4fa166.pnj"
            alt="community graphic"
          />
          <div className="tool-label">COMMUNITY</div>
        </div>
        <div className="tool-image-container">
          <img
            className="aftercare-submenu-image"
            src="https://64.media.tumblr.com/95125fd07ae4892f344d4bfd78a4a942/51a0d67943d6d554-36/s540x810/5ec9345518e2829509462a396ba4feefae3f9022.pnj"
            alt="task list graphic"
          />
          <div className="tool-label">PERSONAL</div>
        </div>
      </div>
    </div>
  );
}

export default Aftercare;