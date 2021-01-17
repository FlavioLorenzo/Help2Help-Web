import React from 'react'

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

export default fullGradientCard