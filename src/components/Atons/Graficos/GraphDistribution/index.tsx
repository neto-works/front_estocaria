"use client";
import React, { ReactNode, useState } from 'react';
import { GrapdDistributionProps } from './grapddistribution.types';
import CustomIcon from '../../Icons/CustomIcon';
import { Icon } from '../../Icons/CustomIcon/customIcon.types';
import GraphDistributionBody from '../GraphDistributionBody';


const GrapdDistribution: React.FC<GrapdDistributionProps> = ({ }): ReactNode => {
    const [nome, setNome] = useState<string>(" ");

    return (
        <div className="shadow-sm bg-background rounded-lg">
            {/* cabeçalho */}
            <div className='flex gap-x-2 items-center'>
                <CustomIcon icon={Icon.Waypoints} />
                <p className='tex-xl'>Distribuiton</p>
            </div>
            <GraphDistributionBody />
        </div>
    );
};

export default GrapdDistribution;