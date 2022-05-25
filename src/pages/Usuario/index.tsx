import FormUsuario from "../../containers/FormUsuario";
import "./style.scss";

const Usuario = () => {
  return (
    <div className="container-fluid">
      <div className="confirmation-content-usuario">
        <h2>USUÁRIO</h2>
        <FormUsuario />
      </div>
    </div>
  );
};

export default Usuario;
