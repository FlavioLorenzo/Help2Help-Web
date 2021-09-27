import { FormattedMessage } from "react-intl";

export const authErrorMessageEmailAlreadyInUse = (
    <FormattedMessage
        id="auth_error_message_email_already_in_use"
        defaultMessage="L'indirizzo email è già in uso da un altro account."
        description="Error message if user signs up with an email already present at database"
    />
);

export const authErrorMessageEmailNotVerified = (
    <FormattedMessage
        id="auth_error_message_email_not_verified"
        defaultMessage="L'indirizzo mail non è stato ancora verificato."
        description="Error message if user tried to login with an unverified account"
    />
);
