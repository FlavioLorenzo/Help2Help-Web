import { Route, Switch, Redirect } from "react-router-dom";

import * as Login from "./Login/Login";
import * as SignUp from "./SignUp/SignUp";
import * as PasswordRecovery from "./PasswordRecovery/PassswordRecovery";

/**
 * Dedicated router for the authentication-related sections
 */
const AuthRouter = (props) => {
    return (
        <Switch>
            <Route
                exact
                path={["/login", "/login/volunteer"]}
                render={(props) => <Login.VolunteerStandardLogin {...props} />}
            />
            <Route
                exact
                path="/login/volunteer/email"
                render={(props) => <Login.VolunteerEmailLogin {...props} />}
            />
            <Route
                exact
                path="/login/organization"
                render={(props) => <Login.OrganizationLogin {...props} />}
            />

            <Route
                exact
                path={["/signup", "/signup/volunteer"]}
                render={(props) => <SignUp.VolunteerSignUp {...props} />}
            />
            <Route
                exact
                path={"/signup/organization"}
                render={(props) => <SignUp.OrganizationSignUp {...props} />}
            />

            <Route
                exact
                path={["/password-recovery", "/password-recovery/volunteer"]}
                render={(props) => (
                    <PasswordRecovery.VolunteerPasswordRecovery {...props} />
                )}
            />
            <Route
                exact
                path={"/password-recovery/organization"}
                render={(props) => (
                    <PasswordRecovery.OrganizationPasswordRecovery {...props} />
                )}
            />

            <Redirect to="/login" />
        </Switch>
    );
};

export default AuthRouter;
