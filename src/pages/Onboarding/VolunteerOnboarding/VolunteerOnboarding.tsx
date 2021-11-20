import FullGradientFormMultiStepMenu
    from "../../../components/ui/FullGradientFormMultiStepMenu/FullGradientFormMultiStepMenu";
import useVolunteerOnboarding from "./useVolunteerOnboarding";

const VolunteerOnboarding = () => {
    const {state, previousClicked, nextClicked, displayStep, handleSubmit} =
        useVolunteerOnboarding();

    return (
        <>
            <div className="full-gradient-form-section">
                <form className="onboarding-form" onSubmit={handleSubmit}>
                    <div className="onboarding-form-step">{displayStep()}</div>

                    <FullGradientFormMultiStepMenu
                        totalSteps={5}
                        currentStep={state.currentStep}
                        leftClicked={previousClicked}
                        rightClicked={nextClicked}
                        rightDisabled={state.currentStep > state.lastValidStep}
                    />
                </form>
            </div>
        </>
    );
};

export default VolunteerOnboarding;
