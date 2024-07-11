import { requestAllProdutos } from "@/services/produtos/request-api";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { BodySeparator, ButtonStyled, CardSummaryTitle, SearchInput, SpaceX10, TitleSeparator, TrSumammary } from "@/components/Atons";
import {VerticalBar } from "@/components/Screen";
import React from "react";

async function loadProdutos() { return await requestAllProdutos(); };
export default async function Admin() {
    const session = await getServerSession();
    const produtos = await loadProdutos();
    if (!session || produtos === null) { redirect("/signin"); }

    return (
        <div className="w-full h-auto relative px-5">
            <VerticalBar>
                <SearchInput />
                <SpaceX10 />
                <ButtonStyled />
            </VerticalBar>
            <div className="w-full h-auto rounded p-10 my-7 bg-padrao-claro">
                <div className="relative overflow-hidden shadow-md rounded-lg">
                    <table className="table w-full text-left">
                        <CardSummaryTitle>
                            <TitleSeparator title="Nome" />
                            <TitleSeparator title="Preço" />
                            <TitleSeparator title="Quantidade (Q)" />
                            <TitleSeparator title="Q. Max. P. em Estoque" />
                            <TitleSeparator title="Q. Min. E. em Estoque" />
                            <TitleSeparator title="Nº do Estoque" />
                            <TitleSeparator title="Outros" />
                            <TitleSeparator title="Outros" />
                        </CardSummaryTitle>
                        <tbody>
                            {
                                produtos?.map((produto, index) => (
                                    <React.Fragment key={index}>
                                        <TrSumammary>
                                            <BodySeparator title={produto.nome} isLink={true} rota={`/admin/${produto.nome}`} />
                                            <BodySeparator title={produto.preco} />
                                            <BodySeparator title={produto.quantEstoqueMax} />
                                            <BodySeparator title={produto.quantEstoqueMin} />
                                            <BodySeparator title={produto.estoqueId} />
                                            <BodySeparator title={produto.nome} />
                                            <BodySeparator title={produto.nome} />
                                            <BodySeparator title={produto.nome} />
                                        </TrSumammary>
                                    </React.Fragment>
                                ))
                            }

                        </tbody>

                    </table>
                </div>

            </div>

        </div>

    );
}



