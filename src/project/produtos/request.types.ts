export type Produto = {
    nome: string, descricao: string, preco: number, imagemUrl: string, quantEstoqueMin: number, quantEstoqueMax: number, categoriaId: number | null, estoqueId: number
}
export interface IProduto {
    nome: string; descricao: string; preco: number; imagemUrl: string; quantEstoqueMin: number; quantEstoqueMax: number; categoriaId: number | null; estoqueId: number;
}