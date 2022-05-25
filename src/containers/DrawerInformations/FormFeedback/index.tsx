import Button from "../../../components/Button";
import Select from "../../../components/Select";
import Textarea from "../../../components/Textarea";
import "./style.scss";

const FormFeedback = () => {

  return (
    <div className="align-modal">
      <p className="mb-8 text-lightGray ">
        Sapien et ligula ullamcorper malesuada proin libero nunc. Porttitor massa id neque aliquam vestibulum morbi. Nibh sit amet commodo nulla facilisi nullam. Pretium quam vulputate dignissim suspendiss.
      </p>
        <div>
          <Select placeholder="Assunto" label="Assunto" />
        </div>
        <div>
          <Textarea type="Email" placeholder="Mensagem" label="Mensagem"/>
        </div>
      <Button className="mb-20 btn">Indicar</Button>
    </div>
  );
};

export default FormFeedback;
