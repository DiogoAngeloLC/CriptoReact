import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import "./style.scss";

import FormNovaSenhaData from "../../types/FormNovaSenha.interface";
import LoginService from "../../services/requests/login";

import Input from "../../components/Input";
import Button from "../../components/Button";
import InputPassword from "../../components/InputPassword";

const FormNovaSenha = () => {
  const [valueForm, setValueForm] = useState({});
  const history = useHistory();

  const validationSchema = Yup.object().shape({
    password: Yup.string().required("Senha é obrigatório"),
    confirmPassword: Yup.string().required("Confirmar Senha é obrigatório"),
  });

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormNovaSenhaData>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: FormNovaSenhaData) => {
    LoginService.novaSenha(data)
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
      <h2>Insira a sua nova senha</h2>
      <p>Instruções sobre a criação da nova senha e caracteres</p>

      <InputPassword
        register={register("password")}
        error={errors.password?.message}
        name="password"
        label="Nova Senha"
        placeholder="•••••••••••••••••••••••"
        onChange={(e) => changeForm(e.target)}
      />
      <InputPassword
        register={register("confirmPassword")}
        error={errors.confirmPassword?.message}
        name="confirmPassword"
        label="Confirme a nova Senha"
        placeholder="•••••••••••••••••••••••"
        onChange={(e) => changeForm(e.target)}
      />

      <Button
        type="submit"
        className="md btn"
        disabled={!validationSchema.isValidSync(valueForm)}
      >
        Cadastrar
      </Button>
    </form>
  );
};

export default FormNovaSenha;
