import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem'

import styles from './NavigationItems.module.scss'

const navigationItems = (props) => {

    let classes = [styles.NavigationItems]

    if (props.isMenuOpen) {
        classes.push(styles.WithMenuOpen)
    }

    return (
        <ul className={classes.join(" ")}>
            <NavigationItem active>Home</NavigationItem>
            <NavigationItem>Associazioni</NavigationItem>
            <NavigationItem>I miei Eventi</NavigationItem>
            <NavigationItem>Account</NavigationItem>
            <NavigationItem>Messaggi</NavigationItem>
            <NavigationItem>Esci</NavigationItem>
        </ul>
    )
}

export default navigationItems