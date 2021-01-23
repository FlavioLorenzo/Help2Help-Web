import React from 'react'

import styles from './VerticalScrollingCardWrapper.module.scss'

/**
 * Container for ClosedHorizonal and ClosedVoluteers cards
 * 
 * -- PROPS ATTRIBUTES AVAILABLE --
 * 
 * 'children' - Cards to be made available within the wrapper
 */
const VerticalScrollingCardWrapper = props => {
    return (
        <div className={styles.VerticalScrollingCardWrapper}>
            {props.children}
        </div>
    )
}

export default VerticalScrollingCardWrapper