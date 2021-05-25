import { Route, Switch, Redirect } from "react-router-dom";

import useDeviceDetect from "./hooks/useDeviceDetect";

import SearchResults from "./containers/SearchResults/SearchResults";
import Homepage from "./containers/Homepage/Homepage";
import Authentication from "./containers/Authentication/Authentication";

const Router = () => {
    const isMobile = useDeviceDetect();

    /*
        if(this.props.isAuthenticated) {
            routes = ( 
            <Switch>
                <Route path="/" exact component={ExampleComponent}/>
                <Redirect to="/"/>
            </Switch>
            )
        }
    */

    return (
        <Switch>
            <Route
                path="/"
                exact
                render={(props) => <Homepage {...props} isMobile={isMobile} />}
            />
            <Route
                path="/search"
                render={(props) => <SearchResults {...props} />}
            />

            {/* AUTHENTICATION - the exact routing is properly handled in the Authentication component */}
            <Route
                path={["/login", "/signUp", "/restorePassword"]}
                render={(props) => <Authentication {...props} />}
            />

            <Redirect to="/" />
        </Switch>
    );
};

export default Router;
