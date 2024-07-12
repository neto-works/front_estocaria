"use client";
import React, { ReactNode, useState } from 'react';
import FooterLayer from './FooterLayer';
import Link from 'next/link';


const Footer: React.FC = (): ReactNode => {
    return (
        <FooterLayer tituloPrimary="Mapa do site" tituloSecondary="Contatos" tituloTertiary="Parcerias">
            {/* Mapasite */}
            <Link className="link" href="/">home</Link>
            <Link className="link" href="/signin">login</Link>
            <Link className="link" href="/admin">admin</Link>
            <Link className="link" href="">.</Link>
            <Link className="link" href="/">.</Link>
            <Link className="link" href="">.</Link>
            {/* Contatos */}
            <Link className="link" href="#">Nosso e-mail: estocaria.net@gmail.com</Link>
            <Link className="link" href="">.</Link>
            <Link className="link" href="/">.</Link>
            <Link className="link" href="">.</Link>
            <Link className="link" href="/">.</Link>
            <Link className="link" href="">.</Link>
            {/* Contatos */}
            <Link className="link" href="/">Oficina do brito</Link>
            <Link className="link" href="">.</Link>
            <Link className="link" href="/">.</Link>
            <Link className="link" href="">.</Link>
            <Link className="link" href="/">.</Link>
            <Link className="link" href="/">.</Link>
        </FooterLayer>
    );
};

export default Footer;