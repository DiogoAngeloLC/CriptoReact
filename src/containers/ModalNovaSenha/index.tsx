import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import logo from "../../assets/img/brand.png";

import "./style.scss";

import FormNovaSenhaData from "../../types/FormNovaSenha.interface";
import LoginService from "../../services/requests/login";

import Input from "../../components/Input";
import Button from "../../components/Button";

const ModalNovaSenha = () => {
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
      
      <h2>Solicitação de nova senha</h2>
      <div className="textsenha">
      <p>Olá (Nome),</p>
      <p>Recebemos uma solicitação para redefinir a senha da sua conta.<br></br>
      Para redefinir sua senha, siga o link abaixo:</p>
      </div>

      

      <Button
        type="submit"
        className="md btn"
      >
        Alterar senha
      </Button>
      
      <div className="textsenha2">
      <p>Se você não solicitou a redefinição de sua senha, ignore esse e-mail. Se<br></br>
      você tiver alguma dúvida, entre em contato com o suporte aqui.</p>
      <p>Obrigado, Equipe Abundance Brasil.</p>
      </div>
    </form>
  );
};

export default ModalNovaSenha;
