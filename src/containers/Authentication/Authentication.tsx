import { useRef, useEffect, useState } from "react";
// import useLogin from "./hooks/useLogin"

import styles from "./Authentication.module.scss";
import FullGradientCard from "../../components/UI/FullGradientCard/FullGradientCard";
import AuthRouter from "./Authentication.routing";
import { useHistory } from "react-router";

interface AuthenticationProps {}

const Authentication = (props: AuthenticationProps) => {
    const [classes, setClasses] = useState([styles.Authentication]);
    const authenticationDivRef = useRef<HTMLDivElement>(null);
    const history = useHistory();

    useEffect(() => {
        const offsetHeight = authenticationDivRef.current?.offsetHeight;
        const newClasses = [styles.Authentication];

        if (offsetHeight && window.innerHeight < offsetHeight + 50) {
            newClasses.push(styles.AuthenticationLongForm);
        }

        setClasses(newClasses);
    }, [history.location.pathname]);

    return (
        <>
            <FullGradientCard />
            <div className={classes.join(" ")} ref={authenticationDivRef}>
                <AuthRouter props={props} />
            </div>
        </>
    );
};

export default Authentication;
