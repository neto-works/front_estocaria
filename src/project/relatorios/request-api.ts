
import axios from "axios";
import { URL_BACKEND } from "..";
import { getTokenDataBackend } from "../auth/request-token";
import { Dados, ResultDados } from "./request.types";

export const requestRelatorio = async (dados: Dados, email: string) => {
    try {
        const token = await getTokenDataBackend();
        const user = await axios.get(URL_BACKEND + `/Admins/UserEmail/${email}`, {
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` }
        });

        if (user != null) {
            dados.adminId = user.data.adminId
            const response = await axios.post(URL_BACKEND + "/Relatorios", dados, {
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` }
            });
            return response.data;
        }
        return undefined;
    } catch (error) {
        console.log(error);
    }
};
/**
  relatorioId: 34,
  relatorioName: 'Default',
  data: '2024-07-12T21:17:42.4952422-03:00',
  dataInicio: '2020-06-21T00:00:00',
  dataFim: '2024-07-21T00:00:00',
  produtoMaisSaiu: 3,
  produtoMaisEntrou: null,
  totalArrecadado: 39.96,
  predicaoProxMeses: true,
  mesAnoPred: '2025-07-08T00:00:00',
  predProdutoSaida: 2,
  predProdutoEntrada: null,
  predTotalArrecadar: null,
  adminId: '529ef9b3-0c98-44b1-a89d-e1029b230d65',
  linkAdmin: null,
  lancamentos: []
 */