import classes from "./Services.module.css";
import serviceImg1 from "../../assets/service-name1.svg";
import serviceImg2 from "../../assets/service-name2.svg";
import serviceImg3 from "../../assets/service-name3.svg";

const Services = (props) => {
  return (
    <section data-aos={props.anim}>
      <div className="container">
        <div className={classes["services-container"]}>
          <h1>Services</h1>
          <div className={classes.services}>
            <div className={classes.service}>
              <img src={serviceImg1} alt="service1 icon" />
              <h2>Service Name</h2>
            </div>
            <div className={classes.service}>
              <img src={serviceImg2} alt="service2 icon" />
              <h2>Service Name</h2>
            </div>
            <div className={classes.service}>
              <img src={serviceImg3} alt="service3 icon" />
              <h2>Service Name</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Services;
