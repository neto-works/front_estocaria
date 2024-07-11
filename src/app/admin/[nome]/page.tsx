import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export interface IPropsProdutoDetails {
    params: { nome: string }
}
export default async function ProdutoDetails({ params }: IPropsProdutoDetails) {
    const session = await getServerSession();

    if (!session) {
        redirect("/");
    }
    return (
        <div>
            produto : {params.nome}
            com descricao x
            imagem x
            com editar e excluir e altas putarias
        </div>
    );
}