import React, { useEffect, useState } from "react";
import classes from "./AgeCategory.module.css";

function AgeCategory({ minAge, maxAge, id, onClick, isActive, category }) {
  const [currAge, setCurrAge] = useState(0);

  function clickHandler() {
    onClick(id);
  }

  return (
    <div className={classes.container} onClick={clickHandler}>
      <div className={!isActive ? "tabContainer" : "tabActiveContainer"}>
        <h1>{currAge < id ? "Senior" : "Junior"}</h1>
        <p>{`(Age ${minAge}-${maxAge})`}</p>
      </div>
    </div>
  );
}

export default AgeCategory;
