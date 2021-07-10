import { useEffect } from "react";

import { useHistory } from "react-router-dom";

import { useAuth } from "../../../../contexts/AuthContext";

import useToast from "../../../../components/UI/Toast/useToast";
import { getURLSearchParamsFromURL } from "../../../../shared/miscUtils";

export const VolunteerEmailVerified = () => {
    const { handleEmailVerification } = useAuth();
    const history = useHistory();

    const { setToastErrorMessage, setToastSuccessMessage } = useToast();

    useEffect(() => {
        if (!handleEmailVerification) {
            return;
        }

        const params: any = getURLSearchParamsFromURL(window.location.href);

        // TODO: Substitute with translation
        if (!params["oobCode"]) {
            setToastErrorMessage(
                "Errore",
                "Il link risulta errato, prova a ricontrollare la tua mail."
            );

            history.push("/login/volunteer/email");
        }

        handleEmailVerification(params["oobCode"])
            .then(() => {
                // TODO: Define correct message and add translation
                setToastSuccessMessage(
                    "Sei dei nostri!",
                    "La tua mail è stata verificata. Benvenuto in Help2Help!"
                );
            })
            .catch((error) => {
                // TODO: Check possible error messages and print translation
                setToastErrorMessage("Errore", error.message);
            })
            .finally(() => {
                history.push("/login/volunteer/email");
            });
    }, [
        handleEmailVerification,
        history,
        setToastSuccessMessage,
        setToastErrorMessage,
    ]);
    return <></>;
};
