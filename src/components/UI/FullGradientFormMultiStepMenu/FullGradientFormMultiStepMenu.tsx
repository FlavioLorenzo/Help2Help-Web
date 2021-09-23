import { useEffect, useState } from "react";

import Button from "../../../components/UI/Button/Button";

import styles from "./FullGradientFormMultiStepMenu.module.scss";

interface FullGradientFormMultiStepMenuProps {
    /**
     * Current step in the process
     */
    currentStep: number;
    /**
     * Total number of steps in the process
     */
    totalSteps: number;
    /**
     * Whether left button is disabled
     */
    leftDisabled?: boolean;
    /**
     * Whether right button is disabled
     */
    rightDisabled?: boolean;
    /**
     * Function triggered upon clicking the left button
     */
    leftClicked?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    /**
     * Function triggered upon clicking the right button
     */
    rightClicked?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const FullGradientFormMultiStepMenu = (
    props: FullGradientFormMultiStepMenuProps
) => {
    const [stepList, setStepList] = useState<any>([]);
    const [leftButton, setLeftButton] = useState<any>();
    const [rightButton, setRightButton] = useState<any>();

    // Create the list of spans used to signal the position within the onboarding process
    useEffect(() => {
        const tempStepList = [];
        for (let i = 0; i < props.totalSteps; i++) {
            const classes = [styles.MultiStepProgressStep];

            // If step has been completed or is current one set as active
            if (i < props.currentStep) classes.push(styles.Active);

            tempStepList.push(
                <span className={classes.join(" ")} key={i}></span>
            );
        }

        setStepList(tempStepList);

        if (props.currentStep === 1) setLeftButton(null);
        else
            setLeftButton(
                <Button
                    colorStyle={"White"}
                    disabled={props.leftDisabled}
                    clicked={props.leftClicked}
                >
                    Indietro
                </Button>
            );

        if (props.currentStep === props.totalSteps)
            setRightButton(
                <Button
                    colorStyle={"Pink"}
                    disabled={props.rightDisabled}
                    submit
                >
                    Fine
                </Button>
            );
        else
            setRightButton(
                <Button
                    colorStyle={"White"}
                    disabled={props.rightDisabled}
                    clicked={props.rightClicked}
                >
                    Avanti
                </Button>
            );
    }, [props]);

    return (
        <div className={styles.MultiStepMenu}>
            <div className={styles.MultiStepProgressButtons}>
                <div className={styles.MultiStepButton}>{leftButton}</div>
                <div className={styles.MultiStepButton}>{rightButton}</div>
            </div>
            <div className={styles.MultiStepProgressBar}>{stepList}</div>
        </div>
    );
};

export default FullGradientFormMultiStepMenu;
