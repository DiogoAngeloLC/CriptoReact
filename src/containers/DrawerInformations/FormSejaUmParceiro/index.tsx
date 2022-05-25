import Button from "../../../components/Button";
import Checkbox from "../../../components/Checkbox";
import "./style.scss";

const FormSejaUmParceiro = () => {

  return (
    <div className="align-modal">
      <p className="mb-8 text-lightGray ">
        Este formulário é exclusivo para profissionais que desejam fazer parte do movimento de transformação ESG da Abundance.
        Caso você seja uma empresa, entre em contato conosco por <Button type="button" className="link button-contato-conosco"> aqui</Button>.
      </p>

      <h3 className="text-dark-green mb-8">Quais são os principais motivos que te fizeram querer ser um Parceiro Abundante?</h3>

      <div className="row">
        <div className="md-6">
          <Checkbox label="Ser a minha principal fonte de renda" />
          <Checkbox label="Ter uma fonte de renda extra" />
          <Checkbox label="Estar em uma empresa com um propósito forte e alinhado com o meu" />
          <Checkbox label="Não me sinto apreciado na minha empresa atualmente" />
        </div>
        <div className="md-6">
          <Checkbox label="Estou entediado e não me sinto desafiado no meu trabalho atual" />
          <Checkbox label="Procuro um trabalho com maior flexibilidade e que seja no modelo híbrido " />
          <Checkbox label="A cultura da minha empresa atual não está alinhada com o meu propósito e meus objetivos pessoais" />
          <Checkbox label="Não estou satisfeito com a minha liderança" />
        </div>
      </div>

      <h3 className="text-dark-green mb-8">Qual é a sua principal habilidade que poderia agregar para a Abundance?</h3>
      <div className="row mb-2">
        <div className="md-6">
          <Checkbox label="Designer (UX/UI/Motion)" />
          <Checkbox label="Consultor(a) de Desenvolvimento de Negócios" />
          <Checkbox label="Engenheiro de Software" />
          <Checkbox label="Arquiteto de Software" />
          <Checkbox label="Analista de Dados" />
          <Checkbox label="Gestor de tráfego" />
          <Checkbox label="Produtor de Conteúdo" />
          <Checkbox label="Copywriter" />
          <Checkbox label="Consultor de Vendas" />
        </div>
        <div className="md-6">
          <Checkbox label="Consultor Growth MKT" />
          <Checkbox label="Consultor ESG" />
          <Checkbox label="Scrum Master" />
          <Checkbox label="Especialista em M&A" />
          <Checkbox label="Consultor Financeiro (Valuation, M&A)" />
          <Checkbox label="Customer Experience Architect (CX)" />
          <Checkbox label="Conselheiro/professor/mentor para Educação de Abundância" />
          <Checkbox label="Conselheiro/professor/mentor para Saúde em Abundância" />
          <Checkbox label="Conselheiro/professor/mentor para Mentalidade Abundante" />
        </div>
      </div>

      <Button className="mb-20 btn">Enviar</Button>
    </div>
  );
};

export default FormSejaUmParceiro;
