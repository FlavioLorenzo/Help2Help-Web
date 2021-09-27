import { FormattedMessage } from "react-intl";

export const loginWithEmailPasswordForgotten = (
    <FormattedMessage
        id="email_login_as_volunteer_password_forgotten"
        defaultMessage="Ho dimenticato la mia password"
        description="Message that user (volunteer) will click if he forgot his password"
    />
);

export const loginRegisterWithEmail = (
    <FormattedMessage
        id="email_login_as_volunteer_register"
        defaultMessage="Non sei ancora iscritto? Registrati adesso!"
        description="Message to prompt the user (volunteer) for registering into the app"
    />
);

export const loginAccessWithEmail = (
    <FormattedMessage
        id="email_login_as_volunteer_access"
        defaultMessage="Accedi"
        description="Initial message that invites users (volunteers) to login to the app using his email"
    />
);
