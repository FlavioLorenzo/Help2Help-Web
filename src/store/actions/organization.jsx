import * as actionTypes from "./actionTypes";
import { firestoreDB } from "../../config/fbConfig";

export const setOrganizationsList = (organizationList) => {
    return {
        type: actionTypes.SET_ORGANIZATION_LIST,
        organizationList: organizationList,
    };
};

export const fetchOrganizationList = () => {
    return (dispatch) => {
        firestoreDB
            .collection("organization")
            .orderBy("name")
            .limit(5)
            .get()
            .then((response) => {
                const organizationList = [];
                response.forEach((doc) => {
                    const newOrg = doc.data();
                    newOrg.id = doc.id;

                    organizationList.push(newOrg);
                    dispatch(setOrganizationsList(organizationList));
                    /*
                    Example of how to obtain an image src from Firebase Storage
                    const path ="images/organizations/" + doc.id + "/profile.jpg";
                    firebaseStorage
                        .child(path)
                        .getDownloadURL()
                        .then((url) => {
                            newOrg.srcImage = url;
                        });*/
                });
            })
            .catch((error) => {
                console.log(
                    "There was an error while getting the document: ",
                    error
                );
            });
    };
};
