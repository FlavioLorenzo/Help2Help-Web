import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions/index";

import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import VerticalScrollingCardWrapper from "../../components/UI/ScrollingWrappers/VerticalScrollingCardWrapper/VerticalScrollingCardWrapper";
import ClosedHorizontalCard from "../../components/UI/ClosedCards/ClosedHorizontalCard/ClosedHorizontalCard";

//import * as translations from "./SearchResults.translations";
//import styles from "./SearchResults.module.scss";

const SearchResults = (props) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchTarget, setSearchTarget] = useState("");

    // UseCallback is needed to wrap the dispatch method of React-Redux
    // Set the options that controls the menu when the component renders
    const dispatch = useDispatch();
    const setLayout = useCallback(() => {
        dispatch(actions.setLayoutBackRequired(true));
        dispatch(actions.setLayoutSearchBarRequired(true));
    }, [dispatch]);
    useEffect(() => {
        setLayout();
    }, [setLayout]);

    // Parse the Query parameters as soon as the component loads
    useEffect(() => {
        const query = new URLSearchParams(props.location.search);

        for (let param of query.entries()) {
            switch (param[0]) {
                case "t": // Target - All, Events, Organizations, Volunteers
                    setSearchTarget(param[1]);
                    break;
                case "q": // Query
                    setSearchQuery(param[1]);
                    break;
                default:
                    break;
            }
        }
    }, [props.location.search]);

    return (
        <Auxiliary>
            <VerticalScrollingCardWrapper>
                <ClosedHorizontalCard
                    title="Title"
                    subtitle="Lorem ipsum dolor sit"
                    imageSrc="https://images.pexels.com/photos/235615/pexels-photo-235615.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    itemSelected={() => alert("Closed card was clicked.")}
                ></ClosedHorizontalCard>
                <ClosedHorizontalCard
                    title="Title"
                    subtitle="Lorem ipsum dolor sit"
                    imageSrc="https://images.pexels.com/photos/235615/pexels-photo-235615.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    itemSelected={() => alert("Closed card was clicked.")}
                ></ClosedHorizontalCard>
            </VerticalScrollingCardWrapper>
        </Auxiliary>
    );
};

export default SearchResults;
