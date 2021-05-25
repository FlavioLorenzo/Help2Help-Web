import React from "react";
import { withRouter } from "react-router-dom";

import { IntlProvider } from "react-intl";

import getUserLocale from "get-user-locale";
import locale_en from "./lang/en.json";
import locale_it from "./lang/it.json";

import Layout from "./hoc/Layout/Layout";

import Router from "./router";

import "./App.css";

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
    const userLocale = getUserLocale();

    const localeMessages = loadLocaleData(userLocale);

    return (
        <IntlProvider
            messages={localeMessages}
            locale={userLocale}
            defaultLocale="it"
        >
            <Layout path={props.location.pathname}>
                <Router props={props} />
            </Layout>
        </IntlProvider>
    );
};

export default withRouter(App);
