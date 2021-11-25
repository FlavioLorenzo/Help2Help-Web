import {useState} from "react";

import {
    onboardingVolunteerStepAvailabilitiesTitle,
} from "../VolunteerOnboarding.translations";

import AvailabilitySelectionSection
    from "../../../../components/ui/AvailabilitySelectionSection/AvailabilitySelectionSection"
import {AvailabilityType} from "../../../../types/AvailabilityType";

const VolunteerOnboardingStep4 = () => {
    const [availabilities, setAvailabilities] = useState<AvailabilityType[]>([]);

    const onAvailabilityElemClicked = (dayOfWeek: string, timeOfDay: string) => {
        const currentAvailability = availabilities.find(availability => availability.day === dayOfWeek);
        
        if (!currentAvailability) {
            availabilities.push({
                day: dayOfWeek,
                timeAvailability: [timeOfDay]
            });
            setAvailabilities([...availabilities]);
            return;
        }

        const index = currentAvailability.timeAvailability.indexOf(timeOfDay);
        if (index > -1)
            currentAvailability.timeAvailability.splice(index);
        else
            currentAvailability.timeAvailability.push(timeOfDay);

        setAvailabilities([...availabilities]);
    }

    return (
        <>
            <h2>{onboardingVolunteerStepAvailabilitiesTitle}</h2>

            <AvailabilitySelectionSection
                availabilities={availabilities}
                availabilityElemClicked={onAvailabilityElemClicked}
            />
        </>
    );
};

export default VolunteerOnboardingStep4;
