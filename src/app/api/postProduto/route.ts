import { NextRequest, NextResponse } from 'next/server';
import { requestPostProduto } from '@/project/produtos/request-api';

export async function POST(req: NextRequest) {
    if (req.method !== 'POST') {
        return NextResponse.json(
            { error: `Method ${req.method} Not Allowed` },
            { status: 405 }
        );
    }
    try {
        const produto = await req.json(); // Use req.json() para obter o corpo da requisição
        const result = await requestPostProduto(produto);
        return NextResponse.json(result, { status: 200 });
    } catch (error) {
        console.error('Erro ao processar a requisição:', error);
        return NextResponse.json({ error: 'Erro ao processar a requisição' }, { status: 500 });
    }
}
