import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions/index";

import SplitGradientCard from "../../components/UI/SplitGradientCard/SplitGradientCard";
import Button from "../../components/UI/Button/Button";
import SearchBar from "../../components/UI/SearchBar/SearchBar";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import ClosedVerticalCard from "../../components/UI/ClosedCards/ClosedVerticalCard/ClosedVerticalCard";
import HorizontalScrollingCardWrapper from "../../components/UI/ScrollingWrappers/HorizontalScrollingCardWrapper/HorizontalScrollingCardWrapper";

import styles from "./Homepage.module.scss";

const Homepage = () => {
    const [searchInput, setSearchInput] = useState("");
    const [currentView, setCurrentView] = useState("all");
    const [listOrganizationCards, setListOrganizationCards] = useState([]);
    const [listEventCards, setListEventCards] = useState([]);

    const organizationList = useSelector(
        (state) => state.organization.organizationList
    );
    const eventList = useSelector((state) => state.event.eventList);

    const dispatch = useDispatch();
    const getOrganizationList = useCallback(
        () => dispatch(actions.fetchOrganizationList()),
        [dispatch]
    );
    const getEventList = useCallback(() => dispatch(actions.fetchEventList()), [
        dispatch,
    ]);

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

    useEffect(() => {
        getEventList();
    }, [getEventList]);
    useEffect(() => {
        setListEventCards(
            eventList.map((event) => (
                <ClosedVerticalCard
                    key={event.id}
                    title={event.title}
                    subtitle=""
                    imageSrc={event.imgSrc}
                    itemSelected={itemSelectedHandler}
                ></ClosedVerticalCard>
            ))
        );
    }, [eventList]);

    const itemSelectedHandler = (title) =>
        console.log("Clicked " + title + "!");

    const onSearchBarChanged = (event) => {
        setSearchInput(event.target.value);
    };

    const onSearchBarClicked = () => {};

    const viewButtonClicked = (buttonValue) => {
        setCurrentView(buttonValue);
    };

    return (
        <Auxiliary>
            <SplitGradientCard cardBorder="BorderBottomRight" hasPadding>
                <div className={styles.CardTitle}>
                    <h2>Scopri le offerte di volontariato!</h2>
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
                            btnStyle={
                                currentView === "all" ? "White" : "LightBlue"
                            }
                            clicked={() => viewButtonClicked("all")}
                        >
                            Tutto
                        </Button>
                    </span>
                    <span>
                        <Button
                            btnStyle={
                                currentView === "org" ? "White" : "Orange"
                            }
                            clicked={() => viewButtonClicked("org")}
                        >
                            Enti
                        </Button>
                    </span>
                    <span>
                        <Button
                            btnStyle={currentView === "evt" ? "White" : "Pink"}
                            clicked={() => viewButtonClicked("evt")}
                        >
                            Eventi
                        </Button>
                    </span>
                </div>
            </SplitGradientCard>

            <div
                className={[
                    styles.ScrollbarTitle,
                    styles.ScrollbarTitleOrg,
                ].join(" ")}
            >
                <h2>Enti</h2>
                <span>scopri di più</span>
            </div>
            <HorizontalScrollingCardWrapper>
                {listOrganizationCards}
            </HorizontalScrollingCardWrapper>

            <div
                className={[
                    styles.ScrollbarTitle,
                    styles.ScrollbarTitleEvent,
                ].join(" ")}
            >
                <h2>Eventi</h2>
                <span>scopri di più</span>
            </div>
            <HorizontalScrollingCardWrapper>
                {listEventCards}
            </HorizontalScrollingCardWrapper>

            <div className={styles.BottomPadding}></div>
        </Auxiliary>
    );
};

export default Homepage;
