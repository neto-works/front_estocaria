import axios from "axios";
import { URL_BACKEND } from "..";

export interface IAuthenticateUser { email: string | undefined; password: string | undefined; }
export interface IAuthenticateResponse { token: string; refreshToken: string; expiration: string; }

export const requestAuthenticationUser = async (user: IAuthenticateUser) => {
    try {
        const response = await axios.post(URL_BACKEND + "/Auth/login", user);
        const result: IAuthenticateResponse = { ...response?.data }
        return result;

    } catch (error: any) {
        if (error instanceof Error) {
            throw new Error("Ocorreu um erro na requisição: " + error.message);
        }
        else {
            if (error.response && error.response.status === 401) {
                console.error("Erro 401: Não autorizado");
            }
            throw error; // erro desconhecido, deu pau marco velho
        }
    }
};