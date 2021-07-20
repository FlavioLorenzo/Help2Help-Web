import { useState } from "react";

import { useHistory } from "react-router-dom";

import { useAuth } from "../../../../contexts/AuthContext";

import useToast from "../../../../components/UI/Toast/useToast";

/**
 * Business logic for the VolunteerSignUp component
 */
export default function useVolunteerStandardLogin() {
	const { loginWithFacebook, loginWithGoogle } = useAuth();
	const [loading, setLoading] = useState(false);

	const history = useHistory();

	const { setToastErrorMessage } = useToast();

	/**
	 * When user clicks the FB Login button, trigger the login with Facebook and handle messages accordingly
	 */
	// TODO: Add translations
	const onFacebookLoginClicked = (e: any) => {
		e.preventDefault();

		if (!loginWithFacebook) return;

		try {
			setLoading(true);

			loginWithFacebook()
				.then(() => {
					history.push("/");
				})
				.catch((error: any) => {
					setToastErrorMessage("Ooops", error);
				});
		} catch (error) {
			setToastErrorMessage(
				"Errore",
				"Si è verificato un errore durante il login. Si prega di riprovare più tardi."
			);
		}

		setLoading(false);
	};

	/**
	 * When user clicks the Google Login button, trigger the login with Google and handle messages accordingly
	 */
	// TODO: Add translations
	const onGoogleLoginClicked = (e: any) => {
		e.preventDefault();

		if (!loginWithGoogle) return;

		try {
			setLoading(true);

			loginWithGoogle()
				.then(() => {
					history.push("/");
				})
				.catch((error: any) => {
					console.log(error);
					setToastErrorMessage("Ooops", error);
				});
		} catch (error) {
			console.log(error);
			setToastErrorMessage(
				"Errore",
				"Si è verificato un errore durante il login. Si prega di riprovare più tardi."
			);
		}

		setLoading(false);
	};

	/**
	 * Act upon detecting the click of the link on the "Login with email button"
	 */
	const onEmailPageButtonClicked = (e: any) => {
		e.preventDefault();

		history.push({
			pathname: "/login/volunteer/email",
		});
	};

	return {
		loading,
		onFacebookLoginClicked,
		onGoogleLoginClicked,
		onEmailPageButtonClicked,
	};
}
