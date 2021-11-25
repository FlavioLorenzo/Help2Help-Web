import styles from "./AvailabilitySelectionSection.module.scss";

import React, {useEffect, useState} from "react";
import AvailabilityRow from "./AvailabilityRow/AvailabilityRow";
import {AvailabilityType} from "../../../types/AvailabilityType";

interface AvailabilitySelectionSectionProps {
    /**
     * Array of objects representing the time availabilities of the user
     */
    availabilities: AvailabilityType;
    /**
     * Function triggered upon clicking one of the availabilities buttons
     */
    availabilityElemClicked: (dayOfWeek: string, timeOfDay: string) => void;
}

const AvailabilitySelectionSection = ({availabilities, availabilityElemClicked}: AvailabilitySelectionSectionProps) => {
    const [availabilityRows, setAvailabilityRow] = useState<any>();

    useEffect(() => {
            const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

            let tempAvailabilityRow = daysOfWeek.map(
                (dayOfWeek: string) => {
                    const availabilitiesOfDay = availabilities[dayOfWeek];

                    return (<AvailabilityRow
                        dayOfWeek={dayOfWeek}
                        selectedAvailabilities={availabilitiesOfDay ? availabilitiesOfDay : []}
                        availabilityElemClicked={availabilityElemClicked}
                    />)
                });

            setAvailabilityRow(tempAvailabilityRow);
        }, [availabilities, availabilityElemClicked]
    );

    return (
        <div className={styles.AvailabilitySection}>
            {availabilityRows}
        </div>
    )
}

export default AvailabilitySelectionSection;