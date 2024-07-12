
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
            dados.adminId = user.data.AdminId

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