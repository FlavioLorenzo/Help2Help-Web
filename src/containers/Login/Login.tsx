import React, { useState } from "react";
// import useLogin from "./hooks/useLogin"

import styles from "./Login.module.scss";
import FullGradientCard from "../../components/UI/FullGradientCard/FullGradientCard";

import StandardLogin from "./StandardLogin/StandardLogin";
import EmailLogin from "./EmailLogin/EmailLogin";

interface LoginProps {}

const Login = (props: LoginProps) => {
    const [loginPage, setLoginPage] = useState("standard");

    const goToEmailPage = () => {
        setLoginPage("email");
    };

    const loginWithEmailHandler = (e: any) => {
        e.preventDefault();
        console.log("Logged");
    };

    let loginComponent = <StandardLogin emailPageTextClicked={goToEmailPage} />;
    if (loginPage === "email") {
        loginComponent = <EmailLogin onSubmit={loginWithEmailHandler} />;
    }

    return (
        <FullGradientCard>
            <div className={styles.Login}>{loginComponent}</div>
        </FullGradientCard>
    );
};

export default Login;
