import { FormattedMessage } from "react-intl";

export const loginAccessWith = (
    <FormattedMessage
        id="login_volunteer_access_with_standard"
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
        id="login_volunteer_continue_with_email"
        defaultMessage="Accedi con l'email"
        description="Button message if user chooses the login through email option"
    />
);

export const loginStandardMessage = (
    <FormattedMessage
        id="login_standard_message"
        defaultMessage="Accedi"
        description="Standard button message through which the user can proceed with login"
    />
);

export const loginAsOrganizationRedirect = (
    <FormattedMessage
        id="login_organization_redirect"
        defaultMessage="Sei un ente? Clicca qui!"
        description="Message that user will click to be redirected to organization page"
    />
);

export const loginAsOrganization = (
    <FormattedMessage
        id="login_organization"
        defaultMessage="Accedi come Ente"
        description="Initial message that invites organization owners to login to the app with their email"
    />
);

/**
 * Confirmation upon confirmation mail sent
 */

export const signupAsVolunteerMailSentCongratulations = (
    <FormattedMessage
        id="signup_volunteer_mail_sent_congratulations"
        defaultMessage="Congratulazioni"
        description="Title of the congratulatory page where the volunteer will be redirected upon successful signup"
    />
);
export const signupAsVolunteerMailSentMainText = (
    <FormattedMessage
        id="signup_volunteer_mail_sent_main_text"
        defaultMessage="Manca poco! Ti abbiamo inviato una mail per confermare che tu non sia una spia aliena."
        description="Title of the congratulatory page where the volunteer will be redirected upon successful signup"
    />
);
export const signupAsVolunteerMailSentBackToLogin = (
    <FormattedMessage
        id="signup_volunteer_mail_sent_back_to_login"
        defaultMessage="Vai alla schermata di login"
        description="Link to give the user the opportunity to go back to the login page"
    />
);

/**
 * PASSWORD RECOVERY
 */

export const recoveryAsVolunteerTitle = (
    <FormattedMessage
        id="recovery_volunteer_title"
        defaultMessage="Ripristina la tua password"
        description="Title of the volunteer's password recovery page"
    />
);

export const recoveryAsOrganizationTitle = (
    <FormattedMessage
        id="recovery_organization_title"
        defaultMessage="Servizio di ripristino password"
        description="Title of the organizations's password recovery page"
    />
);

export const recoverySendLinkButton = (
    <FormattedMessage
        id="recovery_send_link_button"
        defaultMessage="Invia link"
        description="Password recovery page's button so start the recovery process by sending the appropriate link to the user"
    />
);

export const authGoBack = (
    <FormattedMessage
        id="auth_go_back"
        defaultMessage="Torna indietro"
        description="Text for the go back link in the authentication pages"
    />
);

export const createNewPasswordButton = (
    <FormattedMessage
        id="recovery_create_new_password_button"
        defaultMessage="Crea password"
        description="Text for the button to trigger the new password creation in the password-recovery/new-password page"
    />
);

export const authConfirmPassword = (
    <FormattedMessage
        id="auth_confirm_password"
        defaultMessage="Conferma la tua password"
        description="Message for the form's field where the user must provide for a second time his password."
    />
);

/**
 * FORM VALIDATION
 */

export const formErrorFirstNameRequired = (
    <FormattedMessage
        id="form_error_first_name_required"
        defaultMessage="Inserisci il tuo nome"
        description="Error message when user does not fill the first name field"
    />
);

export const formErrorLastNameRequired = (
    <FormattedMessage
        id="form_error_last_name_required"
        defaultMessage="Inserisci il tuo cognome"
        description="Error message when user does not fill the last name field"
    />
);

export const formErrorEmailRequired = (
    <FormattedMessage
        id="form_error_email_required"
        defaultMessage="Inserisci la tua email"
        description="Error message when user does not fill the email field"
    />
);

export const formErrorPasswordRequired = (
    <FormattedMessage
        id="form_error_password_required"
        defaultMessage="Inserisci la tua password tra gli 8 e i 32 caratteri"
        description="Error message when user does not fill the password field or the field is wrongly valued"
    />
);

export const formErrorPasswordMustMatch = (
    <FormattedMessage
        id="form_error_password_must_match"
        defaultMessage="Le password fornite devono coincidere"
        description="Error message when user fills the password and confirmation password fields with different values"
    />
);
