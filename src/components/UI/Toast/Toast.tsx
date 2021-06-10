import React from "react";

import styles from "./Toast.module.scss";

interface ToastProps {
    /**
     * Array that contains objects...
     */
    toastList?: Array<any>;
    /**
     * Placement of the notification container on the page
     */
    position?: string;
}

const toast = (props: ToastProps) => {
    return (
        <>
            <div className={styles.NotificationContainer}>
                <div className={[styles.Notification, styles.Toast].join(" ")}>
                    <button>X</button>
                    <div className={styles.NotificationImage}>
                        <img src="" alt="" />
                    </div>
                    <div>
                        <p className={styles.NotificationTitle}>Title</p>
                        <p className={styles.NotificationMessage}>Message</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default toast;
