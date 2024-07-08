"use client";
import { Component } from "react";
import { IButtonGenericProps, IButtonGenericState } from "./ButtonGeneric.Types";

export default class ButtonGeneric extends Component<IButtonGenericProps, IButtonGenericState> {
    constructor(props: IButtonGenericProps) {
        super(props);
        this.state = {
            disable: props.disable || false,
            clicks: 0,
        };
    }

    componentDidUpdate(prevProps: IButtonGenericProps) {
        if (prevProps.disable !== this.props.disable) {
            this.setState({ disable: this.props.disable });
        }
    }

    handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const { onClick, quantClicksDisable } = this.props;
        onClick(event);

        this.setState(prevState => ({ clicks: prevState.clicks + 1 }));

        if (quantClicksDisable > 0 && this.state.clicks >= quantClicksDisable) {
            this.setState({ disable: true });
        }
    };

    render() {
        const { label, classButton, padrao } = this.props;
        const { disable } = this.state;

        return (
            // <button className={`btn ${classButton ? "btn-" + classButton : ""} ${padrao === "rounded" ? "btnr" : ""} `} onClick={this.handleClick} disabled={disable}>
            <button className="btn-primary text-white font-bold py-2 px-4 rounded" onClick={this.handleClick} disabled={disable}>
                {label}
            </button>
        );
    }
}