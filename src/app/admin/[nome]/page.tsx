export interface IPropsProdutoDetails {
    params: { nome: string }
}
export default function ProdutoDetails({ params }: IPropsProdutoDetails) {
    return (
        <>
            produto : {params.nome}
            com descricao x
            imagem x
            com editar e excluir e altas putarias
        </>
    );
}