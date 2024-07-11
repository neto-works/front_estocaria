import { LayoutBase } from "@/components/Layouts";
import { Footer, NavLink, SideBarRight } from "@/components/Screen";
import Image from 'next/image';
import Link from "next/link";
import ImagemPlataform from "@public/assets/imgs/imagem.png"

export default function Home() {
  return (
    <LayoutBase>
      {/* Content  */}
      <div className={`w-full h-full bg-white p-7 flex flex-col items-center round-side`}>
        <NavLink>
          <Link className="link" href={"/"}> Home</Link>
          <Link className="link" href={"/admin"}> Admin</Link>
          <Link className="link" href={"/signin"}> Login</Link>
          <Link className="link" href={"/teste"}> Tester</Link>
        </NavLink>
        <h6 className={`py-14 lightText`}>Ja pensou em estocar seus produtos de forma inteligente?</h6>
        <h1 className="py-5 text-2xl md:text-5xl lg:text-6xl font-bold text-center text-gray-900 mt-8 mb-12">Estoque seus Produtos</h1>

        {/* Conteudo textual  */}
        <div className="p-5 my-5">
          <p>Em um mundo de negócios competitivo e dinâmico, a gestão de estoque inteligente não é apenas
            uma estratégia, é uma vantagem competitiva. Imagine ter sempre os produtos certos, no lugar certo, no momento
            certo. Isso não só aumenta suas vendas, mas também otimiza seus custos operacionais, reduzindo desperdícios
            e melhorando sua eficiência.
          </p>

          <p>
            Por que escolher Estoque Inteligente?
          </p>

          <p>
            Previsão Precisa: Utilizando dados históricos e algoritmos avançados, o estoque inteligente prevê demandas futuras com precisão, garantindo que você nunca fique sem produtos essenciais.
          </p>

          <p>
            Redução de Custos: Minimize excessos de estoque que ocupam espaço e amarram capital. Com uma gestão eficiente, você reduzirá custos de armazenamento e desperdícios, maximizando seus lucros.
          </p>

          <p>
            Experiência do Cliente: Com produtos sempre disponíveis, você melhora a experiência do cliente. Clientes satisfeitos são mais propensos a retornar e recomendar sua marca.
          </p>

          <p>
            Adaptação Rápida: Em um mercado em constante mudança, a agilidade é fundamental. Estoque inteligente permite ajustes rápidos para novas tendências e mudanças na demanda, mantendo sua empresa à frente da concorrência.
          </p>

        </div>

        <div className="w-full flex content-between">
          <div className="hidden lg:block lg:w-2/3"></div>
          <div className={`hidden lg:block max-w-md z-10`}>
            <Image src={ImagemPlataform} alt="Descrição da imagem" priority={true} />
          </div>
        </div>
      </div>

      {/* Content  */}
      <SideBarRight />
      <Footer />
    </LayoutBase>
  );
}
