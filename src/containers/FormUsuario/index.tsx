
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import FormEmpresaData from "../../types/FormEmpresa.interface";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Select from "../../components/Select";
import FormUsuarioData from "../../types/FormUsuario.interface";
import MaskedInput from "../../components/MaskedInput";

const FormUsuario = () => {
    const [valueForm, setValueForm] = useState({});
    const [celular, setCelular] = useState("");



    const history = useHistory();

    const validationSchema = Yup.object().shape({
        nome: Yup.string().required("Campo obrigatório"),
        email: Yup.string().required("Campo obrigatório"),
        telefone: Yup.string().required("Campo obrigatório"),
    });

    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm<FormUsuarioData>({
        resolver: yupResolver(validationSchema),
    });

    const changeForm = (target: HTMLInputElement) => {
        setValueForm({ ...getValues(), [target.name]: target.value });
    };

    const handleCelular = (e: any) => {
        setCelular(e.target.value);
    }

    return (
        <>
            <form>
                <div className="row">
                    <div className="md-6">
                        <Input
                            register={register("nome")}
                            error={errors.nome?.message}
                            name="nome"
                            type="text"
                            label="Nome"
                            placeholder="Nome"
                            onChange={(e) => changeForm(e.target)}
                        />
                    </div>
                    <div className="md-6">
                        <Input
                            register={register("email")}
                            error={errors.email?.message}
                            name="email"
                            type="text"
                            label="E-mail"
                            placeholder="meuemail@exemplo.com.br"
                            onChange={(e) => changeForm(e.target)}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="md-6">
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
                    </div>
                </div>
            </form>
            <Button
                type="submit"
                className="md mt-6 btn"
                disabled={!validationSchema.isValidSync(valueForm)}
            > Atualizar </Button>
        </>
    )
}

export default FormUsuario