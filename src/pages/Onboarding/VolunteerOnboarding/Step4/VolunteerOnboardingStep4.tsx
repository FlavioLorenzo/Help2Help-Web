import AvailabilitySelectionSection
    from "../../../../components/ui/AvailabilitySelectionSection/AvailabilitySelectionSection"
import {AvailabilityType} from "../../../../types/AvailabilityType";

interface Step4Props {
    /**
     * The time availabilities selected by the user
     */
    selectedAvailabilities: AvailabilityType;
    /**
     * Function triggered when state changes
     */
    onChanged: (value: AvailabilityType) => void;
}

const VolunteerOnboardingStep4 = ({selectedAvailabilities, onChanged}: Step4Props) => {
    const onAvailabilityElemClicked = (dayOfWeek: string, timeOfDay: string) => {
        const currentDayAvailabilities = selectedAvailabilities[dayOfWeek];

        if (!currentDayAvailabilities) {
            selectedAvailabilities[dayOfWeek] = [timeOfDay];
            onChanged({...selectedAvailabilities});

            return;
        }

        const index = currentDayAvailabilities.indexOf(timeOfDay);
        if (index > -1) {
            currentDayAvailabilities.splice(index, 1);

            if (currentDayAvailabilities.length === 0)
                delete selectedAvailabilities[dayOfWeek]
        } else
            currentDayAvailabilities.push(timeOfDay);

        onChanged({...selectedAvailabilities});
    }

    return (

        <AvailabilitySelectionSection
            availabilities={selectedAvailabilities}
            availabilityElemClicked={onAvailabilityElemClicked}
        />

    );
};

export default VolunteerOnboardingStep4;
