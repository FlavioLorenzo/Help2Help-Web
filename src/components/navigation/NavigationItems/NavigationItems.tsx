/**
 * NavigationItems
 * Container for the NavigationItem components that allow the user to navigate through the app
 */

import NavigationItem from "./NavigationItem/NavigationItem";

import styles from "./NavigationItems.module.scss";

interface NavigationsType {
    isMenuOpen: boolean;
    navClicked(e: any): void;
}

const navigationItems = (props: NavigationsType) => {
    let classes = [styles.NavigationItems];

    if (props.isMenuOpen) {
        classes.push(styles.WithMenuOpen);
    }

    return (
        <ul className={classes.join(" ")}>
            <NavigationItem link="/" clicked={props.navClicked} exact>
                Home
            </NavigationItem>
            <NavigationItem link="/associations" clicked={props.navClicked}>
                Associazioni
            </NavigationItem>
            <NavigationItem link="/events" clicked={props.navClicked}>
                I miei Eventi
            </NavigationItem>
            <NavigationItem link="/my-account" clicked={props.navClicked}>
                Account
            </NavigationItem>
            <NavigationItem link="/messages" clicked={props.navClicked}>
                Messaggi
            </NavigationItem>
            <NavigationItem link="/logout" clicked={props.navClicked}>
                Esci
            </NavigationItem>
        </ul>
    );
};

export default navigationItems;
