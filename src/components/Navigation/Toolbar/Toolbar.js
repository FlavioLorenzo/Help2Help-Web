import React from 'react';

import styles from './Toolbar.module.scss';
import {useIntl} from 'react-intl';
import NavBurger from './NavBurger/NavBurger';

/*
 * Container for the toolbar to be printed at the top of each page. Contains the user profile image and the navigation menu burger.
 * 
 * -- PROPS ATTRIBUTES AVAILABLE --
 * 
 * 'isMenuOpen': boolean. True if menu is open.
 *
 * 'menuToggleClicked' - action to be trigggered upon clicking on the navigation menu burger
 * 
 * 'imageSrc' - Image for the profile picture of the user
 * 
 */
const Toolbar = props => {
    const intl = useIntl()
    const imageAlt= intl.formatMessage({
        id:"userMenuProfilePhotoAltText",
        defaultMessage:"La mia foto utente",
        description:"Alt text for image of the current user"
    })

    let imageContainerClasses = [styles.UserImageContainer]
    if( props.isMenuOpen ) {
        imageContainerClasses.push(styles.WithMenuOpened)
    }

    return (
        <header className={styles.Toolbar}>
            <div className={styles.NavBurgerIconContainer}>
                <NavBurger clicked={props.menuToggleClicked} isMenuOpen={props.isMenuOpen}/>
            </div>
            <div className={imageContainerClasses.join(' ')}>
                <img className={styles.UserImage} src={props.imageSrc} alt={imageAlt}/>
            </div>
        </header>
    )
}

export default Toolbar;