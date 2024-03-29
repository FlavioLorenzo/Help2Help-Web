import React, { useRef, useCallback } from "react";
import { connectInfiniteHits } from "react-instantsearch-dom";
import PropTypes from "prop-types";

import ClosedHorizontalCard from "../../ClosedCards/ClosedHorizontalCard/ClosedHorizontalCard";

import styles from "./VerticalScrollingCardWrapper.module.scss";

const VerticalScrollingCardWrapper = (props) => {
    const { hits, hasMore, refineNext } = props;

    // TODO: Callback gets triggered several times. By dealing with the dependencies the method may become faster.
    const observer = useRef();
    const onSentinelIntersection = useCallback(
        (node) => {
            if (observer.current) observer.current.disconnect();

            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && hasMore) {
                    refineNext();
                }
            });

            if (node) observer.current.observe(node);
        },
        [hasMore, refineNext]
    );

    return (
        <div className={styles.VerticalScrollingCardWrapper}>
            <div className="ais-InfiniteHits">
                <ul
                    className={[
                        "ais-InfiniteHits-list",
                        styles.InfiniteHitsList,
                    ].join(" ")}
                >
                    {hits.map((hit) => (
                        <ClosedHorizontalCard
                            key={hit.objectID}
                            title={hit.name}
                            subtitle={hit.city}
                            imageSrc={hit.imgSrc}
                            itemSelected={() =>
                                alert("Closed card was clicked.")
                            }
                        ></ClosedHorizontalCard>
                    ))}
                    <li
                        className="ais-InfiniteHits-sentinel"
                        ref={onSentinelIntersection}
                    />
                </ul>
            </div>
        </div>
    );
};

VerticalScrollingCardWrapper.propTypes = {
    /**
     * Result list returned by Algolia
     */
    hits: PropTypes.array,
    /*
     * Whether there are more results to be retrieved from the server
     */
    hasMore: PropTypes.bool,
    /*
     * Return next set of results from Algolia
     */
    refineNext: PropTypes.func,
};

export default connectInfiniteHits(VerticalScrollingCardWrapper);
