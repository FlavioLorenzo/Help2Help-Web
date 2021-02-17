import React from "react";
import PropTypes from "prop-types";

import styles from "./ClosedVerticalCard.module.scss";
import { FormattedDate } from "react-intl";

const closedVerticalCard = (props) => {
    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            props.itemSelected(props.title);
        }
    };

    let subtitle = props.subtitle;
    if (typeof props.subtitle === "object") {
        subtitle = (
            <FormattedDate
                value={props.subtitle.toDate()}
                month="long"
                day="numeric"
                weekday="short"
            />
        );
    }

    return (
        <div
            className={styles.ClosedVerticalCard}
            style={{
                backgroundImage:
                    "linear-gradient(rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.6) 100%), url(" +
                    props.imageSrc +
                    ")",
            }}
            onClick={() => props.itemSelected(props.title)}
            onKeyDown={handleKeyPress}
            role="button"
            tabIndex={0}
        >
            <div className={styles.DescWrap}>
                <div className={styles.DescTitle}>{props.title}</div>
                <div className={styles.DescSubtitle}>{subtitle}</div>
            </div>
        </div>
    );
};

closedVerticalCard.propTypes = {
    /**
     * Where to find the requested image
     */
    imageSrc: PropTypes.string,
    /**
     * Main title, usually referring to the organization / event
     */
    title: PropTypes.string,
    /**
     * Subtitle to show below the org/event's name
     */
    subtitle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    /**
     * Handler triggered upon clicking on the card. Receives the identifier of the card's subject as an argument
     */
    itemSelected: PropTypes.func,
};

export default closedVerticalCard;
