import AuthRouter from "./Authentication.routing";

interface AuthenticationProps {
}

const Authentication = (props: AuthenticationProps) => {
    return (
        <AuthRouter props={props}/>
    );
};

export default Authentication;
