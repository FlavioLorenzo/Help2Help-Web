import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { RootState } from "../../../store/reducers/rootReducer";
import { NavigationFilters } from "../../../store/types/navigationFilters";

/*
 * Business logic for the Header component
 */
export default function useHeader() {
    // TODO: Include indication about volunteer
    // Setting the filter based on user type (volunteer / association)
    const searchFilters = useSelector(
        (state: RootState) => state.navigation.filters
    );
    // Store the query being searched by the user
    const searchQuery = searchFilters.query;
    const searchTarget = searchFilters.target;

    const isBackRequired = useSelector(
        (state: RootState) => state.layout.isBackRequired
    );
    const backLocation = useSelector(
        (state: RootState) => state.layout.backLocation
    );
    const isSearchBarRequired = useSelector(
        (state: RootState) => state.layout.isSearchBarRequired
    );
    const history = useHistory();

    const goBack = () => {
        history.push({
            pathname: backLocation,
        });
    };

    // Act upon detecting the click of the search bar
    const setHistoryFromMenu = (filters: NavigationFilters) => {
        history.push({
            pathname: "/search",
            search: "?t=" + filters.target + "&q=" + filters.query,
        });
    };

    const setSearchQuery = (searchQuery: string) => {
        setHistoryFromMenu({
            ...searchFilters,
            query: searchQuery,
        });
    };

    const setSearchTarget = (searchTarget: any) => {
        setHistoryFromMenu({
            ...searchFilters,
            target: searchTarget.target.value,
        });
    };

    return {
        isBackRequired,
        goBack,
        searchQuery,
        searchTarget,
        isSearchBarRequired,
        setSearchQuery,
        setSearchTarget,
    };
}
