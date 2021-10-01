import React from "react";

import styles from "./FormError.module.scss";
import toastError from "../../../assets/images/toastError.svg";

interface FormErrorProps {
    /**
     * What to put within the error message
     */
    children: React.ReactNode;
}

const formError = (props: FormErrorProps) => {
    return (
        <div className={styles.FormError}>
            <div className={styles.FormErrorImage}>
                <img src={toastError} alt={"Descrizione"} />
            </div>
            <div className={styles.FormErrorMessage}>{props.children}</div>
        </div>
    );
};

export default formError;
