import { FormattedMessage } from "react-intl";

export const loginAccessWith = (
    <FormattedMessage
        id="login_access_with_email"
        defaultMessage="Accedi"
        description="Initial message that invites users to login to the app using his email"
    />
);

export const loginRegister = (
    <FormattedMessage
        id="login_register"
        defaultMessage="Non sei ancora iscritto? Registrati adesso!"
        description="Message to prompt the user for registering into the app"
    />
);

export const loginPasswordForgotten = (
    <FormattedMessage
        id="login_password_forgotten"
        defaultMessage="Ho dimenticato la mia password"
        description="Message that user will click if he forgot his password"
    />
);
