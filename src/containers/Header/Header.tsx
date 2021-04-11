import React from "react";

import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SearchTarget from "../../components/Navigation/SearchTarget/SearchTarget";

import profileImage from "../../assets/images/example_profile.jpg";

import styles from "./Header.module.scss";
import useHeader from "./hooks/useHeader";

interface HeaderProps {
    isMenuOpen: boolean;
    toggleMenuHandler(): void;
}

const Header = (props: HeaderProps) => {
    const {
        isBackRequired,
        goBack,
        searchQuery,
        searchTarget,
        isSearchBarRequired,
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
                    backRequired={isBackRequired}
                    backButtonClicked={goBack}
                    searchQuery={searchQuery}
                    searchBarRequired={isSearchBarRequired}
                    searchBarTriggered={setSearchQuery}
                ></Toolbar>
            </div>

            {isSearchBarRequired ? (
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
