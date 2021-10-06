import React from "react";
import PropTypes from "prop-types";

import { FormattedMessage } from "react-intl";
import styles from "./SideDrawer.module.scss";

import NavigationItems from "../NavigationItems/NavigationItems";
import { useAuth } from "../../../services/auth/AuthContext";

const SideDrawer = (props) => {
    let classes = [styles.SideDrawer];

    const { currentUser } = useAuth();

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
                    <div>{currentUser.displayName}</div>
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

SideDrawer.propTypes = {
    /**
     * True if menu is open.
     */
    isMenuOpen: PropTypes.bool,
};

export default SideDrawer;
