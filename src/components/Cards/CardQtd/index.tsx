import React from "react";
import { useState } from "react";
import "./style.scss";

export default function CardQtd() {
  const [counter, setCounter] = useState(0);
  const [disableBtn, setDisableBtn] = useState(true);

  
  return (
    <div className="card-quantidade">
      <div className="title-qtd-01">
        <h5 className="heading-06 text-dark-green">Quantidade</h5>
        <p className="m-0 text-lightGray">1 AT = 1 Tonelada de CO2</p>
      </div>

      <div className="counter">
        <button
          disabled={counter === 0 || disableBtn}
          onClick={() => setCounter(counter - 1)}
        >
            <i className="material-icons">minimize</i>
          
        </button>

        <p className="p-02">{counter}</p>

        <button
          className="material-icons"
          disabled={disableBtn}
          onClick={() => setCounter(counter + 1)}
        >
          add
        </button>
      </div>
    </div>
  );
}
