import React, { ReactNode } from 'react';
import { ICardSummaryTitleProps } from './CardSummaryTitle.Types';
import { generateUniqueKey } from '@/services/geratorkeys/gerator-keys';

/**this component is head table  */
const CardSummaryTitle: React.FC<ICardSummaryTitleProps> = ({ children }): ReactNode => {

    return (
        <thead>
            <tr className='flex flex-row shadow-lg bg-background rounded-lg py-3 hover:shadow transition'>
                {children.map((component,index) => <React.Fragment key={generateUniqueKey()+index}>{component}</React.Fragment>)}
            </tr>
        </thead>
    );
};

export default CardSummaryTitle;