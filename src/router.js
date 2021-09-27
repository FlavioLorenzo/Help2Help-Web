import { Switch, Redirect } from "react-router-dom";

import PublicRoute from "./components/hoc/PublicRoute/PublicRoute";
import PrivateRoute from "./components/hoc/PrivateRoute/PrivateRoute";

import useDeviceDetect from "./hooks/useDeviceDetect";

import SearchResults from "./pages/SearchResults/SearchResults";
import Homepage from "./pages/Homepage/Homepage";
import Authentication from "./pages/Authentication/Authentication";
import Onboarding from "./pages/Onboarding/Onboarding";

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
            <PrivateRoute path={"/search"} component={SearchResults} />
            <PrivateRoute path={"/onboarding"} component={Onboarding} />

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
