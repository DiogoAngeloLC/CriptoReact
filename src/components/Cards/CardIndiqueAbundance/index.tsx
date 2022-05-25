import React from "react";
import Button from "../../Button";
import "./style.scss";

export default function CardIndiqueAbundance() {
  return (
    <div className="card-indique-abundance">
      <span className="material-icons mb-2 text-gradient-default">mail_outline</span>
      <div className="title-container">
        <h3 className="text-bold p-01 text-dark-green mb-1">Indique a Abundance</h3>
        <p className="caption text-lightGray">Ajude a salvar o planeta.</p>
      </div>

      <form>
          <input type="text" placeholder="Nome" className="mb-2 w-fill"/>
          <input type="email" placeholder="E-mail" className="mb-4 w-fill"/>
          <Button disabled={true} className="sm w-fill text-bold btn" >Indicar</Button>
      </form>
    </div>
  );
}
