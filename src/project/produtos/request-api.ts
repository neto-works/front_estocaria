
import axios from "axios";
import { URL_BACKEND } from "..";
import { getTokenDataBackend } from "../auth/request-token";
import { Produto } from "./request.types";

export const requestAllProdutos = async (): Promise<Produto[] | null> => {
    const token = await getTokenDataBackend();
    if (token !== null) {//1º caso encontrou token do back mas não garantido que seja inpirado
        try {
            const response = await axios.get(URL_BACKEND + "/Produtos", {
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` }
            });
            return response.data;
        } catch (error: any) {//2º caso token do backend ta expirado retornar [] pedir pro usuario logar
            if (error.response.status === 401) {
                return null;
            }
        }
    }
    return [];
};


export const requestPostProduto = async (produto: Produto) => {

    try {
        const token = await getTokenDataBackend();

        const response = await axios.post(URL_BACKEND + "/Produtos", produto, {
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` }
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
            throw error; // erro desconhecido, deu pau marco velho
        }
    }
};