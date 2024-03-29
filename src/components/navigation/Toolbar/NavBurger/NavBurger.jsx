import React from 'react';
import PropTypes from 'prop-types'

import styles from './NavBurger.module.scss';

const navBurger = props => {
    let classes = [styles.NavBurger]

    if (props.isMenuOpen) {
        classes.push(styles.IsMenuOpen)
    }

    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            props.clicked()
        }
    }

    return (
        <div 
            className={classes.join(" ")} 
            onClick={props.clicked}
            onKeyDown={handleKeyPress}
            role="button"
            tabIndex={0}>
            <span></span>
            <span></span>
        </div>
    )
}

navBurger.propTypes = {
    /**
     * True if menu is open.
     */
    isMenuOpen: PropTypes.bool,
    /**
     * Action to be trigggered upon clicking on the navigation menu burger
     */
    clicked: PropTypes.func
}

export default navBurger;