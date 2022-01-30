import {useState} from "react";

import {UseFormRegister} from "react-hook-form";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";

import FormError from "../FormError/FormError";

import styles from "./FullGradientFormField.module.scss";
import {useEffect} from "react";

interface FullGradientFormFieldProps {
    /**
     * Text of the label for the form
     */
    label: any;
    /**
     * Label used to identify the field into React Hook Form
     */
    registerLabel: string;
    /**
     * Type of input box requested
     */
    type: string;
    /**
     * Placeholder text for the input field
     */
    placeholder?: string;
    /**
     * To be used for enhancing form field automatic completion
     */
    autoComplete?: string;
    /**
     * Whether thee field is required
     */
    required?: boolean;
    /**
     * Max number of characters alowed for the input component
     */
    maxLength?: number;
    /**
     * Error text to show when error occurs
     */
    error?: any;
    /**
     * Register function to connect to React Hook Form for form validation
     */
    register: UseFormRegister<any>;
    /**
     * Select the specific background where the input box will be placed.
     */
    backgroundColor?: "Gradient" | "White";
}

const FullGradientFormField = (props: FullGradientFormFieldProps) => {
    const [hide, setHide] = useState<boolean>(true);
    const [actualType, setActualType] = useState<string>(props.type);

    const formInputClasses = [];
    if (props.error) {
        formInputClasses.push(styles.Error);
    }
    if (props.type === "password") {
        formInputClasses.push(styles.Password);
    }

    // If input is of type "password", add the possibility to toggle password visibility.
    let passwordEye = null;
    if (props.type === "password") {
        passwordEye = (
            <span
                className={styles.PasswordEye}
                onClick={() => {
                    setHide(!hide);
                }}
            >
                <FontAwesomeIcon icon={hide ? faEye : faEyeSlash}/>
            </span>
        );
    }

    let formError = <FormError>{props.error}</FormError>;
    switch (props.backgroundColor) {
        case "White":
            formInputClasses.push(styles.WhiteBackgroundVersion);
            formError = <FormError backgroundColor="White">{props.error}</FormError>;
            break;
    }

    // Effect triggered upon toggling password visibility to switch password input type
    useEffect(() => {
        props.type === "password" && hide
            ? setActualType("password")
            : setActualType("text");
    }, [props.type, hide]);

    return (
        <div className={styles.FullGradientFormField}>
            <label>
                <div className={styles.FullGradientFormLabel}>
                    {props.label}
                </div>

                <div className={styles.FullGradientFormInput}>
                    <input
                        className={formInputClasses.join(" ")}
                        {...props.register(props.registerLabel)}
                        type={actualType}
                        autoComplete={props.autoComplete}
                        maxLength={props.maxLength}
                    />

                    {passwordEye}
                </div>
            </label>
            {props.error ? formError : ""}
        </div>
    );
};

export default FullGradientFormField;
