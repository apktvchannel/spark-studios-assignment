import classes from "./BodySection.module.css";

function BodySection({ pitch, description }) {
  return (
    <div className={classes.container}>
      <p className={classes.subtitle}>{pitch}</p>
      <div className={classes.discription}>
        <h3>Students will achieve:</h3>
        <ul>
          {description.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
      <a href="#" className={classes.textLink}>
        View Detailed lesson plan
      </a>
      <div className={classes.border}></div>
    </div>
  );
}

export default BodySection;
