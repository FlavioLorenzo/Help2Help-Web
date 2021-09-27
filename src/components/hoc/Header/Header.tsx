import React from "react";

import Toolbar from "../../navigation/Toolbar/Toolbar";
import SearchTarget from "../../navigation/SearchTarget/SearchTarget";

import profileImage from "../../../assets/images/example_profile.jpg";

import styles from "./Header.module.scss";
import useHeader from "./hooks/useHeader";

interface HeaderProps {
    isBackRequired: boolean;
    isSearchBarRequired: boolean;
    isMenuOpen: boolean;
    navbarLinkClicked(): void;
    toggleMenuHandler(): void;
}

const Header = (props: HeaderProps) => {
    const {
        goBack,
        searchQuery,
        searchTarget,
        setSearchQuery,
        setSearchTarget,
    } = useHeader();

    return (
        <>
            <div className={styles.Toolbar}>
                <Toolbar
                    imageSrc={profileImage}
                    menuToggleClicked={props.toggleMenuHandler}
                    isMenuOpen={props.isMenuOpen}
                    backRequired={props.isBackRequired}
                    backButtonClicked={goBack}
                    searchQuery={searchQuery}
                    searchBarRequired={props.isSearchBarRequired}
                    searchBarTriggered={setSearchQuery}
                    navbarLinkClicked={props.navbarLinkClicked}
                ></Toolbar>
            </div>

            {props.isSearchBarRequired ? (
                <div className={styles.SearchTargetBar}>
                    <SearchTarget
                        currentView={searchTarget}
                        searchTargetButtonClicked={setSearchTarget}
                    />
                </div>
            ) : null}
        </>
    );
};

export default Header;
