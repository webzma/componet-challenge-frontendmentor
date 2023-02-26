import React from "react";
import { ResultCircle } from "./ResultCircle";
import './ResultStyle.css';

function Result() {
  return(
    <article className="Result">
      <h3 className="Title">Your Result</h3>
      <ResultCircle />
      <p className="GreatText">Great</p>
      <p className="TextResult">Your scorer higher than 65% of the people who have taken these tests.</p>
    </article>
  );
}

export{ Result };