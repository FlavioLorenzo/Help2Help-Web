import React from 'react';
import PropTypes from 'prop-types'

import styles from './SideDrawer.module.scss';

import NavigationItems from '../NavigationItems/NavigationItems';

const sideDrawer = props => {
    let classes = [styles.SideDrawer]

    if (props.isMenuOpen) {
        classes.push(styles.IsMenuOpen)
    }

    return (
        <div className={classes.join(" ")}>
            <div className={styles.MenuProfileHeader}>
                <div>
                    <div>Nome e Cognome</div>
                    <div>Modifica profilo</div>
                </div>
            </div>
            <NavigationItems isMenuOpen={props.isMenuOpen}/>
        </div>
    )
}

sideDrawer.propTypes = {
    /**
     * True if menu is open.
     */
    isMenuOpen: PropTypes.bool
}

export default sideDrawer;