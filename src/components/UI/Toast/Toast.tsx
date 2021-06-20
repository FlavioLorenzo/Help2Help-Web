import React, {useState, useEffect} from "react";

import styles from "./Toast.module.scss";

/*
 * Define a given element for the toast component
 */
interface ToastElement {
    id: number;
    title: string;
    description: string;
    backgroundColor: string;
    icon: 'success' | 'error' | 'info' | 'warning';
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
    position: 'Top' | 'Bottom' | 'TopRight' | 'TopLeft' | 'BottomRight' | 'BottomLeft';
}

const Toast = (props: ToastProps) => {
    const [list, setList] = useState<Array<ToastElement>>(props.toastList);

    useEffect(() => {
        setList(props.toastList.map((toast) => {
            let iconPng, iconDesc;

            switch (toast.icon) {
                case 'success':
                    iconPng= 'X'
                    iconDesc= 'success message icon'
                    break;
                case 'error':
                    iconPng= 'X'
                    iconDesc= 'error message icon'
                    break;
                case 'info':
                    iconPng= 'X'
                    iconDesc= 'info message icon'
                    break;
                case 'warning':
                    iconPng= 'X'
                    iconDesc= 'warning message icon'
                    break;
            }
            return {
                ...toast,
                iconPng: iconPng,
                iconDesc: iconDesc
            }
        }));
    }, [props.toastList, list]);

    return (
        <>
            <div className={[styles.NotificationContainer, styles[props.position]].join(" ")}>
                {
                    list.map((toast, i) => (
                        <div 
                            key={i} 
                            className={[styles.Notification, styles.Toast, styles[props.position]].join(" ")}
                            style={{ backgroundColor: toast.backgroundColor }}
                         >
                            <button>X</button>
                            <div className={styles.NotificationImage}>
                                <img src={toast.iconPng} alt={toast.iconDesc} />
                            </div>
                            <div>
                                <p className={styles.NotificationTitle}>{toast.title}</p>
                                <p className={styles.NotificationMessage}>{toast.description}</p>
                            </div>
                        </div>
                        )
                    )
                }
                
            </div>
        </>
    );
};

export default Toast;
