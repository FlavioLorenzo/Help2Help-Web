import React from "react";
// import useLogin from "./hooks/useLogin"

import styles from "./Authentication.module.scss";
import FullGradientCard from "../../components/UI/FullGradientCard/FullGradientCard";
import AuthRouter from "./Authentication.routing";

interface AuthenticationProps {}

const Authentication = (props: AuthenticationProps) => {
    /**const goToEmailPage = () => {
        setLoginPage("email");
    };

    const loginWithEmailHandler = (e: any) => {
        e.preventDefault();
        console.log("Logged");
    };

    let loginComponent = <StandardLogin emailPageTextClicked={goToEmailPage} />;
    if (loginPage === "email") {
        loginComponent = <EmailLogin onSubmit={loginWithEmailHandler} />;
    }*/

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
