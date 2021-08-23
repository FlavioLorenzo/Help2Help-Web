import { FormattedMessage } from "react-intl";

export const signupAsOrganizationTitle = (
    <FormattedMessage
        id="signup_organization_title"
        defaultMessage="Registra il tuo ente"
        description="Title of the organization's signup page"
    />
);

export const signupAsOrganizationButton = (
    <FormattedMessage
        id="signup_organization_button"
        defaultMessage="Registrazione"
        description="Text for signup button in the organization's signup page"
    />
);

export const signupAsOrganizationAlreadySubscribed = (
    <FormattedMessage
        id="signup_organization_already_subscribed"
        defaultMessage="Il tuo ente è già iscritto? Accedi al portale"
        description="Text for the link to the login page to be shown in the organization's signup view"
    />
);
