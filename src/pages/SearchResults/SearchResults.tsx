import React from "react";
import useSearchResults from "./hooks/useSearchResults";

import { InstantSearch, Configure } from "react-instantsearch-dom";
import searchClient from "../../config/algoliaConfig";

import VerticalScrollingCardWrapper from "../../components/ui/ScrollingWrappers/VerticalScrollingCardWrapper/VerticalScrollingCardWrapper";

//import * as translations from "./SearchResults.translations";
import styles from "./SearchResults.module.scss";

const SearchResults = (props: any) => {
    const { searchState, onSearchStateChange, searchQuery, hitsPerPage } =
        useSearchResults();

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
