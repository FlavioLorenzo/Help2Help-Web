import React from "react";
// import { NavLink } from 'react-router-dom'

import styles from "./NavigationItem.module.scss";

/*
 * Actual component for providing navigation functionality
 * <NavLink
 *              to={props.link}
 *              exact={props.exact}
 *              activeClassName={styles.active}>{props.children}</NavLink>
 */

interface Props {
    /**
     * Used in mockup to signal the page currently displayed.
     */
    active: boolean;
    /**
     * The text to display in the item
     */
    children: string;
}

const navigationItem = (props: Props) => {
    let classes = [styles.NavigationItem];
    if (props.active) {
        classes.push(styles.Active);
    }
    return (
        <li className={classes.join(" ")}>
            <span>{props.children}</span>
        </li>
    );
};

export default navigationItem;
