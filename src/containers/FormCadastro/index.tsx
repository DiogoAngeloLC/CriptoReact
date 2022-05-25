import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Checkbox from "../../components/Checkbox";
import "./style.scss";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import FormCadastroData from "../../types/FormCadastro.interface";
import CadastroService from "../../services/requests/cadastro";
import Select from "../../components/Select";
import Drawer from "../../components/SliderModal";
import FormTemosECondicoes from "../DrawerInformations/FormTermosECondicoes";
import FormPoliticaDePrivacidade from "../DrawerInformations/FormPoliticaDePrivacidade";
import MaskedInput from "../../components/MaskedInput";
import FormVerdeAzul from "../DrawerInformations/FormVerdeAzul";
import InputPassword from "../../components/InputPassword";

const FormCadastro = () => {
  const [valueForm, setValueForm] = useState({});
  const [openDrawerTermos, setOpenDrawerTermos] = useState(false);
  const [openDrawerPrivacidade, setOpenDrawerPrivacidade] = useState(false);

  const [empresaValue, setEmpresaValue] = useState(false);
  const history = useHistory();

  const validationSchema = Yup.object().shape({
    nome: Yup.string().required("Nome é obrigatório"),
    email: Yup.string()
      .required("Email é obrigatório")
      .email("E-mail inválido"),
    nomeEmpresa: Yup.string().required("Nome é obrigatório"),
    password: Yup.string().required("Senha é obrigatório"),
    telefone: Yup.string().required("Telefone é obrigatório"),
    confirmPassword: Yup.string().required("Confirmar senha é obrigatório"),
    ondeOuviu: Yup.string().required("Aonde você ouviu falar da Abundance Brasil? é obrigatório"),
  });

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormCadastroData>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: FormCadastroData) => {
    CadastroService.create(data)
      .then(() => {
        return history.push("/confirmacao");
      })
      .catch(() => {
        return history.push("/confirmacao");
      });
  };

  const changeForm = (target: HTMLInputElement) => {
    setValueForm({ ...getValues(), [target.name]: target.value });
  };

  const validateEmpresa = () => {
    setEmpresaValue(!empresaValue);
  };

  const handleOpenDrawerTermos = () => {
    setOpenDrawerTermos(true);
  };

  const handleOpenDrawerPrivacidade = () => {
    setOpenDrawerPrivacidade(true);
  };

  useEffect(() => {
    if (openDrawerTermos || openDrawerPrivacidade) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [openDrawerTermos, openDrawerPrivacidade]);


  return (
    <form className="align-center-form" onSubmit={handleSubmit(onSubmit)}>
      <h2>Crie sua conta</h2>
      <p>Digite seus detalhes abaixo</p>
      <Input
        register={register("nome")}
        error={errors.nome?.message}
        name="nome"
        type="text"
        label="Nome"
        placeholder="Seu Nome"
        onChange={(e) => changeForm(e.target)}
      />
      <Input
        register={register("email")}
        error={errors.email?.message}
        name="email"
        label="E-mail"
        type="email"
        placeholder="Seu E-mail"
        onChange={(e) => changeForm(e.target)}
      />
      <MaskedInput
        register={register("telefone")}
        error={errors.telefone?.message}
        name="telefone"
        type="text"
        label="Telefone"
        placeholder="(XX) XXXXX-XXXX"
        onChange={(e: { target: HTMLInputElement; }) => changeForm(e.target)}
        mask="(99) 99999-9999" maskChar={null}
      />
      <Input
        register={register("nomeEmpresa")}
        error={errors.nomeEmpresa?.message}
        name="nomeEmpresa"
        type="text"
        label="Nome da sua Empresa"
        placeholder="Nome da Empresa"
        onChange={(e) => changeForm(e.target)}
      />

      <Select
        register={register("ondeOuviu")}
        error={errors.ondeOuviu?.message}
        name="ondeOuviu"
        label="Aonde você ouviu falar da Abundance Brasil?"
        onChange={(e) => changeForm(e.target)}

      >
        <option value="google">Google</option>
        <option value="facebook">Facebook</option>

      </Select>


      <InputPassword
        register={register("password")}
        error={errors.password?.message}
        name="password"
        label="Senha"
        placeholder="•••••••••••••••••••••••"
        onChange={(e) => changeForm(e.target)}
      />

      <InputPassword
        register={register("confirmPassword")}
        error={errors.password?.message}
        name="confirmPassword"
        label="Confirmar Senha"
        placeholder="•••••••••••••••••••••••"
        onChange={(e) => changeForm(e.target)}
      />

      <label className="mb-5 label">
        Ao clicar neste botão, você concorda com nossa <br />
        <div className="button-container">
          <Button type="button" className="link" onClick={handleOpenDrawerPrivacidade} >Política de Privacidade</Button>&#160; e­ &#160;<Button type="button" className="link" onClick={handleOpenDrawerTermos}>Termos e Confições</Button>
        </div>
      </label>

      <Drawer opened={openDrawerPrivacidade} onCLose={() => setOpenDrawerPrivacidade(false)} title="Política de Privacidade">
        <FormPoliticaDePrivacidade />
      </Drawer>

      <Drawer opened={openDrawerTermos} onCLose={() => setOpenDrawerTermos(false)} title="Termos e Condições">
        <FormTemosECondicoes />
      </Drawer>


      <Checkbox
        register={register("atualizarInfo")}
        error={errors.atualizarInfo?.message}
        name="atualizarInfo"
        label="Envie-me atualizações, informações do produto e mercado ESG."
      />

      <Button
        type="submit"
        className="md btn"
        disabled={!validationSchema.isValidSync(valueForm) || empresaValue}
      >
        Criar
      </Button>
    </form>
  );
};

export default FormCadastro;
