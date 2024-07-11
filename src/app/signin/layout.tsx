import { LayoutBase } from "@/components/Layouts";
import { Footer, SideBarRight } from "@/components/Screen";
import Link from "next/link";

export default function SinginLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <LayoutBase>
            {children}
            <SideBarRight />
            <Footer />
        </LayoutBase>);
}