import React from 'react'

import styles from './ClosedVerticalCard.module.scss'

/*
 * Split card component provides the layout for the components containing the filters and search bar in the home section
 * 
 * -- ATTRIBUTES AVAILABLE --
 * 
 * 'imageSrc' - Where to find the requested image
 *
 * 'title' - main title, usually referring to the organization / event
 * 
 * 'subtitle' - Subtitle of the 
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