import { Route, Switch, Redirect } from "react-router-dom";

import * as Login from "./Login/Login";
import * as SignUp from "./SignUp/SignUp";
import * as PasswordRecovery from "./PasswordRecovery/PasswordRecovery";
import * as EmailAction from "./EmailAction/EmailAction";
import Logout from "./Logout/Logout";

/**
 * Dedicated router for the authentication-related sections
 */
const AuthRouter = (props) => {
    return (
        <Switch>
            {/* Login */}
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

            {/* Sign Up */}
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

            {/* Password Recovery */}
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

            <Route
                exact
                path={["/password-recovery/volunteer/new-password"]}
                render={(props) => (
                    <PasswordRecovery.VolunteerNewPassword {...props} />
                )}
            />

            <Route
                exact
                path={"/password-recovery/organization/new-password"}
                render={(props) => (
                    <PasswordRecovery.OrganizationNewPassword {...props} />
                )}
            />

            {/* Email actions */}
            <Route
                exact
                path={"/email-action"}
                render={(props) => (
                    <EmailAction.VolunteerEmailAction {...props} />
                )}
            />

            {/* Logout */}
            <Route path={"/logout"} render={(props) => <Logout {...props} />} />

            {/* Default to logint */}
            <Redirect to="/login" />
        </Switch>
    );
};

export default AuthRouter;
