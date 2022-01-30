import styles from "./AvailabilityRow.module.scss";

/*import onboardingMorning from "../../../../assets/images/onboardingMorning.png";
import onboardingAfternoon from "../../../../assets/images/onboardingAfternoon.png";
import onboardingNight from "../../../../assets/images/onboardingNight.png";
import onboardingMorningActive from "../../../../assets/images/onboardingMorningActive.png";
import onboardingAfternoonActive from "../../../../assets/images/onboardingAfternoonActive.png";
import onboardingNightActive from "../../../../assets/images/onboardingNightActive.png";*/
import * as translation from "../../../../translations";

import {useEffect, useState} from "react";

interface AvailabilityRowProps {
    /**
     * Day of the week assigned to the current row
     */
    dayOfWeek: string;
    /**
     * Array of three elements, respectively for morning, afternoon and evening, to signal whether one of these buttons
     * should be set active
     */
    selectedAvailabilities: string[];
    /**
     * Function triggered upon clicking one of the availabilities buttons
     */
    availabilityElemClicked?: (dayOfWeek: string, timeOfDay: string) => void;
}

const AvailabilityRow = (props: AvailabilityRowProps) => {
    const [dayOfWeek,] = useState<any>(props.dayOfWeek);
    const [selectedAvailabilities, setSelectedAvailabilities] = useState<string[]>(props.selectedAvailabilities);

    const [translatedDayOfWeek, setTranslatedDayOfWeek] = useState<JSX.Element | null>(null);

    useEffect(() => {
            switch (dayOfWeek) {
                case "mon":
                    setTranslatedDayOfWeek(translation.dow_monday_short)
                    break;
                case "tue":
                    setTranslatedDayOfWeek(translation.dow_tuesday_short)
                    break;
                case "wed":
                    setTranslatedDayOfWeek(translation.dow_wednesday_short)
                    break;
                case "thu":
                    setTranslatedDayOfWeek(translation.dow_thursday_short)
                    break;
                case "fri":
                    setTranslatedDayOfWeek(translation.dow_friday_short)
                    break;
                case "sat":
                    setTranslatedDayOfWeek(translation.dow_saturday_short)
                    break;
                default:
                    setTranslatedDayOfWeek(translation.dow_sunday_short)
                    break;
            }
        }, [dayOfWeek]
    );

    /* Update when availabilities gets selected */
    useEffect(() => {
            setSelectedAvailabilities(props.selectedAvailabilities)
        }, [props.selectedAvailabilities]
    );

    let todElems: any = [];
    ['m', 'a', 'e'].forEach((tod) => {
        let classes = [styles.AvailabilitySelectionElem];

        if ((selectedAvailabilities.indexOf(tod) > -1))
            classes.push(styles.AvailabilitySelectionElemActive);

        let todTranslation;
        switch (tod) {
            case 'm':
                todTranslation = translation.tod_morning;
                break;
            case 'a':
                todTranslation = translation.tod_afternoon;
                break;
            case 'e':
                todTranslation = translation.tod_evening;
                break;
        }

        todElems.push((
            <div
                className={classes.join(' ')}
                onClick={() => onAvailabilityElemClicked(dayOfWeek, tod)}
                role={"button"}
            >
                {todTranslation}
            </div>
        ));
    })

    const onAvailabilityElemClicked = (dayOfWeek: string, timeOfDay: string) => {
        props.availabilityElemClicked!(dayOfWeek, timeOfDay);
    }

    return (
        <div className={styles.AvailabilityRow}>
            <div className={styles.AvailabilityRowLabel}>
                {translatedDayOfWeek}
            </div>
            <div className={styles.AvailabilitySelectionBlock}>
                {todElems}
            </div>
        </div>
    )
}

export default AvailabilityRow;