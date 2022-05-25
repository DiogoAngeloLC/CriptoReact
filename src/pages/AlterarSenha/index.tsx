import FormAlterarSenha from "../../containers/FormAlterarSenha";
import "./style.scss";

const AlterarSenha = () => {
  return (
    <div className="container-fluid">
      <div className="confirmation-content-alterar-senha">
        <h2>ALTERAR SENHA</h2>
        <FormAlterarSenha />
      </div>
    </div>
  );
};

export default AlterarSenha;
