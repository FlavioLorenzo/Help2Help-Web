import React from 'react'

import styles from './VerticalScrollingCardWrapper.module.scss'

const VerticalScrollingCardWrapper = props => {
    return (
        <div className={styles.VerticalScrollingCardWrapper}>
            {props.children}
        </div>
    )
}

export default VerticalScrollingCardWrapper