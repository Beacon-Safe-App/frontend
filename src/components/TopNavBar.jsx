import { Link } from "react-router-dom";
import { useState } from "react";
import "./NavBar.css";

const navItems = [
  {
    id: 1,
    icon: "https://64.media.tumblr.com/17570db4003542780ab7227db6cb3e14/73f2460d8f911c96-c7/s540x810/5b086f3f65522d88ba6bccd0e5c50d984c0c8364.pnj",
    label: "WORLD VIEW",
    route: "/worldview",
  },
  {
    id: 2,
    icon: "https://64.media.tumblr.com/da2f71d1af4db8bde6e60ce00de16d34/dbf354eb122fb29c-88/s540x810/56f50029381ea163adf76d614b397c06f1d8db23.pnj",
    label: "MAP",
    route: "/map",
  },
  {
    id: 3,
    icon: "https://64.media.tumblr.com/55491742981813fdd4dd3d89b7ba4a75/e7953d1f1c28ed66-44/s540x810/0342d9d59789edb568f14a523719fa769ebb3fb2.pnj",
    label: "STALKER LOG",
    route: "/stalkerlog",
  },
  {
    id: 4,
    icon: "https://64.media.tumblr.com/63bbf0ebd3be3d4b985045719cdfe48f/bd801710c2b221c7-34/s540x810/0cd54e0b04ab431c1259c0d2bf7a6945341e1d36.pnj",
    label: "FAKE CALL",
    route: "/fakecall",
  },
  {
    id: 5,
    icon: "https://64.media.tumblr.com/db94fc11e871947863c7ddbec3f102f7/f01775f8b0d426fd-70/s540x810/ac11ab4db2e22e330e27230a16dc09e7b139dd39.pnj",
    label: "MORE INFORMATION",
    route: "/mainmenu",
  },
  {
    id: 6,
    icon: "https://64.media.tumblr.com/e2ee6b2156a4cc4d83828fe9a7739c14/8f27f598f01e6768-b1/s540x810/08ddf1754dd47e1e318d34e366107623e0d97e6c.pnj",
    label: "AFTERCARE",
    route: "/aftercare",
  },
  {
    id: 7,
    icon: "https://64.media.tumblr.com/d860b2ddd9eefebc77c25afc2be7e6df/3ac6fb9510c32e59-ed/s540x810/8de11f009883735dbdf62832f3244755b9893d8b.pnj",
    label: "TIMER",
    route: "/walkwithme",
  },
  {
    id: 8,
    icon: "https://64.media.tumblr.com/ccb436886e444071cdf361b9ed0939d0/16c4e6698b3ae15e-43/s540x810/45f278c21dcc58f559b144477a6844f226a6ad1e.pnj",
    label: "VOICE RECOGNITION",
    route: "/voicerecognition",
  },
  {
    id: 9,
    icon: "https://64.media.tumblr.com/eaf3e5ad1b9062ee91a008c7c59358e3/1872fe866e485be2-72/s1280x1920/ae5dd6cdb29a62c1e89f1f2469777888d1110247.pnj",
    label: "BYSTANDER REPORT",
    route: "/bystanderreport",
  },
];

const TopNavBar = () => {
  const [isMainMenuOpen, setIsMainMenuOpen] = useState(false);

  const handleMainMenuClick = () => {
    setIsMainMenuOpen(!isMainMenuOpen);
  };

  return (
    <div className="top-navbar">
      <div className="top-scrollable-nav">
        {navItems.map((item) => {
          if (item.id === 5) {
            return (
              <div key={item.id} className="mainmenu-container">
                <img
                  src={item.icon}
                  alt={item.label}
                  className="top-nav-icon"
                  onClick={handleMainMenuClick}
                />
                {isMainMenuOpen && (
                  <div className="mainmenu-submenu">
                    <Link to="/profile">PROFILE</Link>
                    <Link to="/preferences">PREFERENCES</Link>
                    <Link to="/howto">HOW-TO</Link>
                    <Link to="/about">ABOUT</Link>
                    <Link to="/historylog">HISTORY LOG</Link>
                    <Link to="/privacypolicy">PRIVACY</Link>
                    <Link to="/termsandconditions">TERMS</Link>
                    <Link to="/logout">LOGOUT</Link>
                  </div>
                )}
              </div>
            );
          }
          return (
            <Link key={item.id} to={item.route} className="nav-item">
              <img src={item.icon} alt={item.label} className="top-nav-icon" />
              <span className="nav-label">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TopNavBar;