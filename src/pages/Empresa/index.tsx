import FormEmpresa from "../../containers/FormEmpresa";
import "./style.scss";

const Empresa = () => {
  return (
    <div className="container-fluid">
      <div className="confirmation-content-empresa">
        <h2>EMPRESA</h2>
        <FormEmpresa />
      </div>
    </div>
  );
};

export default Empresa;
