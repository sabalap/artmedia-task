import classes from "./Footer.module.css";
import footerLogo from "../../assets/footer-logo.svg";
import instagramIcon from "../../assets/instagram-icon.svg";
import facebookIcon from "../../assets/facebook-icon.svg";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className={classes["logo-rights-container"]}>
          <a href="#home" className={classes["footer-logo-container"]}>
            <img src={footerLogo} alt="footer company logo" />
            <h3>Company Name</h3>
          </a>
          <p>© 2023 All Rights Reserved</p>
        </div>
        <nav>
          <ul>
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
          <ul>
            <li>
              <a href="#instagram">
                <img src={instagramIcon} alt="Instagram icon" />
              </a>
            </li>
            <li>
              <a href="#facebook">
                <img src={facebookIcon} alt="Facebook icon" />
              </a>
            </li>
          </ul>
        </nav>
        <form>
          <div>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
          </div>
          <div className={classes["textarea-container"]}>
            <textarea
              id="textarea"
              placeholder="Text"
              cols="30"
              rows="10"
            ></textarea>
            <button>Send</button>
          </div>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
