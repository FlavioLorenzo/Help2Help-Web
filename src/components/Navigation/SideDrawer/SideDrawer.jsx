import React from 'react';
import PropTypes from 'prop-types'

import styles from './SideDrawer.module.scss';

import FullGradientCard from '../../UI/FullGradientCard/FullGradientCard'
import NavigationItems from '../NavigationItems/NavigationItems';

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

sideDrawer.propTypes = {
    /**
     * True if menu is open.
     */
    isMenuOpen: PropTypes.bool
}

export default sideDrawer;