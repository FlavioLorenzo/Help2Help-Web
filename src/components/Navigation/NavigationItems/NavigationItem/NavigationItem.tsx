/**
 *  NavigationItem
 *  Component to style a single menu entry
 */

import { NavLink } from "react-router-dom";

import styles from "./NavigationItem.module.scss";

interface Props {
    /**
     * Used in mockup to signal the page currently displayed.
     */
    active?: boolean;
    /**
     * Path where the user will be redirected upon clicking
     */
    link: string;
    /**
     * Whether the path should be exactly match to set the current link as active
     */
    exact?: boolean;
    /**
     * Action triggered upon clicking the NavLink
     */
    clicked(e: any): void;
    /**
     * The text to display in the item
     */
    children: string;
}

const navigationItem = (props: Props) => {
    return (
        <NavLink
            className={styles.NavigationItem}
            to={props.link}
            exact={props.exact}
            activeClassName={styles.Active}
            onClick={props.clicked}
        >
            <li>{props.children}</li>
        </NavLink>
    );
};

export default navigationItem;
