import React from "react";
import { useState } from "react";
import "./style.scss";
import Mask from "../../../assets/img/Mask.png";
import { useHistory } from "react-router-dom";

export default function CardArtigo() {
  const [counter, setCounter] = useState(0);

  const history = useHistory();

  
  return (
    <div className="card-artigo" onClick={() => history.push('/artigos-interno')}>
      <div className="title-qtd ">
        <img src={Mask}/>
        <h5 className="heading-06">Lorem ipsum dolor sit</h5>
        <p>Sagittis vitae et leo duis ut diam quam malesuada fames ac turpis.</p>
      </div>
    </div>
  );
}
