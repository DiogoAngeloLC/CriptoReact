import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import RadioBox from "../../components/RadioBox";
import Checkbox from "../../components/Checkbox";
import "./style.scss";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import FormCadastroBetaData from "../../types/FormCadastroBeta.interface";
import CadastroService from "../../services/requests/cadastro";

const FormCadastroBeta = () => {
  const [valueForm, setValueForm] = useState({});
  const [empresaValue, setEmpresaValue] = useState(false);
  const history = useHistory();

  const validationSchema = Yup.object().shape({
    nome: Yup.string().required("Nome é obrigatório"),
    email: Yup.string()
      .required("Email é obrigatório")
      .email("E-mail inválido"),
    nomeEmpresa: Yup.string().required("Nome é obrigatório"),
  });

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormCadastroBetaData>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: FormCadastroBetaData) => {
    CadastroService.createBeta(data)
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

  return (
    <form className="align-center-form" onSubmit={handleSubmit(onSubmit)}>
      <h2>Convite para Beta</h2>
      <p>
        Preencha os campos do formulário para receber o seu acesso no lançamento
        do Portal ESG.
      </p>
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
      <Input
        register={register("nomeEmpresa")}
        error={errors.nomeEmpresa?.message}
        name="nomeEmpresa"
        type="text"
        label="Empresa"
        placeholder="Nome da Empresa"
        onChange={(e) => changeForm(e.target)}
      />

      {empresaValue && (
        <div className="alert-field">
          Convite apenas para Empresas neste momento
        </div>
      )}

      <Checkbox
        register={register("possuiEmpresa")}
        error={errors.possuiEmpresa?.message}
        name="possuiEmpresa"
        onChange={() => validateEmpresa()}
        label="Não possuo empresa ou sou responsável pela empresa aonde trabalho"
      />

      <div className="group-radiobox">
        <h3>O que você mais espera no Portal ESG?</h3>

        <RadioBox
          register={register("esperaPortal")}
          error={errors.esperaPortal?.message}
          name="esperaPortal"
          value="ESG Tokens para compensação de carbono."
          label="ESG Tokens para compensação de carbono."
        />

        <RadioBox
          register={register("esperaPortal")}
          error={errors.esperaPortal?.message}
          name="esperaPortal"
          value="Diagnóstico ESG gratuito e descomplicado."
          label="Diagnóstico ESG gratuito e descomplicado."
        />

        <RadioBox
          register={register("esperaPortal")}
          error={errors.esperaPortal?.message}
          name="esperaPortal"
          value="Ecossistema de produtos e serviços para elevar o seu ESG."
          label="Ecossistema de produtos e serviços para elevar o seu ESG."
        />
      </div>

      <hr className="separate-content" />

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
        Cadastrar
      </Button>
    </form>
  );
};

export default FormCadastroBeta;
