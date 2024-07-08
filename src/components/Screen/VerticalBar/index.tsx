import React, { ReactNode, useState } from 'react';
import Styles from "./navlink.module.css";

interface IVerticalBarProps { children: ReactNode[]; }

const VerticalBar: React.FC<IVerticalBarProps> = ({ children }): ReactNode => {


    return (
        <div className="flex flex-col justify-center lg:flex-row lg:justify-between items-center px-4">
            <div className="flex-shrink-0">
                {children[0]}
            </div>
            <div className="flex-grow mx-4">
                {children[1]}
            </div>
            <div className="flex-shrink-0">
                {children[2]}
            </div>
        </div>
    );
};

export default VerticalBar;