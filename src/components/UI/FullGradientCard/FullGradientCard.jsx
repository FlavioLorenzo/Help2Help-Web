import React from 'react'
import PropTypes from 'prop-types'

import styles from './FullGradientCard.module.scss'

const fullGradientCard = (props) => {
    let classes = [styles.FullGradientCard]

    if(props.sideMenu) {
        classes.push(styles.SideMenu)
    }

    return (
        <div 
            className={classes.join(" ")}>
            {props.children}
        </div>
    )
}

fullGradientCard.propTypes = {
    /**
     * Whether the full gradient should be applied to a whole page or as background for the menu 
     * (experimental, it will be probably dismissed as soon as we reach a consensus over the menu structure)
     */
    sideMenu: PropTypes.bool
}

export default fullGradientCard