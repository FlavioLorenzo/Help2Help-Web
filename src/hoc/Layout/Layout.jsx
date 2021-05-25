import React, { useState } from "react";

import Aux from "../Auxiliary/Auxiliary";
import Header from "../../containers/Header/Header";

import styles from "./Layout.module.scss";

const Layout = (props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    let showHeader = true;
    let searchBarRequired = false;
    let backRequired = false;

    // Set a number of properties for the page. For simplicity, we will only use the first part of the path
    // e.g. the pate /login/volunteers will be simply evaluated as login
    const path = props.path.split("/");
    switch (path[1]) {
        case "login":
        case "signup":
        case "password-recovery":
            showHeader = false;
            break;
        case "search":
            searchBarRequired = true;
            backRequired = true;
            break;
        default:
            break;
    }

    const toggleMenuHandler = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    let header = showHeader ? (
        <Header
            isBackRequired={backRequired}
            isSearchBarRequired={searchBarRequired}
            isMenuOpen={isMenuOpen}
            toggleMenuHandler={toggleMenuHandler}
        />
    ) : null;

    return (
        <Aux>
            {header}
            {isMenuOpen ? null : (
                <main className={styles.MobileMain}>{props.children}</main>
            )}
        </Aux>
    );
};

export default Layout;
