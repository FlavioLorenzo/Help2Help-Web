import { FormattedMessage } from "react-intl";

export const loginAccessWith = (
    <FormattedMessage
        id="login_access_with_standard"
        defaultMessage="Accedi con"
        description="Initial message that invites users to login to the app"
    />
);

export const loginInstead = (
    <FormattedMessage
        id="login_instead"
        defaultMessage="oppure"
        description="Alternative message if user wants to login with his email"
    />
);

export const loginContinueWithEmail = (
    <FormattedMessage
        id="login_continue_with_email"
        defaultMessage="Accedi con l'email"
        description="Button message if user wants to login with email"
    />
);

export const loginOrganization = (
    <FormattedMessage
        id="login_organization"
        defaultMessage="Sei un ente? Clicca qui!"
        description="Message that user will click to be redirected to organization page"
    />
);
