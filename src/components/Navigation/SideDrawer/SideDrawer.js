import React from 'react';

import styles from './SideDrawer.module.scss';

import FullGradientCard from '../../UI/FullGradientCard/FullGradientCard'
import NavigationItems from '../NavigationItems/NavigationItems';

/*
 * Container for the menu to be displayed upon clicking on the navigation menu burger.
 * 
 * -- PROPS ATTRIBUTES AVAILABLE --
 * 
 * 'isMenuOpen': boolean. True if menu is open.
 * 
 */
const sideDrawer = props => {
    let classes = [styles.SideDrawer]

    if (props.isMenuOpen) {
        classes.push(styles.IsMenuOpen)
    }

    return (
        <div className={classes.join(" ")}>
            {props.isMenuOpen ? <FullGradientCard sideMenu/> : null} 
            <div className={styles.MenuProfileHeader}>
                <div>
                    <div>Nome e Cognome</div>
                    <div>Modifica profilo</div>
                </div>
            </div>
            {props.isMenuOpen ? <NavigationItems /> : null} 
        </div>
    )
}

export default sideDrawer;