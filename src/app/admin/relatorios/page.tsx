import Badges from "@/components/Atons/Graficos/Badges";
import BadgesWithDetails from "@/components/Atons/Graficos/BadgesWithDetails";
import CardAnalitsc from "@/components/Atons/Cards/CardAnalitcs";
import GrapdDistribution from "@/components/Atons/Graficos/GraphDistribution";
import GridAminCards from "@/components/Layouts/GridAminCards";
import { requestRelatorio } from "@/project/relatorios/request-api";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Dados } from "@/project/relatorios/request.types";
import { Icon } from "@/components/Atons/Icons";

async function loadRelatorios(email: string) {
    const data: Dados = {
        relatorioName: "Temporada",
        dataInicio: "2020-06-21",
        dataFim: "2070-07-21",
        predicaoProxMeses: true,
        mesAnoPred: "2024-07-08",
        adminId: ""
    }
    return await requestRelatorio(data, email);
}

export default async function Relatorios() {
    const session = await getServerSession();
    if (!session) {
        return redirect("/");
    }
    const relatorio = await loadRelatorios(session.user?.email as string);

    return (
        <div className="w-full h-ful">
            <div className="grid grid-cols-1 ld:gap-x-2 my-10 ">
                <h2 className="text-center text-2xl py4">Grafico interativo</h2>
                <div className="w-full px-7"> <GrapdDistribution /></div>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ld:gap-x-20 my-40">
                id do relatorio:{relatorio.relatorioId}<br />
                nome:{relatorio.relatorioName}<br />
                data realização:{relatorio.data}<br />
                data inicio: {relatorio.dataInicio}<br />
                data fim: {relatorio.dataFim}<br />
                Id do produtos que mais saiu:{relatorio.produtoMaisSaiu}<br />
                Id do produtos que mais entrou:{relatorio.produtoMaisEntrou}<br />
                Valor arrecadado comproduto no periodo:{relatorio.totalArrecadado}<br />
                Predição : {relatorio.predicaoProxMeses}<br />
                mes:{relatorio.mesAnoPred}<br />
                Predição quantidade pra sair prox mes:{relatorio.predProdutoSaida}<br />
                Predição quantidade pra entrar prox mes{relatorio.predProdutoEntrada}<br />
                Predição total a arrecadar:{relatorio.predTotalArrecadar}<br />
                Id do administrador que realizou relatorio: {relatorio.adminId}<br />
                objeto:{relatorio.linkAdmin}<br />
                <Badges tipo="DECRESCENTE" porcentagem={10.5} />
                <Badges tipo="CRESCENTE" porcentagem={9.5} />
                <Badges tipo="CRESCENTE" porcentagem={9.5} />
                <BadgesWithDetails tipo="CRESCENTE" porcentagem={9.5} numero={123} />
                <BadgesWithDetails tipo="DECRESCENTE" porcentagem={9.5} numero={123} />
                <BadgesWithDetails tipo="DECRESCENTE" porcentagem={9.5} numero={123} />
                <BadgesWithDetails tipo="CRESCENTE" porcentagem={9.5} numero={123} />
                <BadgesWithDetails tipo="DECRESCENTE" porcentagem={9.5} numero={123} />
                <BadgesWithDetails tipo="CRESCENTE" porcentagem={9.5} numero={123} />
                <BadgesWithDetails tipo="DECRESCENTE" porcentagem={9.5} numero={123} />
                <BadgesWithDetails tipo="CRESCENTE" porcentagem={9.5} numero={123} />
                <BadgesWithDetails tipo="DECRESCENTE" porcentagem={9.5} numero={123} />
            </div>
            <div className="flex flex-col items-center justify-around lg:flex-row">
                <div className="w-52 h-full bg-olive ">
                </div>
                <GridAminCards>
                    <CardAnalitsc icon={Icon.UsersRound} total={"12"} average={15} title={"Usuarios cadastrados"} tooltipText={"informação sobre estoquistas"} />
                    <CardAnalitsc icon={Icon.Waypoints} total={"12.450"} average={15} title={"Produtos novos"} tooltipText={"informação sobre novos produtos"} />
                    <CardAnalitsc icon={Icon.Activity} total={"12.450"} average={15} title={"Atividades "} tooltipText={"informação sobre novas atividades"} />
                    <CardAnalitsc icon={Icon.ChevronUp} total={"12.450"} average={15} title={"Produtos que mais sairam "} tooltipText={"informação sobre os produtos que mais sairam do estoque"} />
                    <CardAnalitsc icon={Icon.UsersRound} total={"12"} average={15} title={"Usuarios cadastrados"} tooltipText={"informação sobre estoquistas"} />
                    <CardAnalitsc icon={Icon.Waypoints} total={"12.450"} average={15} title={"Produtos novos"} tooltipText={"informação sobre novos produtos"} />
                    <CardAnalitsc icon={Icon.Activity} total={"12.450"} average={15} title={"Atividades "} tooltipText={"informação sobre novas atividades"} />
                    <CardAnalitsc icon={Icon.ChevronUp} total={"12.450"} average={15} title={"Produtos que mais sairam "} tooltipText={"informação sobre os produtos que mais sairam do estoque"} />
                </GridAminCards>
            </div>
        </div>
    );
}