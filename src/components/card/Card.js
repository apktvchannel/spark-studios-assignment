import React, { useState, useEffect } from "react";
import classes from "./Card.module.css";
import CardHeader from "./CardHeader";
import BodySection from "./BodySection";
import FooterSection from "./FooterSection";
import FeatureSection from "./FeatureSection";

function Card({
  name,
  session,
  review,
  pitch,
  description,
  originalPrice,
  discountPrice,
  game,
  certificate,
  category,
}) {
  const [containerStyle, setContainerStyle] = useState();

  useEffect(() => {
    if (category === "Communication") {
      setContainerStyle(classes.commStlye);
    }
    if (category === "Visual Arts") {
      setContainerStyle(classes.visStyle);
    }
    if (category === "Music") {
      setContainerStyle(classes.musStyle);
    }
  }, []);

  return (
    <div className={`${containerStyle}`}>
      <CardHeader
        name={name}
        session={session}
        review={review}
        originalPrice={originalPrice}
        discountPrice={discountPrice}
        category={category}
      />
      <BodySection pitch={pitch} description={description} />
      <FooterSection
        session={session}
        originalPrice={originalPrice}
        discountPrice={discountPrice}
      />
      <FeatureSection game={game} certificate={certificate} />
      <div className={classes.buttonSection}>
        <button className={classes.button}>Buy Course</button>
      </div>
    </div>
  );
}

export default Card;
