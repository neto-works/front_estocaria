import { LayoutAdmin } from "@/components/Layouts";
import { Footer, SideBar } from "@/components/Screen";
import Link from "next/link";

export default function AdminRootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {

    return (
        <LayoutAdmin>
            {children}
            <SideBar />
            <Footer tituloPrimary="Parcerias" tituloSecondary="Contatos" tituloTertiary="Outros">
                <Link className="link" href="">alguma coisa</Link>
                <Link className="link" href="">alguma coisa</Link>
            </Footer>
        </LayoutAdmin>
    );
}
