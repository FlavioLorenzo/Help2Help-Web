import styles from "./AvailabilityRow.module.scss";

import onboardingMorning from "../../../../assets/images/onboardingMorning.png";
import onboardingAfternoon from "../../../../assets/images/onboardingAfternoon.png";
import onboardingNight from "../../../../assets/images/onboardingNight.png";
import onboardingMorningActive from "../../../../assets/images/onboardingMorningActive.png";
import onboardingAfternoonActive from "../../../../assets/images/onboardingAfternoonActive.png";
import onboardingNightActive from "../../../../assets/images/onboardingNightActive.png";
import {
    dow_monday, dow_tuesday, dow_wednesday, dow_thursday, dow_friday, dow_saturday, dow_sunday
} from "../../../../translations";

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
                    setTranslatedDayOfWeek(dow_monday)
                    break;
                case "tue":
                    setTranslatedDayOfWeek(dow_tuesday)
                    break;
                case "wed":
                    setTranslatedDayOfWeek(dow_wednesday)
                    break;
                case "thu":
                    setTranslatedDayOfWeek(dow_thursday)
                    break;
                case "fri":
                    setTranslatedDayOfWeek(dow_friday)
                    break;
                case "sat":
                    setTranslatedDayOfWeek(dow_saturday)
                    break;
                default:
                    setTranslatedDayOfWeek(dow_sunday)
                    break;
            }
        }, [dayOfWeek]
    );

    useEffect(() => {
            setSelectedAvailabilities(props.selectedAvailabilities)
        }, [props.selectedAvailabilities]
    );

    const onAvailabilityElemClicked = (dayOfWeek: string, timeOfDay: string) => {
        props.availabilityElemClicked!(dayOfWeek, timeOfDay);
    }

    return (
        <div className={styles.AvailabilityRow}>
            <div className={styles.AvailabilityRowLabel}>
                {translatedDayOfWeek}
            </div>
            <div className={styles.AvailabilitySelectionBlock}>
                <div
                    className={styles.AvailabilitySelectionElem}
                    onClick={() => onAvailabilityElemClicked(dayOfWeek, 'm')}
                    role={"button"}
                >
                    <img
                        src={(selectedAvailabilities.indexOf('m') > -1) ? onboardingMorningActive : onboardingMorning}
                        alt="Morning availability"
                    />
                </div>
                <div
                    className={styles.AvailabilitySelectionElem}
                    onClick={() => onAvailabilityElemClicked(dayOfWeek, 'd')}
                    role={"button"}
                >
                    <img
                        src={(selectedAvailabilities.indexOf('d') > -1) ? onboardingAfternoonActive : onboardingAfternoon}
                        alt="Afternoon availability"
                    />
                </div>
                <div
                    className={styles.AvailabilitySelectionElem}
                    onClick={() => onAvailabilityElemClicked(dayOfWeek, 'n')}
                    role={"button"}
                >
                    <img
                        src={(selectedAvailabilities.indexOf('n') > -1) ? onboardingNightActive : onboardingNight}
                        alt="Evening availability"
                    />
                </div>
            </div>
        </div>
    )
}

export default AvailabilityRow;