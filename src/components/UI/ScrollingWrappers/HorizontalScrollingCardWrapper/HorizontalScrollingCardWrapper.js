import React from 'react'

import styles from './HorizontalScrollingCardWrapper.module.scss'

/*
 * Wrapper for providing horizontal scrolling capability. Designed to be used with VerticalClosedCard components.
 * 
 * -- PROPS ATTRIBUTES AVAILABLE --
 * 
 * 'children' - Cards to be made available within the wrapper
 * 
 */
const HorizontalScrollingCardWrapper = props => {
    return (
        <div className={styles.HorizontalScrollingCardWrapper}>
            {props.children}
        </div>
    )
}

export default HorizontalScrollingCardWrapper