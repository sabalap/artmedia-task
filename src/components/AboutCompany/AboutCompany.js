import aboutCompanyImg from "../../assets/about-company-img.png";
import aboutCompanyImgFrame from "../../assets/about-company-img-frame.png";
import classes from "./AboutCompany.module.css";

const AboutCompany = (props) => {
  return (
    <section className={classes["about-company"]} data-aos={props.anim}>
      <div className={`container ${classes.container}`}>
        <div className={classes["img-box"]}>
          <img src={aboutCompanyImg} alt="about company" />
          <img src={aboutCompanyImgFrame} alt="about company frame" />
        </div>
        <article className={classes["about-company-text"]}>
          <h1>About Company</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button>See More</button>
        </article>
      </div>
    </section>
  );
};
export default AboutCompany;
