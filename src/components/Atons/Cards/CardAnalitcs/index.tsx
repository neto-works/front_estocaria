"use client";
import React, { ReactNode, useState } from 'react';
import { CardAnaliticsProps } from './cardanalitics.types';
import CustomIcon from '../../Icons/CustomIcon';
import CustomTooltips from '../../Icons/CustomTooltips';
//import Styles from "./cardanalitcs.module.css";

const CardAnalitsc: React.FC<CardAnaliticsProps> = ({ icon, total, average, title, tooltipText }): ReactNode => {

    return (
        <div className="min-w-2.5 shadow-sm bg-background rounded-lg p-5 py-3 hover:shadow-lg transition">
            <div className='min-w-2.5 flex justify-between'>
                <div className='min-w-2.5 flex gap-2 items-center'>
                    <CustomIcon icon={icon} />
                    {title}
                </div>
                <CustomTooltips content={tooltipText} />
            </div>
        </div>
    );
};

export default CardAnalitsc;