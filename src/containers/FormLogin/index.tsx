import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as Yup from "yup";

import Button from "../../components/Button";
import Input from "../../components/Input";
import "./style.scss";
import { yupResolver } from "@hookform/resolvers/yup";

import FormLoginData from "../../types/FormLogin.interface";
import LoginService from "../../services/requests/login";
import LinkButton from "../../components/LinkButton";
import ButtonPassword from "../../components/ButtonPassword";
import InputPassword from "../../components/InputPassword";

const FormLogin = () => {
  const [valueForm, setValueForm] = useState({});
  const history = useHistory();

  const validationSchema = Yup.object().shape({
    login: Yup.string().required("Login é obrigatório"),
    password: Yup.string().required("Senha é obrigatório"),
  });

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormLoginData>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: FormLoginData) => {
    LoginService.login(data)
      .then(() => {
        return history.push("/home");
      })
      .catch(() => {
        return history.push("/home");
      });
  };

  const changeForm = (target: HTMLInputElement) => {
    setValueForm({ ...getValues(), [target.name]: target.value });
  };

  return (
    <form autoComplete="nope" className="align-center-form" onSubmit={handleSubmit(onSubmit)}>
      <h2>Acesse sua conta</h2>
      <p>Digite seus detalhes abaixo</p>

      <Input
        register={register("login")}
        error={errors.login?.message}
        name="login"
        type="text"
        label="Login"
        placeholder="meuLogin"
        onChange={(e) => changeForm(e.target)}
        autoComplete="off"

      />
      <LinkButton to="/esqueci-minha-senha" className="link text-right w-fill p-relative" style={{ marginBottom: "-20px", float: "right", display: "block" }}>Esqueci minha senha</LinkButton>
      <InputPassword
        register={register("password")}
        error={errors.password?.message}
        className="color-input"
        name="password"
        label="Senha"
        placeholder="•••••••••••••••••••••••"
        onChange={(e) => changeForm(e.target)}
        autoComplete="off"

      />

      <Button
        type="submit"
        className="md btn"
        disabled={!validationSchema.isValid(valueForm)}
      >
        Entrar
      </Button>
    </form>
  );
};

export default FormLogin;
