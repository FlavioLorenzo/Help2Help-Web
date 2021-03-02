import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import styles from "./SearchBar.module.scss";

import PropTypes from "prop-types";

const searchBar = (props) => {
    const onInputFormKeyPressed = (event) => {
        if (event.key === "Enter") {
            props.clicked();
        }
    };

    const onSearchIconClicked = (event) => {
        if (event.key === "Enter") {
            props.clicked();
        }
    };

    // Styling
    const searchBarClasses = [styles.SearchBar];
    const searchIconClasses = [styles.SearchIcon];
    if (props.small) {
        searchBarClasses.push(styles.Small);
        searchIconClasses.push(styles.Small);
    }

    return (
        <div>
            <input
                type="text"
                className={searchBarClasses.join(" ")}
                value={props.value}
                placeholder={props.placeholder}
                onChange={props.changed}
                onKeyPress={onInputFormKeyPressed}
            />
            <FontAwesomeIcon
                icon={faSearch}
                className={searchIconClasses.join(" ")}
                onClick={props.clicked}
                onKeyDown={onSearchIconClicked}
                role="button"
                tabIndex={0}
            />
        </div>
    );
};

searchBar.propTypes = {
    /**
     * Value written by the user inside the input box
     */
    value: PropTypes.string,
    /**
     * Placeholder value for the input
     */
    placeholder: PropTypes.string,
    /**
     * Whether to display a smaller search bar (for instance in the app header)
     */
    small: PropTypes.bool,
    /**
     * Function triggered upon clicking the search button or by pressing Enter
     */
    clicked: PropTypes.func,
    /**
     * Function triggered every time the user writes something in the input field
     */
    changed: PropTypes.func,
};

export default searchBar;
