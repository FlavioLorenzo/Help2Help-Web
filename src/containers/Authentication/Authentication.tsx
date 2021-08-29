import AuthRouter from "./Authentication.routing";
import FullGradientFormContainer from "../../components/UI/FullGradientFormContainer/FullGradientFormContainer";

interface AuthenticationProps {}

const Authentication = (props: AuthenticationProps) => {
    return (
        <FullGradientFormContainer>
            <AuthRouter props={props} />
        </FullGradientFormContainer>
    );
};

export default Authentication;
