import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import classes from "./CardHeader.module.css";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { ReactComponent as Banner } from "../../images/Banner.svg";
import StarIcon from "@mui/icons-material/Star";

function CardHeader({
  name,
  session,
  review,
  originalPrice,
  discountPrice,
  category,
}) {
  const [discount, setDiscount] = useState();
  const [categoryStyle, setCategoryStyle] = useState();
  const [quarterCircleStyle, setQuarterCircleStyle] = useState();
  const [reviewStyle, setReviewStyle] = useState();
  const [stripStyle, setStripStyle] = useState();

  useEffect(() => {
    return setDiscount(Math.floor((discountPrice / originalPrice) * 100));
  }, [originalPrice, discountPrice]);

  useEffect(() => {
    if (category === "Communication") {
      setCategoryStyle(classes.communicationStyle);
      setQuarterCircleStyle(classes.communicationStyleSetQuarterCircleStyle);
      setReviewStyle(classes.communicationReview);
      setStripStyle("#1bd9ff");
    }
    if (category === "Visual Arts") {
      setCategoryStyle(classes.visualArtsStyle);
      setQuarterCircleStyle(classes.visualArtsStyleSetQuarterCircleStyle);
      setReviewStyle(classes.visualReview);
      setStripStyle("#9462ff");
    }
    if (category === "Music") {
      setCategoryStyle(classes.musicStyle);
      setQuarterCircleStyle(classes.musicStyleSetQuarterCircleStyle);
      setReviewStyle(classes.musicReview);
      setStripStyle("#f9b215");
    }
  }, []);

  return (
    <div className={`${categoryStyle}`}>
      <div className={classes.tagDiscount}>
        <div className={classes.tagContainer}>
          <Banner
            className={classes.tag}
            fill={stripStyle}
            style={{ position: "absolute" }}
          />
          <h3>{`${session} Sessions`}</h3>
        </div>
        <div className={`${quarterCircleStyle}`}>
          <h3>{`${discount}% off`}</h3>
        </div>
      </div>

      <h1>{name}</h1>
      <div className={`${reviewStyle}`}>
        <Box>
          <Rating
            name="read-only"
            value={review.split(";").slice(-1)[0]}
            emptyIcon={<StarIcon style={{ color: "#fff" }} />}
            readOnly
          />
        </Box>
        <p>{`(${review.split(";").slice(-1)[0]} reviews)`}</p>
      </div>
    </div>
  );
}

export default CardHeader;
