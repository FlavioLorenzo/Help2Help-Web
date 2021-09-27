import React from "react";

import Button from "../../ui/Button/Button";

import styles from "./SearchTarget.module.scss";
import * as translations from "./SearchTarget.translations";

interface SearchTargetProps {
    currentView: string;
    searchTargetButtonClicked(e: any): void;
}

const searchTarget = (props: SearchTargetProps) => {
    return (
        <>
            <div className={styles.SearchButtonsContainer}>
                <span>
                    <Button
                        value={"all"}
                        colorStyle={"LightBlue"}
                        outline
                        small
                        shadow
                        active={props.currentView === "all"}
                        clicked={props.searchTargetButtonClicked}
                    >
                        {translations.allDenomination}
                    </Button>
                </span>
                <span>
                    <Button
                        value={"org"}
                        colorStyle={"Orange"}
                        outline
                        small
                        shadow
                        active={props.currentView === "org"}
                        clicked={props.searchTargetButtonClicked}
                    >
                        {translations.organizationDenomination}
                    </Button>
                </span>
                <span>
                    <Button
                        value={"evt"}
                        colorStyle={"Pink"}
                        outline
                        small
                        shadow
                        active={props.currentView === "evt"}
                        clicked={props.searchTargetButtonClicked}
                    >
                        {translations.eventDenomination}
                    </Button>
                </span>
            </div>
        </>
    );
};

export default searchTarget;
