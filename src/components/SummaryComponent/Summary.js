import React from "react";
import { Feauture } from "../Feature/Feature";
import { Button } from "../Button/Button";
import './Summary.css';
import icon1 from '../../assets/images/icon-reaction.svg';
import icon2 from '../../assets/images/icon-memory.svg';
import icon3 from '../../assets/images/icon-verbal.svg';
import icon4 from '../../assets/images/icon-visual.svg';

const bg1 =  { backgroundColor: 'rgba(255, 87, 87, .1)'};
const bg2 =  { backgroundColor: 'rgba(255, 176, 31, .1)'};
const bg3 =  { backgroundColor: 'rgba(0, 189, 145, .1)'};
const bg4 =  { backgroundColor: 'rgba(17, 37, 212, .1'};

function Summary() {
  return(
    <article className="Summary">
      <h3 className="Title">Summary</h3>
      <Feauture icon={icon1} featureName="Reaction" bg={bg1} number="80" porcent=" / 100" />
      <Feauture icon={icon2} featureName="Memory"   bg={bg2} number="92" porcent=" / 100" />
      <Feauture icon={icon3} featureName="Verbal"   bg={bg3} number="61" porcent=" / 100" />
      <Feauture icon={icon4} featureName="Visual"   bg={bg4} number="72" porcent=" / 100" />
      <Button />
    </article>
  );
}

export { Summary };