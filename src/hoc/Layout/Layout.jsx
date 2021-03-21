import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import Aux from "../Auxiliary/Auxiliary";

import styles from "./Layout.module.scss";

import profileImage from "../../assets/images/example_profile.jpg";

const Layout = (props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isBackRequired = useSelector((state) => state.layout.isBackRequired);
    const backLocation = useSelector((state) => state.layout.backLocation);
    const isSearchBarRequired = useSelector(
        (state) => state.layout.isSearchBarRequired
    );
    const history = useHistory();

    const toggleMenuHandler = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const goBack = () => {
        history.push({
            pathname: backLocation,
        });
    };

    // Act upon detecting the click of the search bar
    const setHistoryFromMenu = (searchInput) => {
        history.push({
            pathname: "/search",
            search: "?t:organizations&q:" + searchInput,
        });
    };

    return (
        <Aux>
            <Toolbar
                imageSrc={profileImage}
                menuToggleClicked={toggleMenuHandler}
                isMenuOpen={isMenuOpen}
                backRequired={isBackRequired}
                backButtonClicked={goBack}
                searchBarRequired={isSearchBarRequired}
                searchBarTriggered={setHistoryFromMenu}
            ></Toolbar>
            {isMenuOpen ? null : (
                <main className={styles.MobileMain}>{props.children}</main>
            )}
        </Aux>
    );
};

export default Layout;
