import * as actionTypes from "./actionTypes";
import { firestoreDB } from "../../config/fbConfig";

export const setEventList = (eventList) => {
    return {
        type: actionTypes.SET_EVENT_LIST,
        eventList: eventList,
    };
};

export const fetchEventList = () => {
    return (dispatch) => {
        firestoreDB
            .collection("event")
            .orderBy("date")
            .limit(5)
            .get()
            .then((response) => {
                const eventList = [];
                response.forEach((doc) => {
                    const newEvent = doc.data();
                    newEvent.id = doc.id;

                    eventList.push(newEvent);
                    dispatch(setEventList(eventList));
                    /*
                    Example of how to obtain an image src from Firebase Storage
                    const path ="images/events/" + doc.id + "/profile.jpg";
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
