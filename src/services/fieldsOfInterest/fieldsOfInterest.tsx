/**
 * Service function which retrieves available fields of interest and provides the respective translation
 */

import {useEffect, useState} from "react";
import {firestoreDB} from "../../config/firebaseConfig";
import {
    foiAnimals,
    foiAssistance,
    foiCulture,
    foiDisability,
    foiEducation, foiEnvironment,
    foiGrowth,
    foiHealth,
    foiHumanRights,
    foiInternationalCooperation,
    foiReligion,
    foiSport,
    foiWomen,
} from "./fieldsOfInterest.translations";

export interface FieldsOfInterestTranslationType {
    key: string;
    translation: any;
}

interface FieldsOfInterestServiceType {
    fieldsOfInterest: Array<FieldsOfInterestTranslationType>;
    getFieldsOfInterestTranslation: (
        fieldOfInterest: string
    ) => FieldsOfInterestTranslationType;
}

export function useFieldsOfInterestService(): FieldsOfInterestServiceType {
    const [fieldsOfInterest, setFieldsOfInterest] = useState<Array<FieldsOfInterestTranslationType>>([]);

    /**
     * Retrieve all fields of interest
     */
    useEffect(() => {
        firestoreDB
            .collection("fields_of_interest")
            .get()
            .then((querySnapshot: any) => {
                const retrievedFields: Array<FieldsOfInterestTranslationType> =
                    [];
                querySnapshot.forEach((doc: any) => {
                    retrievedFields.push(
                        getFieldsOfInterestTranslation(doc.id)
                    );
                });

                setFieldsOfInterest(retrievedFields);
            });
    }, []);

    /**
     * Return for each field of interest the translation
     * @param fieldOfInterest The field of interest to translate
     * @returns The object containing the translation of the given field of interest
     */
    function getFieldsOfInterestTranslation(fieldOfInterest: string) {
        switch (fieldOfInterest) {
            case "animals":
                return {
                    key: fieldOfInterest,
                    translation: foiAnimals,
                };
            case "assistance":
                return {
                    key: fieldOfInterest,
                    translation: foiAssistance,
                };
            case "culture":
                return {
                    key: fieldOfInterest,
                    translation: foiCulture,
                };
            case "disability":
                return {
                    key: fieldOfInterest,
                    translation: foiDisability,
                };
            case "education":
                return {
                    key: fieldOfInterest,
                    translation: foiEducation,
                };
            case "environment":
                return {
                    key: fieldOfInterest,
                    translation: foiEnvironment,
                };
            case "growth":
                return {
                    key: fieldOfInterest,
                    translation: foiGrowth,
                };
            case "health":
                return {
                    key: fieldOfInterest,
                    translation: foiHealth,
                };
            case "human_rights":
                return {
                    key: fieldOfInterest,
                    translation: foiHumanRights,
                };
            case "international_cooperation":
                return {
                    key: fieldOfInterest,
                    translation: foiInternationalCooperation,
                };
            case "religion":
                return {
                    key: fieldOfInterest,
                    translation: foiReligion,
                };
            case "sport":
                return {
                    key: fieldOfInterest,
                    translation: foiSport,
                };
            case "women":
                return {
                    key: fieldOfInterest,
                    translation: foiWomen,
                };
            default:
                throw new Error(
                    "Unexpected field of interest: " + fieldOfInterest
                );
        }
    }

    return {fieldsOfInterest, getFieldsOfInterestTranslation};
}
