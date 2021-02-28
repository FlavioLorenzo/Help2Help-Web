import React from "react";
import { FormattedMessage } from "react-intl";

import styles from "./ClosedHorizontalCard.module.scss";

import PropTypes from "prop-types";

const closedHorizontalCard = (props) => {
    const knowMore = (
        <FormattedMessage
            id="closed_event_card_know_more"
            defaultMessage="Scopri di più"
            description="Invitation to expand closed card and get full details about event"
        />
    );

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            props.itemSelected(props.title);
        }
    };

    return (
        <div
            className={styles.ClosedHorizontalCard}
            onClick={() => props.itemSelected(props.title)}
            onKeyDown={handleKeyPress}
            role="button"
            tabIndex={0}
        >
            <div className={styles.CardTitle}>
                <div className={styles.DescTitle}>{props.title}</div>
                <div className={styles.MoreTitle}>{knowMore}</div>
            </div>
            <div
                className={styles.CardImage}
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.6) 100%), url(" +
                        props.imageSrc +
                        ")",
                }}
            >
                <div className={styles.DescWrap}>
                    <div className={styles.DescSubtitle}>{props.subtitle}</div>
                </div>
            </div>
        </div>
    );
};

closedHorizontalCard.propTypes = {
    /**
     * Where to find the requested image
     */
    imageSrc: PropTypes.string,
    /**
     * Main title, usually referring to the organization / event
     */
    title: PropTypes.string,
    /**
     * Subtitle to print over the image
     */
    subtitle: PropTypes.string,
    /**
     * Handler triggered upon clicking on the card. Receives the identifier of the card's subject as an argument
     */
    itemSelected: PropTypes.func,
};

export default closedHorizontalCard;
