import { Route, Redirect, RouteProps } from "react-router-dom";
import { useAuth } from "../../../services/auth/AuthContext";

/**
 * Show the component only when the user is logged in
 * Otherwise, redirect the user to the login page
 */
const PrivateRoute = (props: RouteProps) => {
    const { ...rest } = props;
    const { currentUser, isNew } = useAuth();

    if (
        currentUser &&
        isNew &&
        rest.path !== "/onboarding" &&
        rest.path !== "/logout"
    )
        return <Redirect to="/onboarding" />;

    if (currentUser) return <Route {...rest} />;

    return <Redirect to="/login" />;
};

export default PrivateRoute;
