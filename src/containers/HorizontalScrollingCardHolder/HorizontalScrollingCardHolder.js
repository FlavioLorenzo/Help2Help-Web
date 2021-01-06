import React from 'react'

import Auxiliary from '../../hoc/Auxiliary/Auxiliary'

import styles from './HorizontalScrollingCardHolder.module.scss'

// @TODO: Implement actual scrolling
const horizontalScrollingCardHolder = props => {
    return (
        <Auxiliary>
            {props.items}
        </Auxiliary>
    )
}

export default horizontalScrollingCardHolder