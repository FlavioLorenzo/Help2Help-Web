import styles from "./AvailabilitySelectionSection.module.scss";

import React, {useEffect, useState} from "react";
import AvailabilityRow from "./AvailabilityRow/AvailabilityRow";
import {AvailabilityType} from "../../../types/AvailabilityType";

interface AvailabilitySelectionSectionProps {
    /**
     * Array of objects representing the time availabilities of the user
     */
    availabilities: AvailabilityType[];
    /**
     * Function triggered upon clicking one of the availabilities buttons
     */
    availabilityElemClicked: (dayOfWeek: string, timeOfDay: string) => void;
}

const AvailabilitySelectionSection = (props: AvailabilitySelectionSectionProps) => {
    const [availabilityRows, setAvailabilityRow] = useState<any>();

    useEffect(() => {
            const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

            let tempAvailabilityRow = daysOfWeek.map(
                (dayOfWeek: string) => {
                    const availabilitiesOfDay = props.availabilities.find(availability => availability.day === dayOfWeek);

                    return (<AvailabilityRow
                        dayOfWeek={dayOfWeek}
                        selectedAvailabilities={availabilitiesOfDay ? availabilitiesOfDay.timeAvailability : []}
                        availabilityElemClicked={props.availabilityElemClicked}
                    />)
                });

            setAvailabilityRow(tempAvailabilityRow);
        }, [props.availabilities, props.availabilityElemClicked]
    );

    return (
        <div className={styles.AvailabilitySection}>
            {availabilityRows}
        </div>
    )
}

export default AvailabilitySelectionSection;