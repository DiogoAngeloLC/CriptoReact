import Button from "../../../components/Button";
import Input from "../../../components/Input";
import "./style.scss";

const FormIndique = () => {

  return (
    <div className="align-modal">
      <p className="mb-8 text-lightGray ">
        Sapien et ligula ullamcorper malesuada proin libero nunc. Porttitor massa id neque aliquam vestibulum morbi. Nibh sit amet commodo nulla facilisi nullam. Pretium quam vulputate dignissim suspendiss.
      </p>
      <div className="row mb-2">
        <div className="md-6">
          <Input type="text" placeholder="Nome" label="Nome" />
        </div>
        <div className="md-6">
          <Input type="Email" placeholder="Email" label="Email"/>
        </div>
      </div>
      <Button className="mb-20 btn">Indicar</Button>
    </div>
  );
};

export default FormIndique;
