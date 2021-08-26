import * as admin from "firebase-admin";

admin.initializeApp();

const firestore = admin.firestore();
export default firestore;

const firebase = admin.database();
export { firebase };
