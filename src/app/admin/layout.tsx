import { LayoutAdmin } from "@/components/Layouts";
import { Footer, SideBar } from "@/components/Screen";
import ButtonLogout from "./buttonlogout";

export default function AdminRootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {

    return (
        <LayoutAdmin>
            <SideBar>
                <ButtonLogout />
            </SideBar>
            {children}
            <Footer />
        </LayoutAdmin >
    );
}
