import { FormattedMessage } from "react-intl";

export const loginWithEmailPasswordForgotten = (
    <FormattedMessage
        id="email_login_as_organization_password_forgotten"
        defaultMessage="Ho dimenticato la password"
        description="Message that user (organization) will click if he forgot his password"
    />
);

export const loginRegisterAsOrganization = (
    <FormattedMessage
        id="login_register_as_organization"
        defaultMessage="Registra il tuo ente"
        description="Message to prompt an organization owner for registering it's organization into the app"
    />
);

export const loginAccessWithEmail = (
    <FormattedMessage
        id="email_login_as_organization_access"
        defaultMessage="Accedi"
        description="Initial message that invites users (organizationss) to login to the app using his email"
    />
);
