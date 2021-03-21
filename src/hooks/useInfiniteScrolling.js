import { useEffect, useState } from "react";
import { firestoreDB } from "../config/fbConfig";

export default function useInfiniteScrolling(query, pageNumber) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [items, setItems] = useState([]);
    const [hasMore, setHasMore] = useState(false);

    const pageSize = 5;

    // Clean if query changes
    useEffect(() => {
        setItems([]);
    }, [query]);

    // Apply query upon change in page number or query
    useEffect(() => {
        setLoading(true);
        setError(false);

        let cancel;

        return () => cancel();
    }, [query]);

    return { loading, error, items, hasMore };
}
