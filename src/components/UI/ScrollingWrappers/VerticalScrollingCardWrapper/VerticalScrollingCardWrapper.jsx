import React from 'react'
import PropTypes from 'prop-types'

import styles from './VerticalScrollingCardWrapper.module.scss'

const VerticalScrollingCardWrapper = props => {
    return (
        <div className={styles.VerticalScrollingCardWrapper}>
            {props.children}
        </div>
    )
}

VerticalScrollingCardWrapper.propTypes = {
    /**
     * Cards to be made available within the wrapper
     */
    children: PropTypes.object
}

export default VerticalScrollingCardWrapper