import { useRef, useEffect, useState } from "react";

import "../../../styles/fullGradientForm.scss";
import FullGradientCard from "../FullGradientCard/FullGradientCard";
import { useHistory } from "react-router";

interface FullGradientFormContainerProps {
    /**
     * What to put inside the form
     */
    children: React.ReactNode;
}

const FullGradientFormContainer = (props: FullGradientFormContainerProps) => {
    const [classes, setClasses] = useState(["full-gradient-form-container"]);
    const formDivRef = useRef<HTMLDivElement>(null);
    const history = useHistory();

    useEffect(() => {
        const offsetHeight = formDivRef.current?.offsetHeight;
        const newClasses = ["full-gradient-form-container"];

        if (offsetHeight && window.innerHeight < offsetHeight + 50) {
            newClasses.push("full-gradient-form-long-container");
        }

        setClasses(newClasses);
    }, [history.location.pathname]);

    return (
        <>
            <FullGradientCard />
            <div className={classes.join(" ")} ref={formDivRef}>
                {props.children}
            </div>
        </>
    );
};

export default FullGradientFormContainer;
