import React from "react";

import styles from "./Button.module.scss";

interface ButtonProps {
    /**
     * Select the specific style of the button.
     */
    colorStyle: "White" | "Green" | "Orange" | "Pink" | "LightBlue";
    /**
     * Whether the button should be small
     */
    small?: boolean;
    /**
     * Whether the button should be filled with color or just have the outline
     */
    outline?: boolean;
    /**
     * Whether the button should have shadow
     */
    shadow?: boolean;
    /**
     * If the button is currently selected
     */
    active?: boolean;
    /**
     * If the button has type "submit" (to be used within forms)
     */
    submit?: boolean;
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
    clicked?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    /**
     * What to put within the button
     */
    children: React.ReactNode;
}

const Button = (props: ButtonProps) => {
    const classes = [styles.Button, styles[props.colorStyle]];

    if (props.outline) {
        classes.push(styles.Outline);
    }
    if (props.small) {
        classes.push(styles.Small);
    }
    if (props.shadow) {
        classes.push(styles.Shadow);
    }
    if (props.active) {
        classes.push(styles.Active);
    }

    return (
        <button
            disabled={props.disabled}
            value={props.value}
            className={classes.join(" ")}
            onClick={props.clicked}
            type={props.submit ? "submit" : "button"}
        >
            {props.children}
        </button>
    );
};

export default Button;
