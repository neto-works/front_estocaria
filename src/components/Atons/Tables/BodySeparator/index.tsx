"use client";
import React, { ReactNode } from 'react';
import { BodySeparatorProps } from './bodyseparator.types';
import Link from 'next/link';
const BodySeparator: React.FC<BodySeparatorProps> = ({ title, isLink, rota }): ReactNode => {

    if (isLink) {
        return (
            <td className="text-center p-4">
                <Link href={rota ?? ""} className="bg-olive">
                    {title}
                </Link>
            </td>
        );
    }
    return (
        <td className="min-w-30 max-w-30 text-center p-4">
            {title}
        </td>
    );

};

export default BodySeparator;