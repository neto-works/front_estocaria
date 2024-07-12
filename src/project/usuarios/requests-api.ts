
import axios from "axios";
import { URL_BACKEND } from "..";

export interface ICreateUser { userName: string; email: string; password: string; tipoUsuario: "ESTOQUISTA" | "ADMIN"; }

export const requestCreateUser = async (user: ICreateUser) => {
    try {
        const response = await axios.post(URL_BACKEND + "/Auth/register", user, {
            headers: { 'Content-Type': 'application/json' }
        });

        return response.data;
    } catch (error: any) {
        if (error instanceof Error) {
            throw new Error("Ocorreu um erro na requisição: " + error.message);
        }
        else {
            if (error.response && error.response.status === 401) {
                console.error("Erro 401: Não autorizado");
            }

        }
    }
};