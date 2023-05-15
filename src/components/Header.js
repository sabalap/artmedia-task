import { useState } from "react";
import logo from "../assets/logo.svg";
const Header = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  const body = document.querySelector("body");
  if (active) {
    body.classList.add("hidden");
  } else {
    body.classList.remove("hidden");
  }
  return (
    <header>
      <div className="container header-container">
        <nav>
          <a href="#home" className="logo-container">
            <img className="logo" src={logo} alt="Company Logo" />
            <h3 className="logo-text">Company Name</h3>
          </a>
          <div className={active ? "nav-menu active" : "nav-menu"}>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
            <input placeholder="Search keyword ..." type="search" />
          </div>
          <div
            className={active ? "hamburger active" : "hamburger"}
            onClick={handleClick}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </div>
      <div className="header-img-container">
        <div className="container">
          <div className="header-text-container">
            <h1>Company's First Service Title</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
            <button>See More</button>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
