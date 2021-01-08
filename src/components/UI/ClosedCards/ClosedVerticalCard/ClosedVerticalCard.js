import React from 'react'

import styles from './ClosedVerticalCard.module.scss'

/*
 * Taller card that provides an overview of an organization / event, to be generally shown in the home section
 * 
 * -- ATTRIBUTES AVAILABLE --
 * 
 * 'imageSrc' - Where to find the requested image
 *
 * 'title' - main title, usually referring to the organization / event
 * 
 * 'subtitle' - Subtitle to show below the org/event's name
 * 
 * 'itemSelected()' - Handler triggered upon clicking on the card. Receives the identifier of the card's subject as an argument
 * 
 */
const closedVerticalCard = (props) => {
    return (
        <div 
            className={styles.ClosedVerticalCard}
            style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.6) 100%), url(" + props.imageSrc + ")"}}
            onClick={() => props.itemSelected(props.title)}>
            <div className={styles.DescWrap}>
                <div className={styles.DescTitle}>{props.title}</div>
                <div className={styles.DescSubtitle}>{props.subtitle}</div>
            </div>
        </div>
    )
}

export default closedVerticalCard