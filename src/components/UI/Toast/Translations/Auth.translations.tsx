import { FormattedMessage } from "react-intl";

export const titleEmailVerificationSuccess = (
    <FormattedMessage
        id="toast_title_email_verification_success"
        defaultMessage="Sei dei nostri!"
        description="Title to show when user successfully verified their email."
    />
);

export const titleLogoutSuccess = (
    <FormattedMessage
        id="toast_title_logout_success"
        defaultMessage="Arrivederci"
        description="Title of the message to show when user successfully logged out."
    />
);

export const descGenericSignupError = (
    <FormattedMessage
        id="toast_desc_generic_signup_error"
        defaultMessage="Si è verificato un errore durante la creazione dell'account"
        description="A generic error when user cannot sign up."
    />
);

export const descGenericLoginError = (
    <FormattedMessage
        id="toast_desc_generic_login_error"
        defaultMessage="Si è verificato un errore durante il login. Si prega di riprovare più tardi."
        description="A generic error when user cannot login due to unknown reasons."
    />
);

export const descWrongLinkError = (
    <FormattedMessage
        id="toast_desc_wrong_link_error"
        defaultMessage="Il link risulta errato, prova a ricontrollare la tua mail."
        description="Error message to show when email action (recover pwd, verify mail) could not be completed due to incorrect link."
    />
);

export const descPasswordRecoveryError = (
    <FormattedMessage
        id="toast_desc_password_recovery_error"
        defaultMessage="Si è verificato un errore durante la procedura di ripristino password, riprovare più tardi."
        description="Error message to show when password recovery was not successful."
    />
);

export const descPasswordDoNotMatchError = (
    <FormattedMessage
        id="toast_desc_password_do_not_match_errror"
        defaultMessage="Le password fornite non corrispondono."
        description="Error message to show when the two passwords provided in a registration or password reset form do not match."
    />
);

export const descEmailVerificationSuccess = (
    <FormattedMessage
        id="toast_desc_email_verification_success"
        defaultMessage="La tua mail è stata verificata. Benvenuto in Help2Help!"
        description="Description to show when user successfully verified their email."
    />
);

export const descSignupSuccess = (
    <FormattedMessage
        id="toast_desc_signup_success"
        defaultMessage="Iscrizione avvenuta correttamente. Dovrebbe esserti stata inviata una mail."
        description="Description to show when user successfully signed up."
    />
);

export const descLogoutSuccess = (
    <FormattedMessage
        id="toast_desc_logout_success"
        defaultMessage="Attendiamo con ansia il tuo ritorno."
        description="Description to show when user successfully logged out."
    />
);

export const descPasswordRecoverySuccess = (
    <FormattedMessage
        id="toast_desc_password_recovery_success"
        defaultMessage="Una mail con il link per il ripristino della password è stata inviata al tuo account"
        description="Success message to show when password recovery request was successful."
    />
);

export const descPasswordRecoveryResetSuccess = (
    <FormattedMessage
        id="toast_desc_password_recovery_reset_success"
        defaultMessage="La tua password è stata reimpostata correttamente. Prova ad accedere all'app!"
        description="Success message to show when password reset due to password recovery request was successful."
    />
);
