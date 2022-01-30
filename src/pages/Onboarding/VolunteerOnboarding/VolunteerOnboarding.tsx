import FullGradientFormMultiStepMenu
    from "../../../components/ui/FullGradientFormMultiStepMenu/FullGradientFormMultiStepMenu";
import useVolunteerOnboarding from "./useVolunteerOnboarding";
import FullGradientFormContainer from "../../../components/ui/FullGradientFormContainer/FullGradientFormContainer";

const VolunteerOnboarding = () => {
    const {state, previousClicked, nextClicked, displayTitle, displayStep, handleSubmit} = useVolunteerOnboarding();

    return (
        <FullGradientFormContainer>
            <form onSubmit={handleSubmit}>
                <div className="full-gradient-header"></div>

                <div className="full-gradient-title-group">
                    {displayTitle()}
                </div>

                <div className="full-gradient-form-main-content">
                    {displayStep()}
                </div>

                <FullGradientFormMultiStepMenu
                    totalSteps={5}
                    currentStep={state.currentStep}
                    leftClicked={previousClicked}
                    rightClicked={nextClicked}
                    rightDisabled={state.currentStep > state.lastValidStep}
                />
            </form>
        </FullGradientFormContainer>
    );
};

export default VolunteerOnboarding;
