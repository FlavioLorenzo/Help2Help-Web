import React from 'react';

import styles from './NavBurger.module.scss';

/*
 * Navigation menu burger displayed on the top left corner of the app.
 * 
 * -- PROPS ATTRIBUTES AVAILABLE --
 * 
 * 'isMenuOpen': boolean. True if menu is open.
 *
 * 'clicked' - action to be trigggered upon clicking on the navigation menu burger
 * 
 */
const navBurger = props => {
    let classes = [styles.NavBurger]

    if (props.isMenuOpen) {
        classes.push(styles.IsMenuOpen)
    }

    return (
        <div className={classes.join(" ")} onClick={props.clicked}>
            <span></span>
            <span></span>
        </div>
    )
}

export default navBurger;