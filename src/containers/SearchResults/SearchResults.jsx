import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { InstantSearch, Configure } from "react-instantsearch-dom";
import searchClient from "../../config/algoliaConfig";

import * as actions from "../../store/actions/index";

import VerticalScrollingCardWrapper from "../../components/UI/ScrollingWrappers/VerticalScrollingCardWrapper/VerticalScrollingCardWrapper";
import ClosedHorizontalCard from "../../components/UI/ClosedCards/ClosedHorizontalCard/ClosedHorizontalCard";

//import * as translations from "./SearchResults.translations";
import styles from "./SearchResults.module.scss";

const SearchResults = (props) => {
    // Store the query being searched by the user
    const [searchQuery, setSearchQuery] = useState("");
    // Store the search target - All, events, organization, volunteers
    const [, setSearchTarget] = useState("");
    // Used to refresh the Algolia result list
    const [searchState, setSearchState] = useState({});
    // Number of elements downloaded from Algolia at once
    const hitsPerPage = 3;

    // The object containing the navigation history and the query parameters
    const history = useHistory();

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

    // Sync the search state
    const onSearchStateChange = (searchState) => setSearchState(searchState);

    // Update the query being sent to Algolia
    const updateQueryAndTarget = useCallback((search) => {
        // Retrieve the query parameters
        const query = new URLSearchParams(search);

        // Extract from the query parameters the words being searched and the target of the search
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

        // Reset the page of Algolia result list
        setSearchState({ page: 1 });
    }, []);

    // Parse the Query parameters as soon as the component loads and whenever the query params gets updated
    useEffect(() => {
        // Run at component loading time
        updateQueryAndTarget(history.location.search);

        // Set a trigger for whenever location (i.e. query parameters) changes
        return history.listen((location) => {
            updateQueryAndTarget(location.search);
        });
    }, [history, updateQueryAndTarget]);

    return (
        <div className={styles.SearchResults}>
            <InstantSearch
                indexName="organizations"
                searchClient={searchClient}
                searchState={searchState}
                onSearchStateChange={onSearchStateChange}
            >
                <Configure hitsPerPage={hitsPerPage} query={searchQuery} />
                <VerticalScrollingCardWrapper minHitsPerPage={hitsPerPage} />
            </InstantSearch>
        </div>
    );
};

export default SearchResults;
