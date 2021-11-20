import {
    onboardingVolunteerStepAvailabilitiesTitle,
} from "../VolunteerOnboarding.translations";

import onboardingMorning from "../../../../assets/images/onboardingMorning.png";
import onboardingAfternoon from "../../../../assets/images/onboardingAfternoon.png";
import onboardingNight from "../../../../assets/images/onboardingNight.png";


const VolunteerOnboardingStep4 = () => {
    return (
        <>
            <h2>{onboardingVolunteerStepAvailabilitiesTitle}</h2>

            <div className="availability-section">
                <div className="availability-row">
                    <div className="availability-day-label">
                        Lunedì
                    </div>
                    <div className={"availability-selection-block"}>
                        <div className={"availability-selection-elem"}>
                            <img src={onboardingMorning} alt="Morning availability"/>
                        </div>
                        <div className={"availability-selection-elem"}>
                            <img src={onboardingAfternoon} alt="Afternoon availability"/>
                        </div>
                        <div className={"availability-selection-elem"}>
                            <img src={onboardingNight} alt="Evening availability"/>
                        </div>
                    </div>
                </div>

                <div className="availability-row">
                    <div className="availability-day-label">
                        Giovedì
                    </div>
                    <div className={"availability-selection-block"}>
                        <div className={"availability-selection-elem"}>
                            <img src={onboardingMorning} alt="Morning availability"/>
                        </div>
                        <div className={"availability-selection-elem"}>
                            <img src={onboardingAfternoon} alt="Afternoon availability"/>
                        </div>
                        <div className={"availability-selection-elem"}>
                            <img src={onboardingNight} alt="Evening availability"/>
                        </div>
                    </div>
                </div>

                <div className="availability-row">
                    <div className="availability-day-label">
                        Mercoledì
                    </div>
                    <div className={"availability-selection-block"}>
                        <div className={"availability-selection-elem"}>
                            <img src={onboardingMorning} alt="Morning availability"/>
                        </div>
                        <div className={"availability-selection-elem"}>
                            <img src={onboardingAfternoon} alt="Afternoon availability"/>
                        </div>
                        <div className={"availability-selection-elem"}>
                            <img src={onboardingNight} alt="Evening availability"/>
                        </div>
                    </div>
                </div>

                <div className="availability-row">
                    <div className="availability-day-label">
                        Giovedì
                    </div>
                    <div className={"availability-selection-block"}>
                        <div className={"availability-selection-elem"}>
                            <img src={onboardingMorning} alt="Morning availability"/>
                        </div>
                        <div className={"availability-selection-elem"}>
                            <img src={onboardingAfternoon} alt="Afternoon availability"/>
                        </div>
                        <div className={"availability-selection-elem"}>
                            <img src={onboardingNight} alt="Evening availability"/>
                        </div>
                    </div>
                </div>

                <div className="availability-row">
                    <div className="availability-day-label">
                        Venerdì
                    </div>
                    <div className={"availability-selection-block"}>
                        <div className={"availability-selection-elem"}>
                            <img src={onboardingMorning} alt="Morning availability"/>
                        </div>
                        <div className={"availability-selection-elem"}>
                            <img src={onboardingAfternoon} alt="Afternoon availability"/>
                        </div>
                        <div className={"availability-selection-elem"}>
                            <img src={onboardingNight} alt="Evening availability"/>
                        </div>
                    </div>
                </div>

                <div className="availability-row">
                    <div className="availability-day-label">
                        Sabato
                    </div>
                    <div className={"availability-selection-block"}>
                        <div className={"availability-selection-elem"}>
                            <img src={onboardingMorning} alt="Morning availability"/>
                        </div>
                        <div className={"availability-selection-elem"}>
                            <img src={onboardingAfternoon} alt="Afternoon availability"/>
                        </div>
                        <div className={"availability-selection-elem"}>
                            <img src={onboardingNight} alt="Evening availability"/>
                        </div>
                    </div>
                </div>

                <div className="availability-row">
                    <div className="availability-day-label">
                        Domenica
                    </div>
                    <div className={"availability-selection-block"}>
                        <div className={"availability-selection-elem"}>
                            <img src={onboardingMorning} alt="Morning availability"/>
                        </div>
                        <div className={"availability-selection-elem"}>
                            <img src={onboardingAfternoon} alt="Afternoon availability"/>
                        </div>
                        <div className={"availability-selection-elem"}>
                            <img src={onboardingNight} alt="Evening availability"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default VolunteerOnboardingStep4;
