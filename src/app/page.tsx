import {LayoutBase } from "@/components/Layouts";
import { Footer, NavLink, SideBarRight } from "@/components/Screen";
import Image from 'next/image';
import Link from "next/link";
import ImagemPlataform from "@public/assets/imgs/imagem.png"

export default function Home() {
  return (
    <LayoutBase>
      <div className={`w-full min-h-full  bg-white p-3 flex flex-col items-center round-side`}>
        <NavLink>
          <Link className="link" href={"/"}> Home</Link>
          <Link className="link" href={"/admin"}> Admin</Link>
          <Link className="link" href={"/signin"}> Login</Link>
          <Link className="link" href={"/teste"}> Tester</Link>
        </NavLink>

        <h6 className={`py-5 lightText`}>Ja pensou em estocar seus produtos de forma inteligente?</h6>

        <h1 className="py-5">Assunto principal </h1>

        <div className="p-5">
          <p className="py-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque neque aut cumque eveniet iure error repellat consectetur.
            Dolorem dicta commodi autem repellat quisquam necessitatibus, nam fuga impedit debitis aut aperiam?
          </p>

          <p className="py-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque neque aut cumque eveniet iure error repellat consectetur.
            Dolorem dicta commodi autem repellat quisquam necessitatibus, nam fuga impedit debitis aut aperiam?
          </p>

        </div>

        <div className={`imagem max-w-md`}>
          <Image src={ImagemPlataform} alt="Descrição da imagem" priority={true} />
        </div>
      </div>


      <SideBarRight />
      <Footer tituloPrimary="Parcerias" tituloSecondary="Contatos" tituloTertiary="Outros">
        <Link className="link" href="">alguma coisa</Link>
        <Link className="link" href="">alguma coisa</Link>
      </Footer>
    </LayoutBase>

  );
}
