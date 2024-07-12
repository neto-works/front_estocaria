export interface Dados { relatorioName: string; dataInicio: Date; dataFim: Date; predicaoProxMeses: boolean; mesAnoPred: Date; adminId: string; }

export type Lancamento = {
    LancamentoId: number, Data: Date, QuantEntrada: number, QuantSaida: number, EstoqueaId: number, ProdutoId: number, EstoquistaId: string
}
export type ResultDados = {
    relatorioId: number, relatorioName: string, data: Date, dataInicio: Date, dataFim: Date, produtoMaisSaiu: 1, produtoMaisEntrou: null, totalArrecadado: number, predicaoProxMeses: true, mesAnoPred: Date, predProdutoSaida: number, predProdutoEntrada: number | null, predTotalArrecadar: number | null, adminId: string, linkAdmin: | null, lancamentos: []
}