"use client";
import React, { ReactNode, useState } from 'react';
import { BadgesWithDetailsProps } from './Bagges.Types';
import { CustomIcon, Icon } from '../../Icons';

const BadgesWithDetails: React.FC<BadgesWithDetailsProps> = ({ tipo,porcentagem, numero }): ReactNode => {
    const [total, setTotal] = useState<number>(0);

    return (
        <>{tipo === "CRESCENTE" ? (
            <div className='flex flex-wrap'>
                <div className='h-[35px] flex items-center gap-2 px-3 text-md bg-olive text-black rounded-xl w-fit'>
                    {porcentagem}%
                    <CustomIcon icon={Icon.TrendingUp} />

                </div>
                <div className='h-[35px] flex items-center gap-2 px-3 text-md bg-transparent text-black rounded-xl w-fit'>
                    +{numero} increase
                </div>
            </div>
        ) : (
            <div className='flex flex-wrap'>
                <div className='h-[35px] flex items-center gap-2 px-3 text-md bg-red-500 text-black rounded-xl w-fit'>
                    {porcentagem}%
                    <CustomIcon icon={Icon.TrendingDown} />
                </div>
                <div className='h-[35px] flex items-center gap-2 px-3 text-md bg-transparent text-black rounded-xl w-fit'>
                    decrease {numero}-
                </div>
            </div>
        )}</>

    );
};

export default BadgesWithDetails;