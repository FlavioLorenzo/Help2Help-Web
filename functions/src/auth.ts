import * as functions from "firebase-functions";
import firestore from "./firebaseConfig";

export interface MetadataType {
    type: string;
    isNew: boolean;
}

// Create user related metadata concerning a volunteer
export const addVolunteerMetadata = functions.firestore
    .document("volunteers/{volunteerId}")
    .onCreate((_snap, context) => {
        const uid = context.params.volunteerId;

        return firestore.doc("users_metadata/" + uid).set({
            type: "volunteer",
            isNew: true,
        });
    });

// Create user related metadata concerning an organization
export const addOrganizationMetadata = functions.firestore
    .document("organizations/{organizationId}")
    .onCreate((_snap, context) => {
        const uid = context.params.organizationId;

        return firestore.doc("users_metadata/" + uid).set({
            type: "organization",
            isNew: true,
        });
    });

// Delete information related to the user
export const removeUserData = functions.auth.user().onDelete(async (user) => {
    const uid = user.uid;
    let promises = [];

    const metadata = (
        await firestore.doc("users_metadata/" + uid).get()
    ).data() as MetadataType;

    if (metadata.type === "volunteer") {
        promises = [
            firestore.doc("volunteers/" + uid).delete(),
            firestore.doc("users_metadata/" + uid).delete(),
        ];

        return Promise.all(promises);
    }

    // Otherwise it is an organization
    promises = [
        firestore.doc("organizations/" + uid).delete(),
        firestore.doc("users_metadata/" + uid).delete(),
    ];

    return Promise.all(promises);
});
