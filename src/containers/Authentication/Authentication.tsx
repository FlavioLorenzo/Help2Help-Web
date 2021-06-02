import React from "react";
// import useLogin from "./hooks/useLogin"

import styles from "./Authentication.module.scss";
import FullGradientCard from "../../components/UI/FullGradientCard/FullGradientCard";
import AuthRouter from "./Authentication.routing";

interface AuthenticationProps {}

const Authentication = (props: AuthenticationProps) => {
    return (
        <>
            <FullGradientCard />
            <div className={styles.Authentication}>
                <AuthRouter props={props} />
            </div>
        </>
    );
};

export default Authentication;
