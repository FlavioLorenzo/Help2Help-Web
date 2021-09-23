import { useEffect, useState } from "react";

interface Step2Props {
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
    selectedFields,
    onChanged,
}: Step2Props) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [fieldsOfInterest, setFieldsOfInterest] = useState([
        "Ambiente",
        "Animali",
        "Sport",
        "Cultura",
        "Sviluppo",
        "Religione",
    ]);
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
            fieldsOfInterest.map((elem) => {
                const classes = ["multibox-selection-elem"];

                if (selectedFields.includes(elem))
                    classes.push("multibox-selection-elem-selected");

                return (
                    <div
                        className={classes.join(" ")}
                        key={elem}
                        onClick={() => selectionElementClicked(elem)}
                    >
                        <div className="multibox-selection-elem-content">
                            {elem}
                        </div>
                    </div>
                );
            })
        );
    }, [fieldsOfInterest, selectedFields, onChanged]);

    return (
        <>
            <h2>Quali sono i tuoi ambiti di interesse?</h2>

            <div className="multibox-selection">{multiboxElems}</div>
        </>
    );
};

export default VolunteerOnboardingStep2;
