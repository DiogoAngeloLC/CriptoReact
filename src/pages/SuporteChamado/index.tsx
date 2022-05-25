import React, { useEffect, useState } from "react";
import "./style.scss";
import Button from "../../components/Button";
import { useHistory } from "react-router-dom";
import Select from "../../components/Select";
import Drawer from "../../components/SliderModal";
import FormPerguntasFrequentes from "../../containers/DrawerInformations/FormPerguntasFrequentes";
import TitleSubtitle from "../../components/Titles/TitleSubtitle";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import TitleHeaderActionIcon from "../../components/Titles/TitleHeaderActionIcon";
import MockData from "./mockData.json"

const SuporteChamado = () => {
  const [openDrawerPerguntas, setOpenDrawerPerguntas] = useState(false);
  const [openChamado, setOpenChamado] = useState(false);

  const history = useHistory();

  const goToSuport = () => {
    history.push("/suporte");
  };

  const handleOpenDrawerPerguntas = () => {
    setOpenDrawerPerguntas(true);
  };

  const handleOpenChamado = () => {
    setOpenChamado(true);
    if (openChamado) setOpenChamado(false);
  };

  const handleSubmitSupport = () => {
    setOpenChamado(false);
    alert("Ainda não implementado, mas submetido!");
  };

  useEffect(() => {
    if (openDrawerPerguntas) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [openDrawerPerguntas]);

  return (
    <div className="container-fluid">
      <div className="confirmation-content container-fluid">
        <TitleHeaderActionIcon title="SUPORTE" />
        <div className="chamados">
          <TitleSubtitle title="Chamados" subtitle="Você possui 2 chamados" />

          <div className="botaochamado">
            <Button type="submit" className="sm" onClick={handleOpenChamado} disabled={!openChamado ? false : true}>
              Novo chamado
            </Button>
          </div>
        </div>
        {openChamado ? (
          <>
            <div>
              <h1>Novo chamado</h1>
            </div>
            <div className="row">
              <div className="md-12">
                <Input
                  name="nome"
                  type="text"
                  label="Título"
                  placeholder="Título do chamado"
                />
                <Select name="ondeOuviu" label="Assunto">
                  <option value="google">Reclamação</option>
                </Select>
                <span className="label mb-2">Mensagem</span>
                <Textarea
                  id="textarea-suporte"
                  className="textarea-suporte"
                  type="text"
                ></Textarea>
                <div className="flex-div">
                  <Button type="submit" className="btn" onClick={handleOpenChamado}>
                    Cancelar
                  </Button>
                  <p className="p-txt">
                    Consulte nossas{" "}
                    <Button
                      type="button"
                      className="link button-alinhado"
                      onClick={handleOpenDrawerPerguntas}
                    >
                      Perguntas frequentes{" "}
                    </Button>{" "}
                    ou entre em contato com o suporte{" "}
                    <Button
                      type="button"
                      className="link button-alinhado"
                      onClick={goToSuport}
                    >
                      aqui
                    </Button>
                    .
                  </p>
                  <Button
                    type="submit"
                    className=" btn"
                    onClick={handleSubmitSupport}
                  >
                    Criar chamado
                  </Button>
                </div>
              </div>


            </div>
          </>
        ) : (
          ""
        )}

        <div className="container-table mt-9">
          <table>
            <tr className="text-lightGray">
              <th>ASSUNTO</th>
              <th>REFERÊNCIA</th>
              <th>DATA</th>
              <th>STATUS</th>
            </tr>

            {MockData.map(item => (
              <tr className="text-dark-green item-chamado" onClick={() => history.push(`/suporte/${item.id}`)}>
                <td><b>{item.assunto}</b></td>
                <td>{item.referencia}</td>
                <td>{item.createdAt}</td>
                <td className={`${item.status === "ABERTO" ? 'text-red' : 'text-green'} text-bold`}>
                  {item.status}
                </td>
              </tr>
            ))}

          </table>
        </div>
      </div>
      <Drawer
        opened={openDrawerPerguntas}
        onCLose={() => setOpenDrawerPerguntas(false)}
        title="Perguntas Frequentes"
      >
        <FormPerguntasFrequentes />
      </Drawer>
    </div>
  );
};
export default SuporteChamado;
