import { useState } from "react";

import Header from "../../containers/Header/Header";
import Toast from "../../components/UI/Toast/Toast";

import styles from "./Layout.module.scss";

const Layout = (props) => {
    // TODO: Menu opening is handled like shit - the state is passed through countless components. Refactor it using the already prepared reducer.
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
        case "email-action":
        case "onboarding":
            showHeader = false;
            break;
        case "search":
            searchBarRequired = true;
            backRequired = true;
            break;
        default:
            break;
    }

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const toggleMenuHandler = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    let header = showHeader ? (
        <Header
            isBackRequired={backRequired}
            isSearchBarRequired={searchBarRequired}
            isMenuOpen={isMenuOpen}
            navbarLinkClicked={closeMenu}
            toggleMenuHandler={toggleMenuHandler}
        />
    ) : null;

    return (
        <>
            {header}
            {isMenuOpen ? null : (
                <main className={styles.MobileMain}>{props.children}</main>
            )}
            <Toast position="Top" autodelete />
        </>
    );
};

export default Layout;
