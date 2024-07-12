"use client";
import React, { ReactNode } from 'react';

interface IFooterLayerProps {
  tituloPrimary?: string;
  tituloSecondary?: string;
  tituloTertiary?: string;
  children: ReactNode[];
}

const FooterLayer: React.FC<IFooterLayerProps> = ({ tituloPrimary, tituloSecondary, tituloTertiary, children }): ReactNode => {

  return (
    <div className="w-full h-44 flex flex-col md:flex-row items-center justify-around bg-padrao py-auto">
      <ul className="w-auto h-auto flex flex-col">
        <li><h5 className='text-center text-white'>{tituloPrimary ?? "Default Title Primary"}</h5></li>
        <li>{children[0] ?? " "}</li>
        <li>{children[1] ?? " "}</li>
        <li>{children[2] ?? " "}</li>
        <li>{children[3] ?? " "}</li>
        <li>{children[4] ?? " "}</li>
        <li>{children[5] ?? " "}</li>
      </ul>

      <ul className="w-auto h-auto flex flex-col flex-wrap">
        <li><h5 className='text-center text-white' >{tituloSecondary ?? "Default Title Secondary"}</h5></li>
        <li>{children[6] ?? " "}</li>
        <li>{children[7] ?? " "}</li>
        <li>{children[8] ?? " "}</li>
        <li>{children[9] ?? " "}</li>
        <li>{children[10] ?? " "}</li>
        <li>{children[11] ?? " "}</li>
      </ul>

      <ul className="w-auto h-auto flex flex-col flex-wrap">
        <li><h5 className='text-center text-white' >{tituloTertiary ?? "Default Title Tertiary"}</h5></li>
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

export default FooterLayer;