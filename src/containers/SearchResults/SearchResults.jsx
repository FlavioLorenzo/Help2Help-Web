import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InstantSearch, Configure } from "react-instantsearch-dom";
import searchClient from "../../config/algoliaConfig";

import * as actions from "../../store/actions/index";

import VerticalScrollingCardWrapper from "../../components/UI/ScrollingWrappers/VerticalScrollingCardWrapper/VerticalScrollingCardWrapper";
import ClosedHorizontalCard from "../../components/UI/ClosedCards/ClosedHorizontalCard/ClosedHorizontalCard";

//import * as translations from "./SearchResults.translations";
import styles from "./SearchResults.module.scss";

const SearchResults = (props) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [, setSearchTarget] = useState("");
    const hitsPerPage = 3;

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
        <div className={styles.SearchResults}>
            <InstantSearch
                indexName="organizations"
                searchClient={searchClient}
            >
                <Configure hitsPerPage={hitsPerPage} query={searchQuery} />
                <VerticalScrollingCardWrapper minHitsPerPage={hitsPerPage} />
            </InstantSearch>
        </div>
    );
};

export default SearchResults;
