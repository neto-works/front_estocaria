export interface IButtonGenericProps {
    classButton?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark" | "link";
    padrao?: "rounded";
    body?: "outline" | "default";
    disable: boolean;
    quantClicksDisable: number;
    label: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export interface IButtonGenericState {
    disable: boolean;
    clicks:number;
}