import React from "react";

import classes from "./Button.module.scss";

interface ButtonProps {
    /**
     * Select the specific style of the button.
     */
    btnStyle: "White" | "Green" | "Orange" | "Pink" | "LightBlue";
    /**
     * Whether the component can be interacted with
     */
    disabled?: boolean;
    /**
     * Value assigned to the button
     */
    value?: string;
    /**
     * Function triggered upon clicking the button
     */
    clicked(e: React.MouseEvent<HTMLButtonElement>): void;
    /**
     * What to put within the button
     */
    children: React.ReactNode;
}

const button = (props: ButtonProps) => {
    return (
        <button
            disabled={props.disabled}
            value={props.value}
            className={[classes.Button, classes[props.btnStyle]].join(" ")}
            onClick={props.clicked}
        >
            {props.children}
        </button>
    );
};

export default button;
