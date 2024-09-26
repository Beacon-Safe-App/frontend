import { Link } from 'react-router-dom';
import { useState } from 'react';
import './NavBar.css';

const navItems = [
    { id: 1, icon: 'https://64.media.tumblr.com/17570db4003542780ab7227db6cb3e14/73f2460d8f911c96-c7/s540x810/5b086f3f65522d88ba6bccd0e5c50d984c0c8364.pnj', route: '/worldview' },
    { id: 2, icon: 'https://64.media.tumblr.com/da2f71d1af4db8bde6e60ce00de16d34/dbf354eb122fb29c-88/s540x810/56f50029381ea163adf76d614b397c06f1d8db23.pnj', route: '/bystanderreport' },
    { id: 3, icon: 'https://64.media.tumblr.com/55491742981813fdd4dd3d89b7ba4a75/e7953d1f1c28ed66-44/s540x810/0342d9d59789edb568f14a523719fa769ebb3fb2.pnj', route: '/stalkerlog' },
    { id: 4, icon: 'https://64.media.tumblr.com/63bbf0ebd3be3d4b985045719cdfe48f/bd801710c2b221c7-34/s540x810/0cd54e0b04ab431c1259c0d2bf7a6945341e1d36.pnj', route: '/fakecall' },
    { id: 5, icon: 'https://64.media.tumblr.com/db94fc11e871947863c7ddbec3f102f7/f01775f8b0d426fd-70/s540x810/ac11ab4db2e22e330e27230a16dc09e7b139dd39.pnj', route: '/mainmenu' },
    { id: 6, icon: 'https://64.media.tumblr.com/e2ee6b2156a4cc4d83828fe9a7739c14/8f27f598f01e6768-b1/s540x810/08ddf1754dd47e1e318d34e366107623e0d97e6c.pnj', route: '/aftercare' },
    { id: 7, icon: 'https://64.media.tumblr.com/d860b2ddd9eefebc77c25afc2be7e6df/3ac6fb9510c32e59-ed/s540x810/8de11f009883735dbdf62832f3244755b9893d8b.pnj', route: '/walkwithme' },
    { id: 8, icon: 'https://64.media.tumblr.com/ccb436886e444071cdf361b9ed0939d0/16c4e6698b3ae15e-43/s540x810/45f278c21dcc58f559b144477a6844f226a6ad1e.pnj', route: '/voiceactivation' },
    { id: 9, icon: 'https://64.media.tumblr.com/8bfc7162ba8e2cc5bae584cea40c5071/9837fef34ebdbd6e-f4/s540x810/f1f80c5f61d631371d549a168f17c10391032e5b.pnj', route: '/historylog' },
  ];
  
  function TopNavBar() {
    return (
      <nav className="top-nav-bar">
        <div className="nav-scroll-container">
          {navItems.map(item => (
            <Link key={item.id} to={item.route}>
              <img src={item.icon} alt={`Icon ${item.id}`} className="nav-icon" />
            </Link>
          ))}
        </div>
      </nav>
    );
  }
  
  export default TopNavBar;