"use client";
import { ButtonGeneric } from '@/components/Atons';
import React, { ChangeEvent, ReactNode, SyntheticEvent, useEffect, useState } from 'react';
import { FormCreateUserState, initUserState } from './formcreateuser.types';
import { ICreateUser, requestCreateUser } from '@/project/usuarios/requests-api';
import { useRouter } from 'next/navigation';

const FormCreateUser: React.FC = (): ReactNode => {
    const [usuario, setusuario] = useState<FormCreateUserState>(initUserState);
    const [message, setMessageError] = useState<string>(" ");
    const route = useRouter();

    useEffect(() => { }, [message]);

    const handleChangeUserName = (event: ChangeEvent<HTMLInputElement>) => {
        setusuario({ ...usuario, userName: event.target.value });
    }
    const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
        setusuario({ ...usuario, email: event.target.value });
    }
    const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setusuario({ ...usuario, password: event.target.value });
    }
    const handleChangeRePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setusuario({ ...usuario, passwordTwo: event.target.value });
    }

    const handleChangeTipoUsuario = (event: ChangeEvent<HTMLSelectElement>) => {
        setusuario({ ...usuario, tipoUsuario: event.target.value as "ESTOQUISTA" | "ADMIN" });
    }

    const timeError = async () => {
        return await setTimeout(() => { setMessageError("") }, 2000);
    }

    const handlerOnnSubmit = async (event: SyntheticEvent) => {
        event.preventDefault();

        if (usuario.password !== usuario.passwordTwo) {
            setMessageError("Erro no formulário: as senhas não são iguais");
            timeError();
        }
        else if (!usuario.email || usuario.email.trim() === "") {
            setMessageError("Erro no formulário: o campo de email é obrigatório");
            timeError();
        }
        else if (!usuario.userName || usuario.userName.trim() === "") {
            setMessageError("Erro no formulário: o campo de nome de usuário é obrigatório");
            timeError();
        }
        else {
            setMessageError("Sucesso"); // Mensagem de sucesso
            timeError();
        }

        const usuarioReq: ICreateUser = { userName: usuario.userName, email: usuario.email, password: usuario.password, tipoUsuario: usuario.tipoUsuario };
        const response = await requestCreateUser(usuarioReq);

        if (response && typeof window !== 'undefined') {
            route.push('/signin');
        }
    }

    return (
        <form className="w-1/2 mx-auto mt-5">

            <div className='p-4'>{message}</div>

            {/* Name input */}
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="registerName">
                    Name
                </label>
                <input name='userName' type="text" id="registerName" className="form-input mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange={handleChangeUserName} />
            </div>

            {/* Email input */}
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="registerEmail">
                    Email
                </label>
                <input type="email" id="registerEmail" className="form-input mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange={handleChangeEmail} />
            </div>

            {/* Password input */}
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="registerPassword">
                    Password
                </label>
                <input type="password" id="registerPassword" className="form-input mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange={handleChangePassword} />
            </div>

            {/* Repeat Password input */}
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="registerRepeatPassword">
                    Repeat password
                </label>
                <input type="password" id="registerRepeatPassword" className="form-input mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange={handleChangeRePassword} />
            </div>

            {/* Select */}
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="tipoUsuario">
                    Qual tipo de usuário você pretende se cadastrar:
                </label>
                <select id="tipoUsuario" name="tipoUsuario" value={usuario.tipoUsuario} onChange={handleChangeTipoUsuario} className="form-select mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <option value="ESTOQUISTA">Estoquista</option>
                    <option value="ADMIN">Administrador</option>
                </select>
            </div>

            {/* Checkbox */}
            <div className="flex justify-center mb-4">
                <input className="form-checkbox mt-1 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" type="checkbox" defaultValue="" id="registerCheck" aria-describedby="registerCheckHelpText" onChange={() => { }} />
                <label className="ml-2 block text-sm text-gray-900" htmlFor="registerCheck">
                    I have read and agree to the terms
                </label>
            </div>

            {/* Button */}
            <ButtonGeneric disable={false} quantClicksDisable={1} label={'Sign in'} classButton={"primary"} padrao="rounded" onClick={handlerOnnSubmit}></ButtonGeneric>

        </form>

    );
};

export default FormCreateUser;