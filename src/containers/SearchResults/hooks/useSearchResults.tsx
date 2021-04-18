import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import * as actions from "../../../store/actions/index";
import { RootState } from "../../../store/reducers/rootReducer";

/*
 * Business logic for the SearchResults component
 */
export default function useSearchResults() {
    // Store the query being searched by the user
    const searchQuery = useSelector(
        (state: RootState) => state.navigation.filters.query
    );
    // Store the search target - All, events, organization, volunteers
    /*const searchTarget = useSelector(
        (state: RootState) => state.navigation.filters.target
    );*/
    // Used to refresh the Algolia result list
    const [searchState, setSearchState] = useState({});
    // Number of elements downloaded from Algolia at once
    const hitsPerPage = 3;

    // The object containing the navigation history and the query parameters
    const history = useHistory();

    // UseCallback is needed to wrap the dispatch method of React-Redux
    // Set the options that controls the menu when the component renders
    const dispatch = useDispatch();

    // Sync the search state
    const onSearchStateChange = (searchState: any) =>
        setSearchState(searchState);

    // Update the query being sent to Algolia
    const updateQueryAndTarget = useCallback(
        (search) => {
            // Retrieve the query parameters
            const query = new URLSearchParams(search);
            let searchTarget, searchQuery;

            // Extract from the query parameters the words being searched and the target of the search
            for (let [key, value] of query.entries()) {
                switch (key) {
                    case "t": // Target - All, Events, Organizations, Volunteers
                        searchTarget = value;
                        break;
                    case "q": // Query
                        searchQuery = value;
                        break;
                    default:
                        break;
                }
            }

            dispatch(
                actions.setSearchParams({
                    target: searchTarget,
                    query: searchQuery,
                })
            );

            // Reset the page of Algolia result list
            setSearchState({ page: 1 });
        },
        [dispatch]
    );

    // Parse the Query parameters as soon as the component loads and whenever the query params gets updated
    useEffect(() => {
        // Run at component loading time
        updateQueryAndTarget(history.location.search);

        // Set a trigger for whenever location (i.e. query parameters) changes
        return history.listen((location) => {
            updateQueryAndTarget(location.search);
        });
    }, [history, updateQueryAndTarget]);

    return { searchState, onSearchStateChange, searchQuery, hitsPerPage };
}
