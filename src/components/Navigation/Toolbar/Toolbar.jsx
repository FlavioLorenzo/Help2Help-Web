import React from 'react';
import PropTypes from 'prop-types'
import NavBurger from './NavBurger/NavBurger';
import {useIntl} from 'react-intl';
import SideDrawer from '../SideDrawer/SideDrawer'

import styles from './Toolbar.module.scss';

const Toolbar = props => {
    const intl = useIntl()
    const imageAlt= intl.formatMessage({
        id:"userMenuProfilePhotoAltText",
        defaultMessage:"La mia foto utente",
        description:"Alt text for image of the current user"
    })

    let toolbarClasses = [styles.Toolbar]
    if( props.isMenuOpen ) {
        toolbarClasses.push(styles.WithMenuOpened)
    }

    let imageContainerClasses = [styles.UserImageContainer]
    if( props.isMenuOpen ) {
        imageContainerClasses.push(styles.WithMenuOpened)
    }

    return (
        <header className={toolbarClasses.join(' ')}>
            <div className={styles.NavBurgerIconContainer}>
                <NavBurger clicked={props.menuToggleClicked} isMenuOpen={props.isMenuOpen}/>
            </div>
            <div className={imageContainerClasses.join(' ')}>
                <img className={styles.UserImage} src={props.imageSrc} alt={imageAlt}/>
            </div>
            <SideDrawer isMenuOpen={props.isMenuOpen} />
        </header>
    )
}

Toolbar.propTypes = {
    /**
     * True if menu is open.
     */
    isMenuOpen: PropTypes.bool,
    /**
     * Action to be trigggered upon clicking on the navigation menu burger
     */
    menuToggleClicked: PropTypes.func,
    /**
     * Image for the profile picture of the user
     */
    imageSrc: PropTypes.object
}

export default Toolbar;