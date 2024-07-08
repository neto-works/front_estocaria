import { ReactNode } from "react";

interface GridAminCardsProps {
    children: Array<React.ReactNode>;
}

const GridAminCards: React.FC<GridAminCardsProps> = ({ children }): ReactNode => {
    const [n1, n2, n3, n4, n5, n6, n7, n8] = children;
    
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 auto-rows-auto gap-4 p-4">
            <div className=" p-4">{n1}</div>
            <div className=" p-4">{n2}</div>
            <div className=" p-4">{n3}</div>
            <div className=" p-4">{n4}</div>
            <div className=" p-4">{n5}</div>
            <div className=" p-4">{n6}</div>
            <div className=" p-4">{n7}</div>
            <div className=" p-4">{n8}</div>
        </div>

    );
};

export default GridAminCards;