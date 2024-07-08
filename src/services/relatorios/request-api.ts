
import axios from "axios";
import { URL_BACKEND } from "..";
import { getTokenDataBackend } from "../auth/request-token";

export interface Dados {relatorioName: string;dataInicio: Date;dataFim: Date;predicaoProxMeses: boolean;mesAnoPred: Date;adminId: string;}

type Lancamento = {
    LancamentoId: number,
    Data: Date,
    QuantEntrada: number,
    QuantSaida: number,
    EstoqueaId: number,
    ProdutoId: number,
    EstoquistaId: string
}
export type ResultDados = {
    relatorioId: number,
    relatorioName: string,
    data: Date,
    dataInicio: Date,
    dataFim: Date,
    produtoMaisSaiu: 1,
    produtoMaisEntrou: null,
    totalArrecadado: number,
    predicaoProxMeses: true,
    mesAnoPred: Date,
    predProdutoSaida: number,
    predProdutoEntrada: number | null,
    predTotalArrecadar: number | null,
    adminId: string,
    linkAdmin: | null,
    lancamentos: []
}
export const requestRelatorio = async (dados: Dados, email: string) => {
    let x = true;
    try {
        const token: string = await getTokenDataBackend();
        const user = await axios.get(URL_BACKEND + `/Admins/UserEmail/${email}`, {
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` }
        });

        if (user != null) {
            dados.adminId = user.data.idAdmin

            const response = await axios.post(URL_BACKEND + "/Relatorios", dados, {
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` }
            });
            return response.data;
        }
        return {} as unknown as ResultDados;
    } catch (error) {
        console.log(error);
    }
};