import { Link } from "react-router-dom";

import Button from "../../../../components/UI/Button/Button";

// import useLogin from "./hooks/useLogin"

import * as translations from "../../Authentication.translations";
import styles from "../../Authentication.module.scss";

interface VolunteerSignUpProps {
    onSubmit(e: any): void;
}

export const VolunteerSignUp = (props: VolunteerSignUpProps) => {
    return (
        <>
            <div className={styles.LoginSection}>
                <div className={styles.Text}>Iscrizione</div>

                <form onSubmit={props.onSubmit} className={styles.LoginForm}>
                    <label>
                        <div className={styles.LoginFormLabel}>Nome</div>
                        <div className={styles.LoginFormInput}>
                            <input type="text" autoComplete="given-name" />
                        </div>
                    </label>

                    <label>
                        <div className={styles.LoginFormLabel}>Cognome</div>
                        <div className={styles.LoginFormInput}>
                            <input type="text" autoComplete="family-name" />
                        </div>
                    </label>

                    <label>
                        <div className={styles.LoginFormLabel}>Email</div>
                        <div className={styles.LoginFormInput}>
                            <input type="text" autoComplete="email" />
                        </div>
                    </label>

                    <label>
                        <div className={styles.LoginFormLabel}>Password</div>
                        <div className={styles.LoginFormInput}>
                            <input
                                type="password"
                                autoComplete="new-password"
                            />
                        </div>
                    </label>

                    <label>
                        <div className={styles.LoginFormLabel}>
                            Conferma la tua password
                        </div>
                        <div className={styles.LoginFormInput}>
                            <input
                                type="password"
                                autoComplete="new-password"
                            />
                        </div>
                    </label>

                    <div className={styles.ButtonGroup}>
                        <Button colorStyle="White">Iscriviti</Button>
                    </div>
                </form>
            </div>

            <div className={styles.LoginSection}>
                <div className={styles.LinkText}>
                    <Link to="/login">Sei già iscritto? Accedi al portale</Link>
                </div>
            </div>
        </>
    );
};
