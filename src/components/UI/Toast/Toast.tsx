import React, { useState, useEffect } from "react";

import toastInfo from "../../../assets/images/toastInfo.svg";
import toastWarning from "../../../assets/images/toastWarning.svg";
import toastError from "../../../assets/images/toastError.svg";
import toastSuccess from "../../../assets/images/toastSuccess.svg";

import styles from "./Toast.module.scss";
import { useCallback } from "react";

/*
 * Define a given element for the toast component
 */
export interface ToastElement {
    id: number;
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
    toastList: Array<ToastElement>;
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
    const [list, setList] = useState<Array<ToastElement>>(props.toastList);

    const dismissTime = props.dismissTime ? props.dismissTime : 2000;

    const deleteToast = useCallback((id: number) => {
        const listItemIndex = list.findIndex((e) => e.id === id);
        const toastListItem = props.toastList.findIndex((e) => e.id === id)
        list.splice(listItemIndex, 1);
        props.toastList.splice(toastListItem, 1);
        setList([...list]);
    }, [list, props.toastList]);

    useEffect(() => {
        setList(
            props.toastList.map((toast) => {
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
    }, [props.toastList]);

    useEffect(() => {
        if(props.autodelete && props.toastList.length && list.length) {
            const interval = setInterval(() => {
                deleteToast(props.toastList[0].id);
            }, dismissTime);

            return () => {
                clearInterval(interval);
            }
        }
    }, [props.toastList, props.autodelete, dismissTime, list, deleteToast]);

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
                        <button onClick={() => deleteToast(toast.id)}>X</button>
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
