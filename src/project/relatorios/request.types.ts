export interface Dados { relatorioName: string; dataInicio: string; dataFim: string; predicaoProxMeses: boolean; mesAnoPred: string; adminId: string; }

export type Lancamento = {
    LancamentoId: number, Data: Date, QuantEntrada: number, QuantSaida: number, EstoqueaId: number, ProdutoId: number, EstoquistaId: string
}
export type ResultDados = {
    relatorioId: number,
    relatorioName: string,
    data: Date, dataInicio: Date,
    dataFim: Date,
    produtoMaisSaiu: number,
    produtoMaisEntrou: null,
    totalArrecadado: number,
    predicaoProxMeses: true,
    mesAnoPred: Date,
    predProdutoSaida: number,
    predProdutoEntrada: number | null,
    predTotalArrecadar: number | null,
    adminId: string,
    linkAdmin: | null, lancamentos: Lancamento[]
}

/**
    RelatorioId: number
    RelatorioName: string
    Data: Date
    DataInicio: Date
    DataFim: Date
    ProdutoMaisSaiu: number
    ProdutoMaisEntrou: number
    TotalArrecadado: number
    PredicaoProxMeses: boolean
    MesAnoPred: Date
    PredProdutoSaida: number
    PredProdutoEntrada: number
    PredTotalArrecadar: number
    AdminId: string
    Lancamentos:Lancamento[]

**/