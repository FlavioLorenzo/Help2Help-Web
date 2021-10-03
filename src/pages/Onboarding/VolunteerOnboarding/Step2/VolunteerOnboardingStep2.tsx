import { useEffect, useState } from "react";
import { FieldsOfInterestTranslationType } from "../../../../services/fieldsOfInterest/fieldsOfInterest";
import { onboardingVolunteerStepFieldTitle } from "../VolunteerOnboarding.translations";

interface Step2Props {
    /**
     * The fields of interest the user can select
     */
    availableFields: Array<FieldsOfInterestTranslationType>;
    /**
     * The fields of interest selected by the user
     */
    selectedFields: Array<string>;
    /**
     * Function triggered when state changes
     */
    onChanged: (selectedFields: Array<string>) => void;
}

const VolunteerOnboardingStep2 = ({
    availableFields,
    selectedFields,
    onChanged,
}: Step2Props) => {
    const [multiboxElems, setMultiboxElems] = useState<any>();

    useEffect(() => {
        const selectionElementClicked = (elem: string) => {
            const selectedElems = [...selectedFields];
            const index = selectedElems.indexOf(elem);

            index !== -1
                ? selectedElems.splice(index, 1)
                : selectedElems.push(elem);

            onChanged(selectedElems);
        };

        setMultiboxElems(
            availableFields.map((elem) => {
                const classes = ["multibox-selection-elem"];

                if (selectedFields.includes(elem.key))
                    classes.push("multibox-selection-elem-selected");

                return (
                    <div
                        className={classes.join(" ")}
                        key={elem.key}
                        onClick={() => selectionElementClicked(elem.key)}
                    >
                        <div className="multibox-selection-elem-content">
                            {elem.translation}
                        </div>
                    </div>
                );
            })
        );
    }, [availableFields, selectedFields, onChanged]);

    return (
        <>
            <h2>{onboardingVolunteerStepFieldTitle}</h2>

            <div className="multibox-selection">{multiboxElems}</div>
        </>
    );
};

export default VolunteerOnboardingStep2;
