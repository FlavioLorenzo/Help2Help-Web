import { FormattedMessage } from "react-intl";

export const signupAsVolunteerTitle = (
    <FormattedMessage
        id="signup_volunteer_title"
        defaultMessage="Iscrizione"
        description="Title of the volunteer's signup page"
    />
);

export const signupAsVolunteerButton = (
    <FormattedMessage
        id="signup_volunteer_button"
        defaultMessage="Iscriviti"
        description="Text for signup button"
    />
);

export const signupAsVolunteerAlreadySubscribed = (
    <FormattedMessage
        id="signup_volunteer_already_subscribed"
        defaultMessage="Sei già iscritto? Accedi al portale"
        description="Text for the link to the login page to be shown in the volunteer's signup view"
    />
);
