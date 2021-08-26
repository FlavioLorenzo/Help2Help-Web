import * as functions from "firebase-functions";
import firestore from "./firebaseConfig";

// Delete information related to the user
export const removeUserData = functions.auth.user().onDelete(async (user) => {
    const uid = user.uid;

    await firestore.doc("organizations/" + uid).delete();

    return firestore.doc("volunteers/" + uid).delete();
});
