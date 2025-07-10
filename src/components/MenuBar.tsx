import { devModeOn } from '../constants/testingConstants';
import AriaLogo from "../AriaLogo.png"

const MenuBar = () => {

  return (
    <header>
      {devModeOn && <div style={{ alignSelf: 'flex-end', color: 'red', fontWeight: 'bold', margin: '50px 20px 0px 0px' }}>dev mode on</div>}
      <div className="menu-bar">
        <div className="menu-bar-item-logo">
          <a href="/"><img src={AriaLogo} alt="aria" className='aria' loading="lazy" /> </a>
        </div>
        <div className="menu-bar-item-container">
          <div className="menu-bar-item">
            <a href="/projects">projects</a>
          </div>
          <div className="menu-bar-item">
            <a href="/lifestyle">lifestyle</a>
          </div>
          {devModeOn && <div className="menu-bar-item">
            <a href="/blog-post-generator" style={{ color: 'orange' }}>blog post generator</a>
          </div>}
        </div>
        <div className="menu-bar-item-logo"></div>
      </div>
    </header>
  );
};

export default MenuBar;