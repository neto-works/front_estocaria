import CardAnalitsc from "@/components/Atons/Cards/CardAnalitcs";
import Badges from "@/components/Atons/Graficos/Badges";
import BadgesWithDetails from "@/components/Atons/Graficos/BadgesWithDetails";
import GrapdDistribution from "@/components/Atons/Graficos/GraphDistribution";
import { Icon } from "@/components/Atons/Icons/CustomIcon/CustomIcon.Types";
import GridAminCards from "@/components/Layouts/GridAminCards";
import { Dados, requestRelatorio } from "@/services/relatorios/request-api";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

async function loadRelatorios(email: string): Promise<void> {

    const data: Dados = {
        relatorioName: "Default", dataInicio: new Date("2020-07-08"), dataFim: new Date("2024-07-08"),
        predicaoProxMeses: true, mesAnoPred: new Date("2025-07-08"), adminId: "3868f658-c9f4-43dc-965c-e244ccf73167"
    }
    const result = await requestRelatorio(data, email);
    //console.log(result);
}

export default async function Relatorios() {
    const session = await getServerSession();
    if (!session) {
        redirect("/");
    }

    await loadRelatorios(session.user?.email as string);

    return (
        <div className="w-full h-ful">
            <div className="grid grid-cols-1 ld:gap-x-2 my-10 ">
                <h2 className="text-center text-2xl py4">Grafico interativo</h2>
                <GrapdDistribution />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ld:gap-x-20 my-40">
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
                    grnde grafico em pissa 3d
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