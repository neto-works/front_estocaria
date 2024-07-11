import { ReactNode } from "react";
import Styles from "./layoutAdmin.module.css"

interface LayoutAdminProps {
    children: Array<React.ReactNode>;
}

const LayoutAdmin: React.FC<LayoutAdminProps> = ({ children }): ReactNode => {
    const [sidebarChildren,contentChildren,footerChildren] = children;
    return (
        <div className={`${Styles.layoutadmin} bg-white`}>
            <aside className={`${Styles.aside}`}>{sidebarChildren}</aside>
            <main className={`${Styles.main}`}>{contentChildren}</main>
            <footer className={`${Styles.footer} lg:h-max-44`}>{footerChildren}</footer>
        </div>
    );
};

export default LayoutAdmin;