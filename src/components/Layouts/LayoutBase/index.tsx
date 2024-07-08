import { ReactNode } from "react";
import Styles from "./layout.module.css";

interface LayoutBaseProps {
    children: Array<React.ReactNode>;
}

const LayoutBase: React.FC<LayoutBaseProps> = ({ children }): ReactNode => {
    const [contentChildren, sidebarChildren, footerChildren] = children;
    return (
        <div className={`w-full m-0 p-0 h-auto ${Styles.layotBase}`}>
            <main className={`${Styles.main}`}>{contentChildren}</main><aside className={`${Styles.aside}`}>{sidebarChildren}</aside>
            <footer className={`${Styles.footer}`}>{footerChildren}</footer>
        </div>
    );
};

export default LayoutBase;