import {FormattedMessage} from "react-intl";

export const onboardingOrganizationStep1Welcome = (
    <FormattedMessage
        id="onboarding_organization_step1_welcome"
        defaultMessage="Benvenuto!"
        description="Welcome message during initial step of organization onboarding"
    />
);

export const onboardingOrganizationStep1Body = (
    <FormattedMessage
        id="onboarding_organization_step1_body"
        defaultMessage="Prima di accedere alla piattaforma, permettici di porti qualche domanda."
        description="Body message to show during first step of organization onboarding"
    />
);

export const onboardingOrganizationStepFieldTitle = (
    <FormattedMessage
        id="onboarding_organization_step_field_title"
        defaultMessage="Su quali ambiti è coinvolto il tuo ente?"
        description="Title of the onboarding step when asking for the organization's fields of operation"
    />
);

export const onboardingOrganizationStepLocationTitle = (
    <FormattedMessage
        id="onboarding_organization_step_location_title"
        defaultMessage="Dove opera il tuo ente?"
        description="Title of the onboarding step when asking for the organization's location"
    />
);

export const onboardingOrganizationStepLocationInputLabel = (
    <FormattedMessage
        id="onboarding_organization_step_location_input_label"
        defaultMessage="Inserisci un indirizzo o città"
        description="Label for the location search input form during organization's onboarding"
    />
);

export const onboardingOrganizationStepAvailabilitiesTitle = (
    <FormattedMessage
        id="onboarding_organization_step_availabilities_title"
        defaultMessage="In quali momenti della settimana è richiesta la disponibilità di un volontario?"
        description="Title of the onboarding step to ask the organization's time availabilities"
    />
);

export const onboardingOrganizationFinalStepTitle = (
    <FormattedMessage
        id="onboarding_organization_final_step_title"
        defaultMessage="Complimenti!"
        description="Congratulatory title when organization completes onboarding process"
    />
);

export const onboardingOrganizationFinalStepBody1 = (
    <FormattedMessage
        id="onboarding_organization_final_step_body1"
        defaultMessage="Hai completato il processo di registrazione."
        description="First text body section when organization completes onboarding process"
    />
);

export const onboardingOrganizationFinalStepBody2 = (
    <FormattedMessage
        id="onboarding_organization_final_step_body2"
        defaultMessage="Per questo messaggio ho ancora meno fantasia. Greta scelgo te!"
        description="Second text body section when organization completes onboarding process"
    />
);

export const onboardingOrganizationOnSubmitFieldsOfInterestError = (
    <FormattedMessage
        id="onboarding_organization_on_submit_fields_of_interest_error"
        defaultMessage="Si prega di inserire almeno un ambito di interesse."
        description="Error shown when no fields of interest has been submitted by the organization during the onboarding process"
    />
);

export const onboardingOrganizationOnSubmitLocationError = (
    <FormattedMessage
        id="onboarding_organization_on_submit_location_error"
        defaultMessage="Devi inserire un indirizzo o città."
        description="Error shown when no location was provided by the organization during the onboarding process"
    />
);

export const onboardingOrganizationOnSubmitAvailabilitiesError = (
    <FormattedMessage
        id="onboarding_organization_on_submit_availabilities_error"
        defaultMessage="Non ci risultano inserite delle disponibilità orarie."
        description="Error shown when no time availability was provided by the organization during the onboarding process"
    />
);

export const onboardingOrganizationOnSubmitOtherError = (
    <FormattedMessage
        id="onboarding_organization_on_submit_other_error"
        defaultMessage="Si è verificato un errore inatteso."
        description="Generic error shown to the organization for any other error occurred during the onboarding process"
    />
);
