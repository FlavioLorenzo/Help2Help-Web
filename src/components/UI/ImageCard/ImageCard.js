import React from 'react'

import styles from './ImageCard.module.scss'

/*
 * Image card component provides a header with provided image
 * 
 * -- ATTRIBUTES AVAILABLE --
 * 
 * 'cardBorder': defines if there should be a rounded border to provide a movement illusion. Valid values are:
 * - BorderTopLeft, BorderTopRight, BorderBottomRight, BorderBottomLeft smooth the selected angle
 * - BorderTop, BorderBottom smooth both angles of the component's top/bottom half. The rounded effect is lighter than the one provided by the single angle values.
 * - BorderAll rounds every border.
 *
 * 'height' - forces a custom height to the card
 * 
 * 'hasPadding' - Forces a given border
 * 
 * 'imageSrc' - Where to find the requested image
 * 
 */
const imageCard = (props) => {

    let classes = [styles.ImageCard, styles[props.cardBorder]]

    if (props.hasPadding) {
        classes.push(styles.HasPadding)
    }

    return (
        <div 
            className={classes.join(" ")}
            style={{height: props.height, backgroundImage: "url(" + props.imageSrc + ")"}}>
            {props.children}
        </div>
    )
}

export default imageCard