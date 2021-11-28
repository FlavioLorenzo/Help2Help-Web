import FullGradientFormMultiStepMenu
    from "../../../components/ui/FullGradientFormMultiStepMenu/FullGradientFormMultiStepMenu";
import useOrganizationOnboarding from "./useOrganizationOnboarding";

const OrganizationOnboarding = () => {
    const {state, previousClicked, nextClicked, displayStep, handleSubmit} =
        useOrganizationOnboarding();

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

export default OrganizationOnboarding;
