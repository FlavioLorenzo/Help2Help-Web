import { useEffect } from "react";

import { useHistory } from "react-router-dom";

import { useAuth } from "../../../contexts/AuthContext";

import useToast from "../../../components/UI/Toast/useToast";

const Logout = () => {
    const { logout } = useAuth();
    const history = useHistory();

    const { setToastErrorMessage, setToastSuccessMessage } = useToast();

    useEffect(() => {
        if (!logout) {
            return;
        }

        logout()
            .then(() => {
                // TODO: Define correct message and add translation
                setToastSuccessMessage(
                    "Arrivederci",
                    "Attendiamo con ansia il tuo ritorno."
                );
            })
            .catch((error) => {
                // TODO: Check possible error messages and print translation
                setToastErrorMessage("Errore", error.message);
            })
            .finally(() => {
                history.push("/login/volunteer/");
            });
    }, [logout, history, setToastSuccessMessage, setToastErrorMessage]);
    return <></>;
};

export default Logout;
