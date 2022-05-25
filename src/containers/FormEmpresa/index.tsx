
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import FormEmpresaData from "../../types/FormEmpresa.interface";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Select from "../../components/Select";
import MaskedInput from "../../components/MaskedInput";

const FormEmpresa = () => {
    const [valueForm, setValueForm] = useState({});
    const history = useHistory();

    const validationSchema = Yup.object().shape({
        nomeEmpresa: Yup.string().required("Campo obrigatório"),
        cargoUsuario: Yup.string().required("Campo obrigatório"),
        endereco: Yup.string().required("Campo obrigatório"),
        cnpj: Yup.string().required("Campo obrigatório"),
    });

    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm<FormEmpresaData>({
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
                        <Input
                            register={register("nomeEmpresa")}
                            error={errors.nomeEmpresa?.message}
                            name="nomeEmpresa"
                            type="text"
                            label="Nome da Empresa"
                            placeholder="Digite o nome da empresa.."
                            onChange={(e) => changeForm(e.target)}
                        />
                    </div>
                    <div className="md-6">
                        <Input
                            register={register("cargoUsuario")}
                            error={errors.cargoUsuario?.message}
                            name="cargoUsuario"
                            type="text"
                            label="Cargo usuário responsável"
                            placeholder="Digite o cargo.."
                            onChange={(e) => changeForm(e.target)}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="md-6">
                        <Input
                            register={register("endereco")}
                            error={errors.endereco?.message}
                            name="endereco"
                            type="text"
                            label="Endereço"
                            placeholder="Digite o endereço.."
                            onChange={(e) => changeForm(e.target)}
                        />
                    </div>
                    <div className="md-6">
                        <MaskedInput
                            mask="99.999.999/9999-99"
                            register={register("cnpj")}
                            error={errors.cnpj?.message}
                            name="cnpj"
                            type="text"
                            label="CNPJ"
                            placeholder="Digite o CNPJ.."
                            onChange={(e) => changeForm(e.target)} maskChar={null} />
                    </div>
                </div>

                <div className="row">
                    <div className="md-6">
                        <Select
                            register={register("setor")}
                            error={errors.setor?.message}
                            name="setor"
                            label="Setor"
                            placeholder="Tecnologia"
                            onChange={(e) => changeForm(e.target)}
                        />
                    </div>
                    <div className="md-6">
                        <Select
                            register={register("industria")}
                            error={errors.industria?.message}
                            name="industria"
                            label="Indústria"
                            placeholder="Software"
                            onChange={(e) => changeForm(e.target)}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="md-6">
                        <Select
                            register={register("numeroFuncionarios")}
                            error={errors.numeroFuncionarios?.message}
                            name="numeroFuncionarios"
                            label="Número de Funcionários"
                            placeholder="50-100"
                            onChange={(e) => changeForm(e.target)}
                        />
                    </div>
                    <div className="md-6">
                        <Select
                            register={register("faturamentoAnual")}
                            error={errors.faturamentoAnual?.message}
                            name="faturamentoAnual"
                            label="Faturamento anual"
                            placeholder="500 - 1000 milhões de reais"
                            onChange={(e) => changeForm(e.target)}
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

export default FormEmpresa