import React from "react";

import Button from "../../UI/Button/Button";

import styles from "./SearchTarget.module.scss";
import * as translations from "./SearchTarget.translations";

interface SearchTargetProps {}

const searchTarget = (props: SearchTargetProps) => {
    const currentView = "all";

    const viewButtonClicked = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(e);
    };

    return (
        <>
            <div className={styles.SearchButtonsContainer}>
                <span>
                    <Button
                        value={"all"}
                        btnStyle={currentView === "all" ? "White" : "LightBlue"}
                        clicked={viewButtonClicked}
                    >
                        {translations.allDenomination}
                    </Button>
                </span>
                <span>
                    <Button
                        value={"all"}
                        btnStyle={
                            "Orange" /*currentView === "org" ? "White" : "Orange"*/
                        }
                        clicked={viewButtonClicked}
                    >
                        {translations.organizationDenomination}
                    </Button>
                </span>
                <span>
                    <Button
                        value={"evt"}
                        btnStyle={
                            "White" /*currentView === "evt" ? "White" : "Pink"*/
                        }
                        clicked={viewButtonClicked}
                    >
                        {translations.eventDenomination}
                    </Button>
                </span>
            </div>
        </>
    );
};

export default searchTarget;
