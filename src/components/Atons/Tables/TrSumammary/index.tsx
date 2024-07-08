import React, { ReactNode } from 'react';
import { TrSumammaryProps } from './TrSumammary.Types';
import { generateUniqueKey } from '@/services/geratorkeys/gerator-keys';

const TrSumammary: React.FC<TrSumammaryProps> = ({ children }): ReactNode => {

    return (
        <tr className='flex flex-row shadow-lg bg-background rounded-lg py-3 hover:shadow transition'>
            {children.map((component, index) => <React.Fragment key={generateUniqueKey() + index}>{component}</React.Fragment>)}
        </tr>
    );
};

export default TrSumammary;