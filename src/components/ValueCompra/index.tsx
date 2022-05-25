import "./style.scss";
import Button from "../Button";
import { useState } from "react";
import DrawerVA from "../SliderModalVA";
import FormConfirmacao from "../../containers/DrawerInformations/FormConfirmacao";


const ValueCompra = ( ) => {
    const [openModal, setOpenModal] = useState(false)
    return(
        <div className="total-compra">
          <p className="subheading text-semibold text-dark-green">Total: <span className="text-purple">R$ 0</span></p>
          <Button onClick={() => setOpenModal(true)} className="button-comprar btn" >Comprar</Button>
          <DrawerVA opened={openModal} onCLose={() => setOpenModal(false)}>
            <FormConfirmacao />
          </DrawerVA>
        </div>
    );
  }
  export default ValueCompra
  

