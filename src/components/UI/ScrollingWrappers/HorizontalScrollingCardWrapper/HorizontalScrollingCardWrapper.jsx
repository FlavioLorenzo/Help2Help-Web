import React from 'react'
import PropTypes from 'prop-types'

import styles from './HorizontalScrollingCardWrapper.module.scss'

const HorizontalScrollingCardWrapper = props => {
    return (
        <div className={styles.HorizontalScrollingCardWrapper}>
            {props.children}
        </div>
    )
}

HorizontalScrollingCardWrapper.propTypes = {
    /**
     * Cards to be made available within the wrapper
     */
    children: PropTypes.object
}

export default HorizontalScrollingCardWrapper