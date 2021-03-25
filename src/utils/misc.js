/*
 * Extract the query to search and the target of the search from the URL provided
 */
const extractQueryAndTarget = (url) => {
    const query = new URLSearchParams(url);
    let searchTarget, searchQuery;

    for (let param of query.entries()) {
        switch (param[0]) {
            case "t": // Target - All, Events, Organizations, Volunteers
                searchTarget = param[1];
                break;
            case "q": // Query
                searchQuery = param[1];
                break;
            default:
                break;
        }
    }

    return searchTarget, searchQuery;
};

export { extractQueryAndTarget };
