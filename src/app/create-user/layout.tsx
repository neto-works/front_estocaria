import { LayoutBase } from "@/components/Layouts";
import { Footer, SideBarRight } from "@/components/Screen";

export default function RegisterLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <LayoutBase>
            {children}
            <SideBarRight />
            <Footer />
        </LayoutBase>);
}