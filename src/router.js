import { Switch, Redirect } from "react-router-dom";

import PublicRoute from "./hoc/PublicRoute/PublicRoute";
import PrivateRoute from "./hoc/PrivateRoute/PrivateRoute";

import useDeviceDetect from "./hooks/useDeviceDetect";

import SearchResults from "./containers/SearchResults/SearchResults";
import Homepage from "./containers/Homepage/Homepage";
import Authentication from "./containers/Authentication/Authentication";

const Router = () => {
    const isMobile = useDeviceDetect();

    return (
        <Switch>
            <PrivateRoute
                path="/"
                exact
                component={Homepage}
                isMobile={isMobile}
            />
            <PrivateRoute path="/search" component={SearchResults} />

            {/* AUTHENTICATION - the exact routing is properly handled in the Authentication component */}
            <PublicRoute
                restricted
                path={[
                    "/login",
                    "/signUp",
                    "/password-recovery",
                    "/email-action",
                ]}
                component={Authentication}
            />
            <PrivateRoute
                path="/logout"
                component={Authentication}
            ></PrivateRoute>

            <Redirect to="/" />
        </Switch>
    );
};

export default Router;
