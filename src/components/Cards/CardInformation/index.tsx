import React from "react";
import Budget from "../../Budget";
import Button from "../../Button";
import "./style.scss";

interface PropsContent {
  title?: string;
  paragraph?: string;
  img?: any;
  subtitle?: string;
  paragraph02?: string;
  button?: string;
  budget?: string;
  className?: string;
}

export default function CardInformation (props: PropsContent) {
  return (
    <div className="card-information">
      <div className="main-title flex justify-space-between">
      <div>
      <h5 className="subheading text-semibold text-dark-green mb-1">{props.title}</h5>
      <div className="cardWithBudget">
      <p className="p-01 text-lightGray ">{props.paragraph}</p>
       {props.budget && <Budget value={props.budget}></Budget>}
      </div>
      </div>    
        <img className="img-card " src={props.img} alt="" />
      </div>

      <div className="card-subtitle">
        <h5 className="text-semibold text-purple mb-2 heading-02">{props.subtitle}</h5>
        <p className="text-lightGray ">{props.paragraph02}</p>
      </div>
      {props.button && <Button className="button-card">{props.button}</Button>}
    </div>
  );
}
