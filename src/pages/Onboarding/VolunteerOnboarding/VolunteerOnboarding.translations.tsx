import {FormattedMessage} from "react-intl";

export const onboardingVolunteerStep1Welcome = (
    <FormattedMessage
        id="onboarding_volunteer_step1_welcome"
        defaultMessage="Benvenuto!"
        description="Welcome message during initial step of volunteer onboarding"
    />
);

export const onboardingVolunteerStep1Body = (
    <FormattedMessage
        id="onboarding_volunteer_step1_body"
        defaultMessage="Prima di accedere alla piattaforma, permettici di porti qualche domanda."
        description="Body message to show during first step of volunteer onboarding"
    />
);

export const onboardingVolunteerStepFieldTitle = (
    <FormattedMessage
        id="onboarding_volunteer_step_field_title"
        defaultMessage="Quali sono i tuoi ambiti di interesse?"
        description="Title of the onboarding step when asking for the volunteer's fields of interest"
    />
);

export const onboardingVolunteerStepLocationTitle = (
    <FormattedMessage
        id="onboarding_volunteer_step_location_title"
        defaultMessage="Dove vorresti cercare opportunità di volontariato?"
        description="Title of the onboarding step when asking for the volunteer's location"
    />
);

export const onboardingVolunteerStepLocationInputLabel = (
    <FormattedMessage
        id="onboarding_volunteer_step_location_input_label"
        defaultMessage="Inserisci un indirizzo o città"
        description="Label for the location search input form during volunteer's onboarding"
    />
);

export const onboardingVolunteerStepAvailabilitiesTitle = (
    <FormattedMessage
        id="onboarding_volunteer_step_availabilities_title"
        defaultMessage="Quali sono le tue disponibilità?"
        description="CTitle of the onboarding step to ask the volunteer's time availabilities"
    />
);

export const onboardingVolunteerFinalStepTitle = (
    <FormattedMessage
        id="onboarding_volunteer_final_step_title"
        defaultMessage="Complimenti!"
        description="Congratulatory title when volunteer completes onboarding process"
    />
);

export const onboardingVolunteerFinalStepBody1 = (
    <FormattedMessage
        id="onboarding_volunteer_final_step_body1"
        defaultMessage="Hai completato il processo di registrazione."
        description="First text body section when volunteer completes onboarding process"
    />
);

export const onboardingVolunteerFinalStepBody2 = (
    <FormattedMessage
        id="onboarding_volunteer_final_step_body2"
        defaultMessage="Vorrei dirti qualcosa di più furbo, ma poi le ragazze mi cazziano che spreco tempo sulle 'sciocchezze' (versione family friendly che anche Giada si lamenta)."
        description="Second text body section when volunteer completes onboarding process"
    />
);

export const onboardingVolunteerOnSubmitFieldsOfInterestError = (
    <FormattedMessage
        id="onboarding_volunteer_on_submit_fields_of_interest_error"
        defaultMessage="Dottore! Seleziona almeno un ambito di interesse."
        description="Error shown when no fields of interest has been submitted by the volunteer during the onboarding process"
    />
);

export const onboardingVolunteerOnSubmitLocationError = (
    <FormattedMessage
        id="onboarding_volunteer_on_submit_location_error"
        defaultMessage="Devi inserire un indirizzo o città."
        description="Error shown when no location was provided by the volunteer during the onboarding process"
    />
);

export const onboardingVolunteerOnSubmitAvailabilitiesError = (
    <FormattedMessage
        id="onboarding_volunteer_on_submit_availabilities_error"
        defaultMessage="Shit! Mancano pure le disponibilità orarie."
        description="Error shown when no time availability was provided by the volunteer during the onboarding process"
    />
);

export const onboardingVolunteerOnSubmitOtherError = (
    <FormattedMessage
        id="onboarding_volunteer_on_submit_other_error"
        defaultMessage="Si è verificato un errore inatteso. Contattare la dottoressa Eleonora per chiarimenti"
        description="Generic error shown to the volunteer for any other error occurred during the onboarding process"
    />
);
