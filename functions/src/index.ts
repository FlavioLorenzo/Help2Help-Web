// Refer to this tutorial: https://www.youtube.com/watch?v=3Z0V3cvgns8

import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import algoliasearch from "algoliasearch";

admin.initializeApp();

// Functions environment variables
const env = functions.config();

// Initialize the Algolia Client with secrets
// Secrets were instantiated with the following CLI command:
// firebase functions:config:set algolia.appid={Application Id} algolia.apikey={API Key}
const client = algoliasearch(env.algolia.appid, env.algolia.apikey);
const index = client.initIndex("organizations");

// Update the algolia Index whenever a new document is created
exports.indexOrganization = functions.firestore
    .document("organizations/{organizationId}")
    .onCreate((snap, context) => {
        const data = snap.data();
        data.objectID = context.params.organizationId;
        // Add the data to the Algolia index
        return index.saveObject(data).catch((error) => {
            console.log(error);
            return null;
        });
    });

// Remove an Algolia Index whenever a document is deleted
exports.unindexOrganization = functions.firestore
    .document("organizations/{organizationId}")
    .onDelete((snap, context) => {
        const objectId = snap.id;

        // Delete the selected objject from the Algolia index
        return index.deleteObject(objectId);
    });

// Update an Algolia Index whenever a document is modified
exports.updateOrganization = functions.firestore
    .document("organizations/{organizationId}")
    .onUpdate((change, context) => {
        const data = change.after.data();
        data.objectID = context.params.organizationId;

        // Add the data to the Algolia index
        return index.saveObject(data);
    });
