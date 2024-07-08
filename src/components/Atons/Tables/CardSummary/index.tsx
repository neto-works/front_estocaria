import React, { ReactNode } from 'react';
import { CardSummaryProps } from './CardSummary.Types';

const CardSummary: React.FC<CardSummaryProps> = ({value}): ReactNode => {

    return (
        <td className="shadow-sm bg-background rounded-lg py-3 hover:shadow-lg transition">
            {value}
        </td>
    );
};

export default CardSummary;