import React from 'react'

import styles from './SplitGradientCard.module.scss'

/**
 * Split card component provides the layout for the components containing the filters and search bar in the home section
 * 
 * -- PROPS ATTRIBUTES AVAILABLE --
 * 
 * 'cardBorder': defines if there should be a rounded border to provide a movement illusion. Valid values are:
 * - BorderTopLeft, BorderTopRight, BorderBottomRight, BorderBottomLeft smooth the selected angle
 * - BorderTop, BorderBottom smooth both angles of the component's top/bottom half. The rounded effect is lighter than the one provided by the single angle values.
 * - BorderAll rounds every border.
 *
 * 'height' - forces a custom height to the card
 * 
 * 'hasPadding' - Forces a given border
 */
const splitGradientCard = (props) => {

    let classes = [styles.SplitGradientCard, styles[props.cardBorder]]

    if (props.hasPadding) {
        classes.push(styles.HasPadding)
    }

    return (
        <div 
            className={classes.join(" ")}
            style={{height: props.height}}>
            {props.children}
        </div>
    )
}

export default splitGradientCard