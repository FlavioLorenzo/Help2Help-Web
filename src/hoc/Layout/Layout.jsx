import React, { useState } from "react";
import { useSelector } from "react-redux";

import Aux from "../Auxiliary/Auxiliary";
import Header from "../../containers/Header/Header";

import styles from "./Layout.module.scss";

const Layout = (props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    let showHeader = true;
    let searchBarRequired = false;
    let backRequired = false;
    switch (props.path) {
        case "/login":
            showHeader = false;
            break;
        case "/search":
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
