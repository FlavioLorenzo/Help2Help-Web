import { SearchLocationInputType } from "../../components/ui/SearchLocationInput/SearchLocationInput.types";
import { firestoreDB } from "../../config/firebaseConfig";
import { useAuth } from "../auth/AuthContext";

interface UserServiceType {
    onboardVolunteer: (
        fieldsOfInterest: Array<string>,
        locationInput: SearchLocationInputType
    ) => Promise<any>;
}

export function useUserService(): UserServiceType {
    const { currentUser, setIsNew } = useAuth();

    /**
     * Set the volunteer account upon gathering the information required during the onboarding procedure
     * @param fieldsOfInterest An array collecting all the fields of interest of a user
     * @param locationInput An object that stores the location information concerning the user
     */
    function onboardVolunteer(
        fieldsOfInterest: Array<string>,
        locationInput: SearchLocationInputType
    ) {
        return firestoreDB
            .collection("users_metadata")
            .doc(currentUser?.uid)
            .set({
                isNew: false,
                fieldsOfInterest: fieldsOfInterest,
                location: locationInput,
            })
            .then(() => {
                if (setIsNew) setIsNew(false);
            });
    }

    return { onboardVolunteer };
}
