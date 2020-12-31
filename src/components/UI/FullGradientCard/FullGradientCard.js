import React from 'react'

import styles from './FullGradientCard.module.scss'

const fullGradientCard = (props) => (
    <div 
        className={[styles.FullGradientCard].join(" ")}>
        {props.children}
    </div>
)

export default fullGradientCard