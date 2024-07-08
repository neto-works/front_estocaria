"use client";
import React, { ReactNode, useState } from 'react';
import { BadgesProps } from './Bagges.Types';
import { CustomIcon, Icon } from '../../Icons';


const Badges: React.FC<BadgesProps> = ({ tipo, porcentagem }): ReactNode => {
    const [total, setTotal] = useState<number>(0);

    return (
        <>{tipo === "CRESCENTE" ? (
            <div className="h-[35px] flex items-center gap-2 px-3 text-md bg-green-300 text-black rounded-xl w-fit">
                {porcentagem}%
                <CustomIcon icon={Icon.TrendingUp} />
            </div>) : (
            <div className="h-[35px] flex items-center gap-2 px-3 text-md bg-red-300 text-black rounded-xl w-fit">
                {porcentagem}%
                <CustomIcon icon={Icon.TrendingDown} />
            </div>
        )}</>
    );
};

export default Badges;