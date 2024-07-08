"use client";
import React, { ReactNode } from 'react';

interface IFooterProps {
  tituloPrimary?: string;
  tituloSecondary?: string;
  tituloTertiary?: string;
  children: ReactNode[];
}

const Footer: React.FC<IFooterProps> = ({ tituloPrimary, tituloSecondary, tituloTertiary, children }): ReactNode => {

  return (
    <div className="w-full h-full flex flex-col sm:flex-col md:flex-row flex-wrap justify-around items-center py-4 bg-padrao">
      <ul className="w-auto h-auto flex flex-col flex-wrap py-2">
        <li><h5>{tituloPrimary ?? "Default Title Primary"}</h5></li>
        <li>{children[0] ?? " "}</li>
        <li>{children[1] ?? " "}</li>
        <li>{children[2] ?? " "}</li>
        <li>{children[3] ?? " "}</li>
        <li>{children[4] ?? " "}</li>
        <li>{children[5] ?? " "}</li>
      </ul>

      <ul className="w-auto h-auto flex flex-col flex-wrap py-2">
        <li><h5>{tituloSecondary ?? "Default Title Secondary"}</h5></li>
        <li>{children[6] ?? " "}</li>
        <li>{children[7] ?? " "}</li>
        <li>{children[8] ?? " "}</li>
        <li>{children[9] ?? " "}</li>
        <li>{children[10] ?? " "}</li>
        <li>{children[11] ?? " "}</li>
      </ul>

      <ul className="w-auto h-auto flex flex-col flex-wrap py-2">
        <li><h5>{tituloTertiary ?? "Default Title Tertiary"}</h5></li>
        <li>{children[12] ?? " "}</li>
        <li>{children[13] ?? " "}</li>
        <li>{children[14] ?? " "}</li>
        <li>{children[15] ?? " "}</li>
        <li>{children[16] ?? " "}</li>
        <li>{children[17] ?? " "}</li>
      </ul>
    </div>

  );
};

export default Footer;