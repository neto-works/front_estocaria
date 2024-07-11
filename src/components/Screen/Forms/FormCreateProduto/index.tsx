"use client";
import { IProduto } from '@/services/produtos/request.types';
import { useRouter } from 'next/navigation';

import React, { FormEvent, ReactNode } from 'react';

const FormProduto: React.FC = (): ReactNode => {
    const router = useRouter();

    async function onSubmitForm(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const produto: IProduto = {
            nome: formData.get("nome") as string,
            descricao: formData.get("descricao") as string,
            preco: parseFloat(formData.get("preco") as string),
            imagemUrl: formData.get("imagemUrl") as string,
            quantEstoqueMin: parseInt(formData.get("quantEstoqueMin") as string, 10),
            quantEstoqueMax: parseInt(formData.get("quantEstoqueMax") as string, 10),
            categoriaId: null,
            estoqueId: parseInt(formData.get("estoqueId") as string, 10),
        };
        try {
            const response = await fetch('/api/postProduto', {method: 'POST', headers: {'Content-Type': 'application/json'}
                , body: JSON.stringify(produto)
            });

            if (!response.ok) {
                throw new Error('Erro ao enviar produto');
            }
            router.push("/admin");
        } catch (error) {
            if (error instanceof TypeError) {
                // rede, como falhas na conexão
                throw new Error('Erro de rede ao enviar produto');
            } else if (error instanceof Error) {
                // HTTP inválida
                throw new Error(`Erro ao enviar produto: ${error.message}`);
            } else {
                // Caso geral, para capturar qualquer outro tipo de erro não previsto
                throw new Error('Erro desconhecido ao enviar produto');
            }
        }
    }

    return (
        <form className="w-full max-w-lg" onSubmit={onSubmitForm}>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                        Name
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-olive rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        name="nome"
                        type="text"
                        placeholder="Nome do produto"
                    />
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                        Estoque Id
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-olive rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-olive"
                        id="grid-last-name"
                        name="estoqueId"
                        type="number"
                        placeholder="1"
                    />
                </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-preco">
                        Preço
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-olive rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-preco"
                        name="preco"
                        type="text"
                        pattern="[0-9]+([,\.][0-9]+)?"
                        placeholder="Preço do produto"
                    />
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-categoria">
                        Categoria
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-olive rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-olive"
                        id="grid-categoria"
                        name="categoriaId"
                        type="number"
                        placeholder="ID da categoria"
                    />
                </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-quant-min">
                        Quantidade <span className='text-green-600'>Mínima Permitida</span> no Estoque
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-olive rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-olive"
                        id="grid-quant-min"
                        name="quantEstoqueMin"
                        type="number"
                        placeholder="Quantidade mínima"
                    />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-quant-max">
                        Quantidade <span className='text-red-500'>Máxima Permitida</span> no Estoque
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-olive rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-quant-max"
                        name="quantEstoqueMax"
                        type="number"
                        placeholder="Quantidade máxima"
                    />
                </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-image-name">
                        <span className='text-yellow-600'>Nome da Imagem padrão definida, backendnão fucionando ainda com file</span>
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-olive rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-olive"
                        id="grid-image-name"
                        name="imagemUrl"
                        type="hidden"
                        placeholder="Nome da imagem"
                        value={"imagem padrão.jpg"}
                    />
                </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full px-3">
                    <label htmlFor="descricao" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Descrição
                    </label>
                    <textarea
                        id="descricao"
                        name="descricao"
                        rows={4}
                        className="mt-1 block w-full bg-gray-200 text-gray-700 border border-olive rounded-md shadow-sm focus:outline-none focus:border-olive focus:ring focus:ring-olive focus:ring-opacity-50 resize-none"
                        placeholder="Digite a descrição do produto aqui..."
                        required
                    />
                </div>
            </div>

            <div className="flex justify-end">
                <button className="bg-olive hover:bg-neutral-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Enviar
                </button>
            </div>
        </form>
    );
};

export default FormProduto;