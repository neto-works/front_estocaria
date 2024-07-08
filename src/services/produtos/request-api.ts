
import axios from "axios";
import { URL_BACKEND } from "..";
import { getTokenDataBackend } from "../auth/request-token";

export type Produto = {
    nome: string, descricao: string, preco: number, imagemUrl: string, quantEstoqueMin: number, quantEstoqueMax: number, categoriaId: number | null, estoqueId: number
}
export interface IProduto {
    nome: string; descricao: string; preco: number; imagemUrl: string; quantEstoqueMin: number; quantEstoqueMax: number; categoriaId: number | null; estoqueId: number;
}
export const requestAllProdutos = async (): Promise<Produto[]> => {

    try {

        const token = await getTokenDataBackend();

        const response = await axios.get(URL_BACKEND + "/Produtos", {
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