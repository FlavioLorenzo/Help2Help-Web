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

export const loginAccessWithEmail = (
    <FormattedMessage
        id="email_login_access"
        defaultMessage="Accedi"
        description="Initial message that invites users to login to the app using his email"
    />
);

export const loginRegisterWithEmail = (
    <FormattedMessage
        id="email_login_register"
        defaultMessage="Non sei ancora iscritto? Registrati adesso!"
        description="Message to prompt the user for registering into the app"
    />
);

export const loginWithEmailPasswordForgotten = (
    <FormattedMessage
        id="email_login_password_forgotten"
        defaultMessage="Ho dimenticato la mia password"
        description="Message that user will click if he forgot his password"
    />
);

export const loginAsOrganization = (
    <FormattedMessage
        id="login_as_organization"
        defaultMessage="Accedi come Ente"
        description="Initial message that invites organization owners to login to the app with their email"
    />
);

export const loginRegisterAsOrganization = (
    <FormattedMessage
        id="login_register_as_organization"
        defaultMessage="Registra il tuo ente"
        description="Message to prompt an organization owner for registering it's organization into the app"
    />
);

/**
 * SIGNUP
 */

export const signupAsOrganizationTitle = (
    <FormattedMessage
        id="signup_organization_title"
        defaultMessage="Registra il tuo ente"
        description="Title of the organization's signup page"
    />
);

export const signupAsOrganizationName = (
    <FormattedMessage
        id="signup_organization_name"
        defaultMessage="Nome dell'organizzazione"
        description="Text for the organization's name input box"
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
