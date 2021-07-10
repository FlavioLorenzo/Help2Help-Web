export const updateObject = (oldObject: any, updatedProperties: any) => {
    return {
        ...oldObject,
        ...updatedProperties,
    };
};

/**
 * Given a url string it returns a dictionary in which each key-value pair equates to a search query
 * @param {*} url The original url from which we want to retrieve the search params
 * @returns A dictionary with all the key-value pairs for each search parameter
 */
export const getURLSearchParamsFromURL = (url: string) => {
    console.log(url);

    const actualUrl = new URL(url);
    var query = new URLSearchParams(actualUrl.search);

    console.log(query);

    const result: any = {};
    for (const [key, value] of query.entries()) {
        // each 'entry' is a [key, value] tuple
        result[key] = value;
    }

    console.log(result);

    return result;
};
