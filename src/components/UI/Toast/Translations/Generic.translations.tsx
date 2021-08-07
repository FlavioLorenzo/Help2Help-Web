import { FormattedMessage } from "react-intl";

export const titleStandardInformalSuccess = (
    <FormattedMessage
        id="toast_title_standard_informal_success"
        defaultMessage="Urrà"
        description="An informal success message to signal the user that the operation was successful"
    />
);

export const titleStandardFormalSuccess = (
    <FormattedMessage
        id="toast_title_standard_formal_success"
        defaultMessage="Successo"
        description="A formal success message to signal the user that the operation was successful"
    />
);

export const titleStandardInformalError = (
    <FormattedMessage
        id="toast_title_standard_informal_error"
        defaultMessage="Ooops"
        description="An informal error message to signal the user that something went wrong"
    />
);

export const titleStandardFormalError = (
    <FormattedMessage
        id="toast_title_standard_formal_error"
        defaultMessage="Errore"
        description="A formal error message to signal the user that something went wrong"
    />
);

export const titleMissingDataError = (
    <FormattedMessage
        id="toast_title_missing_data_error"
        defaultMessage="Dati mancanti"
        description="Title when user still needs to complete all required fields in a form"
    />
);

export const titleInvalidDataError = (
    <FormattedMessage
        id="toast_title_invalid_data_error"
        defaultMessage="Dati non validi"
        description="Title when user has filled all fields but the inserted values are not valid"
    />
);

export const descGenericMissingDataError = (
    <FormattedMessage
        id="toast_desc_generic_missing_data_error"
        defaultMessage="Completa tutti i campi per poter proseguire"
        description="Generic description when user still needs to complete all required fields in a form"
    />
);
