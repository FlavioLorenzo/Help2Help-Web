import React from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";

import { IntlProvider } from "react-intl";

import getUserLocale from "get-user-locale";
import locale_en from "./lang/en.json";
import locale_it from "./lang/it.json";

import useDeviceDetect from "./hooks/useDeviceDetect";

import Layout from "./hoc/Layout/Layout";
import ExampleComponent2 from "./containers/ExampleComponent2/ExampleComponent2";

import "./App.css";
import Homepage from "./containers/Homepage/Homepage";

// This function takes the locale string and decides the correct language to use
function loadLocaleData(locale) {
    locale = locale.substring(0, 2);

    switch (locale) {
        case "en":
            return locale_en;
        default:
            return locale_it;
    }
}

const App = (props) => {
    const isMobile = useDeviceDetect();

    const userLocale = getUserLocale();

    const localeMessages = loadLocaleData(userLocale);

    let routes = (
        <Switch>
            <Route
                path="/test"
                exact
                render={(props) => <ExampleComponent2 {...props} />}
            />
            <Route
                path="/"
                exact
                render={(props) => <Homepage {...props} isMobile={isMobile} />}
            />
            <Redirect to="/" />
        </Switch>
    );

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
        <IntlProvider
            messages={localeMessages}
            locale={userLocale}
            defaultLocale="it"
        >
            <Layout>{routes}</Layout>
        </IntlProvider>
    );
};

export default withRouter(App);
