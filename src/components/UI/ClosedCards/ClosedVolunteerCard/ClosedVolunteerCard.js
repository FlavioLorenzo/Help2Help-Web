import React from 'react'
import {useIntl, FormattedMessage} from 'react-intl';

import styles from './ClosedVolunteerCard.module.scss'

/*
 * Card that provides an overview of a volunteer, to be generally shown in the home section of an organization.
 * 
 * -- ATTRIBUTES AVAILABLE --
 * 
 * 'fullName' - Name and surname of the volunteer
 * 
 * 'age' - Age of the volunteer
 * 
 * 'imageSrc' - Where to find the requested image
 * 
 * 'itemSelected()' - Handler triggered upon clicking on the card. Receives the identifier of the card's subject as an argument
 * 
 */
const ClosedVolunteerCard = (props) => {

    const intl = useIntl()
    const profileAlt= intl.formatMessage({
        id:"volunteerProfileAltText",
        defaultMessage:"Foto profilo del volontario",
        description:"Alt text for image of the volunteer"
    })

    const knowMore = (
        <FormattedMessage
            id="closedVolunteerCardKnowMore"
            defaultMessage="Scopri di più"
            description="Invitation to expand closed card and get full details about volunteer"
        />
    )

    const yearsOld = (
        <FormattedMessage
            id="closedVolunteerCardYearsOld"
            defaultMessage="anni"
            description="Words that follow up the digits that compose the age, e.g. '20 years old'"
        />
    )

    return (
        <div className={styles.ClosedVolunteerCard} onClick={() => props.itemSelected(props.title)}>
            <div className={styles.ImageHalf}>
                <img className={styles.CardImage} src={props.imageSrc} alt={profileAlt}/>
            </div>
            <div className={styles.DescHalf}>
                <div className={styles.VolunteerFullName}>{props.fullName}</div>
                <div className={styles.VolunteerAge}>{props.age} {yearsOld}</div>
                <div className={styles.KnowMore}>
                    {knowMore}
                </div>
            </div>
        </div>
    )
}

export default ClosedVolunteerCard