import React, { useEffect, useState } from "react";
import FormAlterarSenhaData from "../../types/FormAlterarSenha.interface";
import { useHistory } from "react-router-dom";
import Input from "../../components/Input";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import ModalValidation from "../../components/ModalValidation";
import ModalConfirmacao from "../../components/ModalConfirmacao";
import InputPassword from "../../components/InputPassword";

const FormAlterarSenha = () => {
  const [valueForm, setValueForm] = useState({});
  const history = useHistory();
  const [modalOpened, setModalOpened] = useState(false);

  const validationSchema = Yup.object().shape({
    password: Yup.string().required("Senha é obrigatório"),
    newPassword: Yup.string().required("Confirmar senha é obrigatório"),
  });

  const handleModalOpened = () => {
    setModalOpened(true);
  };

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormAlterarSenhaData>({
    resolver: yupResolver(validationSchema),
  });

  const changeForm = (target: HTMLInputElement) => {
    setValueForm({ ...getValues(), [target.name]: target.value });
  };

  return (
    <>
      <form>
        <div className="row">
          <div className="md-6">
            <InputPassword
              register={register("password")}
              error={errors.password?.message}
              name="password"
              label="Senha"
              placeholder="•••••••••••••••••••••••"
              onChange={(e) => changeForm(e.target)}
            />
          </div>
          <div className="md-6">
            <InputPassword
              register={register("newPassword")}
              error={errors.newPassword?.message}
              name="newPassword"
              label="Confirmar Senha"
              placeholder="•••••••••••••••••••••••"
              onChange={(e) => changeForm(e.target)}
            />
          </div>
        </div>
      </form>
      <Button
        type="submit"
        className="md mt-6 btn"
        onClick={() => setModalOpened(true)}
        disabled={!validationSchema.isValidSync(valueForm)}
      >
        {" "}
        Confirmar{" "}
      </Button>
      <ModalValidation
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
      />
    </>
  );
};

export default FormAlterarSenha;
