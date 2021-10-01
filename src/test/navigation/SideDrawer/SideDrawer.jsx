import React from "react";
import PropTypes from "prop-types";

import { FormattedMessage } from "react-intl";
import styles from "./SideDrawer.module.scss";

import NavigationItems from "../NavigationItems/NavigationItems";

const sideDrawer = (props) => {
    let classes = [styles.SideDrawer];

    if (props.isMenuOpen) {
        classes.push(styles.IsMenuOpen);
    }

    const editProfile = (
        <FormattedMessage
            id="side_drawer_edit_profile"
            defaultMessage="Modifica profilo"
            description="Edit the profile text in the app's menu"
        />
    );

    return (
        <div className={classes.join(" ")}>
            <div className={styles.MenuProfileHeader}>
                <div>
                    <div>Nome e Cognome</div>
                    <div>{editProfile}</div>
                </div>
            </div>
            <NavigationItems
                isMenuOpen={props.isMenuOpen}
                navClicked={props.navClicked}
            />
        </div>
    );
};

sideDrawer.propTypes = {
    /**
     * True if menu is open.
     */
    isMenuOpen: PropTypes.bool,
};

export default sideDrawer;
