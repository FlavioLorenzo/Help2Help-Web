import { useEffect } from "react";

/**
 * Adds a script tag to the application
 * @param id Id of the script tag to be created (to avoid multiple calls of the method)
 * @param url The url of the script to be embedded
 */
const useScript = (id: string, url: string) => {
    useEffect(() => {
        if (document.getElementById(id)) return;

        const script = document.createElement("script");

        script.id = id;
        script.src = url;
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, [id, url]);
};

export default useScript;
