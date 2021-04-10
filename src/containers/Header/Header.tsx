import React, { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SearchTarget from "../../components/Navigation/SearchTarget/SearchTarget";

import profileImage from "../../assets/images/example_profile.jpg";
import { RootState } from "../../store/reducers/rootReducer";

interface HeaderProps {
    isMenuOpen: boolean;
    toggleMenuHandler(): void;
}

const Header = (props: HeaderProps) => {
    // TODO: Include indication about volunteer
    // Setting the filter based on user type (volunteer / association)
    const [searchTarget, setSearchTarget] = useState(false);

    const isBackRequired = useSelector(
        (state: RootState) => state.layout.isBackRequired
    );
    const backLocation = useSelector(
        (state: RootState) => state.layout.backLocation
    );
    const isSearchBarRequired = useSelector(
        (state: RootState) => state.layout.isSearchBarRequired
    );
    const history = useHistory();

    const goBack = () => {
        history.push({
            pathname: backLocation,
        });
    };

    // Act upon detecting the click of the search bar
    const setHistoryFromMenu = (searchInput: string) => {
        history.push({
            pathname: "/search",
            search: "?t=organizations&q=" + searchInput,
        });
    };

    return (
        <>
            <Toolbar
                imageSrc={profileImage}
                menuToggleClicked={props.toggleMenuHandler}
                isMenuOpen={props.isMenuOpen}
                backRequired={isBackRequired}
                backButtonClicked={goBack}
                searchBarRequired={isSearchBarRequired}
                searchBarTriggered={setHistoryFromMenu}
            ></Toolbar>
            {
                //<SearchTarget />
            }
        </>
    );
};

export default Header;
