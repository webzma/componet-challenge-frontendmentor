import React from "react";
import './Feature.css';

function Feauture(props) {
  return (
    <div className="Feature" style={props.bg}>
      <div>
        <img src={props.icon} className="Icon"/>
        <span className="FeatureName">{props.featureName}</span>
      </div>
      <span className="Porcent"><span id="Number">{props.number}</span>{props.porcent}</span>
    </div>
  );
}

export { Feauture };