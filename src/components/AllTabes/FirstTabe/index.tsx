import React, { useState } from "react";
import PhotoTab from "../../../assets/img/photoTab.png"
import FormVerdeAzul from "../../../containers/DrawerInformations/FormVerdeAzul";
import Button from "../../Button";
import DrawerVA from "../../SliderModalVA";
import "./style.scss"

interface PropsFirstTabe {
  className?: string;
  link?: string;
}


export default function FirstTabe(props: PropsFirstTabe) {
  const [showModal, setShowModal] = useState(false)
  return (
    <div className={` ${props.className}`} >
      
      <img src={PhotoTab} alt="" />
    <div className="contentTab">
      <p className="caption mb-1 text-lightGray ">verdeazul</p>
      <h5 className="text-normal heading-05 text-dark-green mb-1">Projeto 1 milhão de árvores</h5>
      <p className="mb-1 text-lightGray ">Invista no reflorestamento e na preservação do meio ambiente ao 
        adquirir o seu token e conseguir acompanhar o desenvolvimento da sua árvore.
      </p>
      <Button className="p-01 text-purple sm" onClick={() => setShowModal(true)}>Saiba mais</Button>
    </div>


    <DrawerVA opened={showModal} onCLose={() => setShowModal(false)}>
        <FormVerdeAzul />
      </DrawerVA>
    </div>
  );
};
