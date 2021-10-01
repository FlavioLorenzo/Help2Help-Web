import React, { useState, useEffect, useRef } from "react";
import { useIntl } from "react-intl";
import PropTypes from "prop-types";

import NavBurger from "./NavBurger/NavBurger";
import SideDrawer from "../SideDrawer/SideDrawer";
import SearchBar from "../../ui/SearchBar/SearchBar";

import styles from "./Toolbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const Toolbar = (props) => {
    const headerEl = useRef(null);

    // Store the search input value. Initialized with the value currently being queued
    const [searchInput, setSearchInput] = useState("");
    const searchQuery = props.searchQuery;
    useEffect(() => {
        setSearchInput(searchQuery ? searchQuery : "");
    }, [searchQuery]);

    // Internationalization support
    const intl = useIntl();
    const imageAlt = intl.formatMessage({
        id: "user_menu_profile_photo_alt_text",
        defaultMessage: "La mia foto utente",
        description: "Alt text for image of the current user",
    });

    // Define toolbar style based on menu being opened
    let toolbarClasses = [styles.Toolbar];
    if (props.isMenuOpen) {
        toolbarClasses.push(styles.WithMenuOpened);
    }

    // Define user image style based on menu being opened
    let imageContainerClasses = [styles.UserImageContainer];
    if (props.isMenuOpen) {
        imageContainerClasses.push(styles.WithMenuOpened);
    }

    const onMenuToggleClicked = () => {
        if (props.isMenuOpen) {
            headerEl.current.scrollTop = 0;
        }
        props.menuToggleClicked();
    };

    // If needed introduce the search bar and related functionalities
    let searchBar = null;
    if (props.searchBarRequired) {
        // Detect that the value inside the search bar has changed
        const onSearchBarChanged = (event) => {
            setSearchInput(event.target.value);
        };

        // Act upon detecting the click of the search bar
        const onSearchBarClicked = () => {
            props.searchBarTriggered(searchInput);
        };

        // Add the search bar to the menu
        searchBar = (
            <div className={styles.SearchBarContainer}>
                <SearchBar
                    placeholder="test"
                    value={searchInput}
                    small
                    clicked={onSearchBarClicked}
                    changed={(event) => {
                        onSearchBarChanged(event);
                    }}
                />
            </div>
        );
    }

    // Decide which button to display (burger or back)
    let navTopLeftButton = (
        <div className={styles.NavBurgerIconContainer}>
            <NavBurger
                clicked={onMenuToggleClicked}
                isMenuOpen={props.isMenuOpen}
            />
        </div>
    );
    if (props.backRequired) {
        const handleKeyPress = (event) => {
            if (event.key === "Enter") {
                props.backButtonClicked();
            }
        };

        navTopLeftButton = (
            <div
                className={styles.BackIconContainer}
                onClick={() => props.backButtonClicked()}
                onKeyDown={handleKeyPress}
                role="button"
                tabIndex={0}
            >
                <FontAwesomeIcon icon={faChevronLeft} />
            </div>
        );
    }

    return (
        <header className={toolbarClasses.join(" ")} ref={headerEl}>
            {navTopLeftButton}

            {props.searchBarRequired ? searchBar : null}

            <div className={imageContainerClasses.join(" ")}>
                <img
                    className={styles.UserImage}
                    src={props.imageSrc}
                    alt={imageAlt}
                />
            </div>

            {props.isMenuOpen ? (
                <SideDrawer
                    isMenuOpen={props.isMenuOpen}
                    navClicked={props.navbarLinkClicked}
                />
            ) : null}
        </header>
    );
};

Toolbar.propTypes = {
    /**
     * True if menu is open.
     */
    isMenuOpen: PropTypes.bool,
    /**
     * Action to be trigggered upon clicking on the navigation menu burger
     */
    menuToggleClicked: PropTypes.func,
    /**
     * Image for the profile picture of the user
     */
    imageSrc: PropTypes.string,
    /**
     * Whether to display the back button instead of the hamburger
     */
    backRequired: PropTypes.bool,
    /**
     * Fire when the back button has been clicked
     */
    backButtonClicked: PropTypes.func,
    /**
     * The value currently being searched by the user
     */
    searchQuery: PropTypes.string,
    /**
     * Whether the search bar should be displayed on top of the page
     */
    searchBarRequired: PropTypes.bool,
    /**
     * Action to perform when search bar gets triggered (enter or click on the lens)
     */
    searchBarTriggered: PropTypes.func,
    /**
     * Action to perform upon clicking a navbar item
     */
    navbarLinkClicked: PropTypes.func,
};

export default Toolbar;
