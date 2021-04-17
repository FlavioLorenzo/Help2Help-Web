import { Dispatch } from "react";
import * as actionTypes from "./actionTypes";
import { firestoreDB } from "../../config/firebaseConfig";
import { OrganizationType } from "../../types/ReduxTypes";
import { OrganizationAction } from "../reducers/organizationReducer";

export const setOrganizationsList = (organizationList: OrganizationType[]) => {
    return {
        type: actionTypes.SET_ORGANIZATION_LIST,
        organizationList: organizationList,
    };
};

export const fetchOrganizationList = () => {
    return (dispatch: Dispatch<OrganizationAction>) => {
        firestoreDB
            .collection("organization")
            .orderBy("name")
            .limit(5)
            .get()
            .then((response) => {
                const organizationList: OrganizationType[] = [];
                response.forEach((doc) => {
                    const newOrg: any = doc.data();
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
