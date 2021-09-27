import { Route, Redirect, RouteProps } from "react-router-dom";
import { useAuth } from "../../../services/auth/AuthContext";

interface PublicRouteProps extends RouteProps {
    restricted: boolean;
}

/**
 * Represents either a restricted or public route (based on the 'restricted' prop).
 * If restricted, the page should not be accessed by a logged in user.
 */
const PublicRoute = (props: PublicRouteProps) => {
    const { restricted, ...rest } = props;
    const { currentUser } = useAuth();

    if (restricted && currentUser) {
        return <Redirect to="/" />;
    } else {
        return <Route {...rest} />;
    }
};

export default PublicRoute;
