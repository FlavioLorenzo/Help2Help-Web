import { useState, useRef } from "react";

import { useHistory } from "react-router-dom";

import { useAuth } from "../../../../contexts/AuthContext";

import { ToastElement } from "../../../../components/UI/Toast/Toast";

/**
 * Business logic for the VolunteerSignUp component
 */
export default function useVolunteerSignUp() {
	const firstNameRef = useRef<HTMLInputElement>(null);
	const surnameRef = useRef<HTMLInputElement>(null);
	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const passwordConfirmationRef = useRef<HTMLInputElement>(null);
	// eslint-disable-next-line
	const { signup } = useAuth();
	// eslint-disable-next-line
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	// eslint-disable-next-line
	const history = useHistory();

	const [toastMessages, setToastMessages] = useState<Array<ToastElement>>([]);

	const handleSubmit = async (e:any) => {
		e.preventDefault();

		if (!signup) return;

		if (
			emailRef?.current?.checkValidity() &&
			passwordRef?.current?.checkValidity() &&
			passwordConfirmationRef?.current?.checkValidity()
		) {
			try {
				setError("");
				setLoading(true);

				signup(emailRef.current.value, passwordRef.current.value)
					.then(() => {
						const newId = toastMessages.length
							? toastMessages[toastMessages.length - 1].id + 1
							: 0;

						const newToastMessage: ToastElement = {
							id: newId,
							title: "Successo",
							description: "Dovrebbe esserti stata inviata una mail pirla",
							type: "Success",
						};

						setToastMessages([newToastMessage]);

						// history.push("/");
					})
					.catch((error: any) => {
						const newId = toastMessages.length
							? toastMessages[toastMessages.length - 1].id + 1
							: 0;

						const newToastMessage: ToastElement = {
							id: newId,
							title: "Dati mancanti",
							description: error,
							type: "Error",
						};

						setToastMessages([newToastMessage]);
					});
			} catch (error) {
				setError("Si è verificato un errore durante la creazione dell'account");
			}

			setLoading(false);
		} else {
			const newId = toastMessages.length
				? toastMessages[toastMessages.length - 1].id + 1
				: 0;

			const newToastMessage: ToastElement = {
				id: newId,
				title: "Dati mancanti",
				description: "Completa tutti i campi per poterti iscrivere",
				type: "Error",
			};

			setToastMessages([newToastMessage]);
		}
	}

	return { firstNameRef, surnameRef, emailRef, passwordRef, passwordConfirmationRef, loading, toastMessages, handleSubmit };
}
