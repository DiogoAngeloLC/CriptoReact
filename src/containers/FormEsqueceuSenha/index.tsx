import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as Yup from "yup";

import Button from "../../components/Button";
import Input from "../../components/Input";
import "./style.scss";
import { yupResolver } from "@hookform/resolvers/yup";

import FormEsqueceuSenhaData from "../../types/FormEsqueceuSenha.interface";
import LoginService from "../../services/requests/login";
import LinkButton from "../../components/LinkButton";

const FormLogin = () => {
  const [valueForm, setValueForm] = useState({});
  const history = useHistory();

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("E-mail é obrigatório").email("E-mail inválido")
  });

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormEsqueceuSenhaData>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: FormEsqueceuSenhaData) => {
    LoginService.esqueceuSenha(data)
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

  return (
    <form className="align-center-form" onSubmit={handleSubmit(onSubmit)}>
      <h2>Esqueceu sua senha?</h2>
      <p>Enviaremos um e-mail com as instruções para criar uma nova senha</p>

      <Input
        register={register("email")}
        error={errors.email?.message}
        name="email"
        type="email"
        label="E-mail"
        placeholder="meuemail@empresa.com.br"
        onChange={(e) => changeForm(e.target)}
      />
      <p>
        Lembrou da sua senha?{" "}
        <LinkButton to="/login" className="link " style={{display: 'inline-block'}}>
          Faça o login
        </LinkButton>
      </p>


      <Button
        type="submit"
        className="md btn"
        disabled={!validationSchema.isValidSync(valueForm)}
      >
        Enviar
      </Button>
    </form>
  );
};

export default FormLogin;
