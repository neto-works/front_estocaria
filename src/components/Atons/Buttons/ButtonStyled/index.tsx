"use client";
import React, { ReactNode } from 'react';
import { useRouter } from 'next/navigation';

interface IButtonStyledProps {  }

const ButtonStyled: React.FC<IButtonStyledProps> = (): ReactNode => {
    const route = useRouter();

    return (
        <button className="px-3 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            onClick={() => route.push("/admin/cadastrarproduto")}>+ Add New Produto</button>
    );
};

export default ButtonStyled;