import { Route, Redirect, RouteProps } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

/**
 * Show the component only when the user is logged in
 * Otherwise, redirect the user to the login page
 */
const PrivateRoute = (props: RouteProps) => {
    const { ...rest } = props;
    const { currentUser } = useAuth();

    if (currentUser) {
        return <Route {...rest} />;
    } else {
        return <Redirect to="/login" />;
    }
};

export default PrivateRoute;
