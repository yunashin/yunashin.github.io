import AriaLogo from "../AriaLogo.png";

const MenuBar = () => {
  return (
    <header>
      <div className="menu-bar">
        <div className="menu-bar-item-logo">
          <a href="/">
            <img
              src={AriaLogo}
              alt="aria"
              className="aria"
              loading="lazy"
            />{" "}
          </a>
        </div>
        <div className="menu-bar-item-container">
          <div className="menu-bar-item">
            <a href="/projects">projects</a>
          </div>
          <div className="menu-bar-item">
            <a href="/lifestyle">lifestyle</a>
          </div>
        </div>
        <div className="menu-bar-item-logo"></div>
      </div>
    </header>
  );
};

export default MenuBar;
