import React from 'react'
import PropTypes from 'prop-types'

import styles from './ImageCard.module.scss'

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

imageCard.propTypes = {
    /**
     * Defines if there should be a rounded border to provide a movement illusion. Valid values are:
     * - BorderTopLeft, BorderTopRight, BorderBottomRight, BorderBottomLeft smooth the selected angle
     * - BorderTop, BorderBottom smooth both angles of the component's top/bottom half. The rounded effect is lighter than the one provided by the single angle values.
     * - BorderAll rounds every border.
     */
    cardBorder: PropTypes.string,
    /**
     * Forces a custom height to the card
     */
    height: PropTypes.string,
    /**
     * Where to find the requested image
     */
    imageSrc: PropTypes.object,
    /**
     * Forces a given border
     */
    hasPadding: PropTypes.bool,
}

export default imageCard