import React from 'react'

import styles from './ClosedHorizontalCard.module.scss'

/*
 * Wider card that provides an overview of an organization / event, to be generally shown in the home section when requesting detailed list of organizations / events
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
const closedHorizontalCard = (props) => {
    return (
        <div className={styles.ClosedHorizontalCard}>
            <div className={styles.CardTitle}>
                <div className={styles.DescTitle}>{props.title}</div>
                <div className={styles.MoreTitle}>Scopri di più</div>
            </div>
            <div 
                className={styles.CardImage}
                style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.6) 100%), url(" + props.imageSrc + ")"}}
                onClick={() => props.itemSelected(props.title)}>
                <div className={styles.DescWrap}>
                    <div className={styles.DescSubtitle}>{props.subtitle}</div>
                </div>
            </div>
        </div>
    )
}

export default closedHorizontalCard