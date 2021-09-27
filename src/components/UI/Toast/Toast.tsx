import React, { useState, useEffect, useCallback } from "react";

import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../../redux/actions/index";
import { RootState } from "../../../redux/reducers/rootReducer";

import toastInfo from "../../../assets/images/toastInfo.svg";
import toastWarning from "../../../assets/images/toastWarning.svg";
import toastError from "../../../assets/images/toastError.svg";
import toastSuccess from "../../../assets/images/toastSuccess.svg";

import styles from "./Toast.module.scss";

/*
 * Define a given element for the toast component
 */
export interface ToastElement {
    title: string;
    description: string;
    type: "Success" | "Error" | "Info" | "Warning";
    /**
     * Icon image, added automatically based on the 'icon' property
     */
    iconPng?: any;
    /**
     * Icon alternative text, added automatically based on the 'icon' property
     */
    iconDesc?: string;
}

interface ToastProps {
    /**
     * List of all the messages that should be printed with a Toast (one object per Toast), with all related properties
     */
    // toastList: Array<ToastElement>;
    /**
     * Placement of the notification container on the page
     */
    position:
        | "Top"
        | "Bottom"
        | "TopRight"
        | "TopLeft"
        | "BottomRight"
        | "BottomLeft";

    autodelete?: boolean;

    dismissTime?: number;
}

const Toast = (props: ToastProps) => {
    const toastMessages = useSelector(
        (state: RootState) => state.toast.toastMessages
    );
    const [list, setList] = useState<Array<ToastElement>>(toastMessages);
    const dismissTime = props.dismissTime ? props.dismissTime : 3000;

    const dispatch = useDispatch();

    const deleteToast = useCallback(
        (i: number) => {
            list.splice(i, 1);
            dispatch(actions.setToastEraseMessage(i));
            setList([...list]);
        },
        [list, dispatch]
    );

    useEffect(() => {
        setList(
            toastMessages.map((toast: ToastElement) => {
                let iconPng, iconDesc;

                switch (toast.type) {
                    case "Success":
                        iconPng = toastSuccess;
                        iconDesc = "success message icon";
                        break;
                    case "Error":
                        iconPng = toastError;
                        iconDesc = "error message icon";
                        break;
                    case "Info":
                        iconPng = toastInfo;
                        iconDesc = "info message icon";
                        break;
                    case "Warning":
                        iconPng = toastWarning;
                        iconDesc = "warning message icon";
                        break;
                }
                return {
                    ...toast,
                    iconPng: iconPng,
                    iconDesc: iconDesc,
                };
            })
        );
    }, [toastMessages]);

    useEffect(() => {
        if (props.autodelete && toastMessages.length && list.length) {
            const interval = setInterval(() => {
                deleteToast(0);
            }, dismissTime);

            return () => {
                clearInterval(interval);
            };
        }
    }, [toastMessages, props.autodelete, dismissTime, list, deleteToast]);

    // TODO: Style the button in a way that does not resemble a rotten goblin on mobile and has a bit more personality than a pebble
    return (
        <div
            className={[
                styles.NotificationContainer,
                styles[props.position],
            ].join(" ")}
        >
            {list.map((toast, i) => (
                <div
                    key={i}
                    className={[
                        styles.Notification,
                        styles.Toast,
                        styles[props.position],
                        styles[toast.type],
                    ].join(" ")}
                >
                    <button onClick={() => deleteToast(i)}>X</button>
                    <div className={styles.NotificationImage}>
                        <img src={toast.iconPng} alt={toast.iconDesc} />
                    </div>
                    <div>
                        <p className={styles.NotificationTitle}>
                            {toast.title}
                        </p>
                        <p className={styles.NotificationMessage}>
                            {toast.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Toast;
