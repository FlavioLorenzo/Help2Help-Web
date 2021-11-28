import {SearchLocationInputType} from "../../components/ui/SearchLocationInput/SearchLocationInput.types";
import {firestoreDB} from "../../config/firebaseConfig";
import {useAuth} from "../auth/AuthContext";
import {AvailabilityType} from "../../types/AvailabilityType";

interface UserServiceType {
    onboardVolunteer: (
        fieldsOfInterest: Array<string>,
        locationInput: SearchLocationInputType,
        availabilities: AvailabilityType
    ) => Promise<any>;
    onboardOrganization: (
        fieldsOfOperation: Array<string>,
        locationInput: SearchLocationInputType,
        availabilities: AvailabilityType
    ) => Promise<any>;
}

export function useUserService(): UserServiceType {
    const {currentUser, setIsNew} = useAuth();

    /**
     * Set the volunteer account upon gathering the information required during the onboarding procedure
     * @param fieldsOfInterest An array collecting all the fields of interest of a user
     * @param locationInput An object that stores the location information concerning the user
     * @param availabilities An object that stores the time availabilities of the user
     */
    function onboardVolunteer(
        fieldsOfInterest: Array<string>,
        locationInput: SearchLocationInputType,
        availabilities: AvailabilityType
    ) {
        const promises = [];

        promises.push(
            firestoreDB
                .collection("users_metadata")
                .doc(currentUser?.uid)
                .update({
                    isNew: false
                })
                .then(() => {
                    if (setIsNew) setIsNew(false);
                })
        );

        promises.push(
            firestoreDB
                .collection("volunteers")
                .doc(currentUser?.uid)
                .update({
                    fieldsOfInterest: fieldsOfInterest,
                    location: locationInput,
                    availabilities: availabilities
                })
        );

        return Promise.all(promises);
    }

    /**
     * Set the organization account upon gathering the information required during the onboarding procedure
     * @param fieldsOfOperation An array collecting all the fields of operation of the organization
     * @param locationInput An object that stores the location information concerning the organization
     * @param availabilities An object that stores the time requirements of the organization
     */
    function onboardOrganization(
        fieldsOfOperation: Array<string>,
        locationInput: SearchLocationInputType,
        availabilities: AvailabilityType
    ) {
        const promises = [];

        promises.push(
            firestoreDB
                .collection("users_metadata")
                .doc(currentUser?.uid)
                .update({
                    isNew: false
                })
                .then(() => {
                    if (setIsNew) setIsNew(false);
                })
        );

        promises.push(
            firestoreDB
                .collection("organizations")
                .doc(currentUser?.uid)
                .update({
                    fieldsOfOperation: fieldsOfOperation,
                    location: locationInput,
                    availabilities: availabilities
                })
        );

        return Promise.all(promises);
    }

    return {onboardVolunteer, onboardOrganization};
}
