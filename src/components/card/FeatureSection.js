import classes from "./FeatureSection.module.css";
import Activities from "../../images/Activities.svg";
import Certificate from "../../images/Certificate.svg";
import Games from "../../images/Games.svg";

function FeatureSection({ game, certificate }) {
  return (
    <div className={classes.featureSection}>
      <div className={classes.features}>
        <div className={classes.feature}>
          <img src={Activities} />
          <h3>8 Activities</h3>
        </div>
        <div className={classes.feature}>
          <img src={Games} />
          <h3>{`${game} Games`}</h3>
        </div>
        <div className={classes.feature}>
          <img src={Certificate} />
          <h3>{`${certificate} Certificate`}</h3>
        </div>
      </div>
    </div>
  );
}

export default FeatureSection;
