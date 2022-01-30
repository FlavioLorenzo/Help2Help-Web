import React from "react";

import styles from "./FormError.module.scss";
import toastError from "../../../assets/images/toastError.svg";

interface FormErrorProps {
    /**
     * Select the specific background where the input box will be placed.
     */
    backgroundColor?: "Gradient" | "White";
    /**
     * What to put within the error message
     */
    children: React.ReactNode;
}

const formError = (props: FormErrorProps) => {
    const formInputClasses = [styles.FormError];
    if (props.backgroundColor === "White") {
        formInputClasses.push(styles.WhiteBackgroundVersion);
    }

    return (
        <div className={formInputClasses.join(" ")}>
            <div className={styles.FormErrorImage}>
                <img src={toastError} alt={"Descrizione"}/>
            </div>
            <div className={styles.FormErrorMessage}>{props.children}</div>
        </div>
    );
};

export default formError;
