import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions/index";

import SplitGradientCard from "../../components/ui/SplitGradientCard/SplitGradientCard";
import Button from "../../components/ui/Button/Button";
import SearchBar from "../../components/ui/SearchBar/SearchBar";
import Auxiliary from "../../components/hoc/Auxiliary/Auxiliary";
import ClosedVerticalCard from "../../components/ui/ClosedCards/ClosedVerticalCard/ClosedVerticalCard";
import HorizontalScrollingCardWrapper from "../../components/ui/ScrollingWrappers/HorizontalScrollingCardWrapper/HorizontalScrollingCardWrapper";

import * as translations from "./Homepage.translations";
import styles from "./Homepage.module.scss";

const Homepage = (props) => {
    const [searchInput, setSearchInput] = useState("");
    const [currentView, setCurrentView] = useState("all");
    const [listOrganizationCards, setListOrganizationCards] = useState([]);
    const [listEventCards, setListEventCards] = useState([]);

    const organizationList = useSelector(
        (state) => state.organization.organizationList
    );
    const eventList = useSelector((state) => state.event.eventList);

    // UseCallback is needed to wrap the dispatch method of React-Redux
    const dispatch = useDispatch();
    const getOrganizationList = useCallback(
        () => dispatch(actions.fetchOrganizationList()),
        [dispatch]
    );
    const getEventList = useCallback(
        () => dispatch(actions.fetchEventList()),
        [dispatch]
    );

    // Load Organization information and display results
    useEffect(() => {
        getOrganizationList();
    }, [getOrganizationList]);
    useEffect(() => {
        setListOrganizationCards(
            organizationList.map((org) => (
                <ClosedVerticalCard
                    key={org.id}
                    title={org.name}
                    subtitle=""
                    imageSrc={org.imgSrc}
                    itemSelected={itemSelectedHandler}
                ></ClosedVerticalCard>
            ))
        );
    }, [organizationList]);

    // Load events information and display results
    useEffect(() => {
        getEventList();
    }, [getEventList]);
    useEffect(() => {
        setListEventCards(
            eventList.map((event) => (
                <ClosedVerticalCard
                    key={event.id}
                    title={event.title}
                    subtitle={event.date}
                    imageSrc={event.imgSrc}
                    itemSelected={itemSelectedHandler}
                ></ClosedVerticalCard>
            ))
        );
    }, [eventList]);

    // Placeholder, will be removed
    const itemSelectedHandler = (title) =>
        console.log("Clicked " + title + "!");

    // Detect that the value inside the search bar has changed
    const onSearchBarChanged = (event) => {
        setSearchInput(event.target.value);
    };

    // Act upon detecting the click of the search bar
    const onSearchBarClicked = () => {
        props.history.push({
            pathname: "/search",
            search: "?t=all&q=" + searchInput,
        });
    };

    const viewButtonClicked = (buttonValue) => {
        setCurrentView(buttonValue.target.value);
    };

    return (
        <Auxiliary>
            {
                // Filter's card
            }
            <SplitGradientCard cardBorder="BorderBottomRight" hasPadding>
                <div className={styles.CardTitle}>
                    <h2>{translations.homepageIntro}</h2>
                </div>
                <div className={styles.SearchBarContainer}>
                    <SearchBar
                        placeholder="test"
                        value={searchInput}
                        clicked={onSearchBarClicked}
                        changed={(event) => {
                            onSearchBarChanged(event);
                        }}
                    />
                </div>
                <div className={styles.SearchButtonsContainer}>
                    <span>
                        <Button
                            value={"all"}
                            colorStyle={
                                currentView === "all" ? "White" : "LightBlue"
                            }
                            clicked={viewButtonClicked}
                        >
                            {translations.allDenomination}
                        </Button>
                    </span>
                    <span>
                        <Button
                            value={"org"}
                            colorStyle={
                                currentView === "org" ? "White" : "Orange"
                            }
                            clicked={viewButtonClicked}
                        >
                            {translations.organizationDenomination}
                        </Button>
                    </span>
                    <span>
                        <Button
                            value={"evt"}
                            colorStyle={
                                currentView === "evt" ? "White" : "Pink"
                            }
                            clicked={viewButtonClicked}
                        >
                            {translations.eventDenomination}
                        </Button>
                    </span>
                </div>
            </SplitGradientCard>

            {
                // Organization section
            }
            <div
                className={[
                    styles.ScrollbarTitle,
                    styles.ScrollbarTitleOrg,
                ].join(" ")}
            >
                <h2>{translations.organizationDenomination}</h2>
                <span>{translations.knowMore}</span>
            </div>
            <HorizontalScrollingCardWrapper>
                {listOrganizationCards}
            </HorizontalScrollingCardWrapper>

            {
                // Events section
            }
            <div
                className={[
                    styles.ScrollbarTitle,
                    styles.ScrollbarTitleEvent,
                ].join(" ")}
            >
                <h2>{translations.eventDenomination}</h2>
                <span>{translations.knowMore}</span>
            </div>
            <HorizontalScrollingCardWrapper>
                {listEventCards}
            </HorizontalScrollingCardWrapper>

            <div className={styles.BottomPadding}></div>
        </Auxiliary>
    );
};

export default Homepage;
