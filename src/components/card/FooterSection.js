import { useState } from "react";
import classes from "./FooterSection.module.css";

function FooterSection({ originalPrice, discountPrice, session }) {
  return (
    <div className={classes.container}>
      <div className={classes.amountSection}>
        <h3>{`₹ ${discountPrice}`}</h3>
        <p>
          {`₹ ${Math.floor(discountPrice / session)}`} <span>per class</span>
        </p>
      </div>
      <h6>{`₹ ${originalPrice}`}</h6>
      <p className={classes.footerNote}>
        We'll schedule the slots as per your convenience
      </p>
    </div>
  );
}

export default FooterSection;
