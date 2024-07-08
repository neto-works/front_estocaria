import { ReactNode } from "react";

interface LayoutAdminProps {
    children: Array<React.ReactNode>;
}

const LayoutAdmin: React.FC<LayoutAdminProps> = ({ children }): ReactNode => {
    const [contentChildren, sidebarChildren, footerChildren] = children;
    return (
        <div className="w-full min-h-screen grid grid-rows-8 grid-cols-12 bg-white">
            {/* Sidebar que deve aparecer apenas em telas maiores */}
            <div className="w-full h-full col-span-1 md:col-span-3 row-span-6 md:block hidden">{sidebarChildren}</div>

            {/* Conteúdo principal, ocupando duas colunas */}
            <div className="w-full h-full col-span-11 md:col-span-8 row-span-6">{contentChildren}</div>

            {/* Rodapé, ocupando duas colunas */}
            <div className="w-full  h-full col-span-12 row-span-2">{footerChildren}</div>
        </div>
    );
};

export default LayoutAdmin;