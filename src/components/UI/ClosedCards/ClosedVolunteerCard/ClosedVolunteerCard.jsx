import React from "react";
import { useIntl, FormattedMessage } from "react-intl";
import PropTypes from "prop-types";

import styles from "./ClosedVolunteerCard.module.scss";

const ClosedVolunteerCard = (props) => {
    const intl = useIntl();
    const profileAlt = intl.formatMessage({
        id: "volunteer_profile_alt_text",
        defaultMessage: "Foto profilo del volontario",
        description: "Alt text for image of the volunteer",
    });

    const knowMore = (
        <FormattedMessage
            id="closed_volunteer_card_know_more"
            defaultMessage="Scopri di più"
            description="Invitation to expand closed card and get full details about volunteer"
        />
    );

    const yearsOld = (
        <FormattedMessage
            id="closed_volunteer_card_years_old"
            defaultMessage="anni"
            description="Words that follow up the digits that compose the age, e.g. '20 years old'"
        />
    );

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            props.itemSelected(props.fullName);
        }
    };

    return (
        <div
            className={styles.ClosedVolunteerCard}
            onClick={() => props.itemSelected(props.fullName)}
            onKeyDown={handleKeyPress}
            role="button"
            tabIndex={0}
        >
            <div className={styles.ImageHalf}>
                <img
                    className={styles.CardImage}
                    src={props.imageSrc}
                    alt={profileAlt}
                />
            </div>
            <div className={styles.DescHalf}>
                <div className={styles.VolunteerFullName}>{props.fullName}</div>
                <div className={styles.VolunteerAge}>
                    {props.age} {yearsOld}
                </div>
                <div className={styles.KnowMore}>{knowMore}</div>
            </div>
        </div>
    );
};

ClosedVolunteerCard.propTypes = {
    /**
     * Name and surname of the volunteer
     */
    fullName: PropTypes.string,
    /**
     * Age of the volunteer
     */
    age: PropTypes.number,
    /**
     * Where to find the requested image
     */
    imageSrc: PropTypes.object,
    /**
     * Handler triggered upon clicking on the card. Receives the identifier of the card's subject as an argument
     */
    itemSelected: PropTypes.func,
};

export default ClosedVolunteerCard;
