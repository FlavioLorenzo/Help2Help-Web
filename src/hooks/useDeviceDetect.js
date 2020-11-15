import React from "react";

/* 
 * Detect user's device based on touch screen presence. 
 * If the property is not available, fall back to user agent sniffing to detect mobile device used.
 * 
 * Reference for detect function:
 * https://reedbarger.com/how-to-create-a-custom-usedevicedetect-react-hook/ - Original article
 * https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent - Some more thoughts on using the userAgent property
 */
export default function useDeviceDetect() {
    const [isMobile, setMobile] = React.useState(false);

    React.useEffect(() => {
        // First, let's try to see if the device has a touch screen
        var hasTouchScreen = false;
        if ("maxTouchPoints" in navigator) { 
            hasTouchScreen = navigator.maxTouchPoints > 0;
        } else if ("msMaxTouchPoints" in navigator) {
            hasTouchScreen = navigator.msMaxTouchPoints > 0; 
        } else {
            var mQ = window.matchMedia && matchMedia("(pointer:coarse)");
            if (mQ && mQ.media === "(pointer:coarse)") {
                hasTouchScreen = !!mQ.matches;
            } else if ('orientation' in window) {
                hasTouchScreen = true; // deprecated, but good fallback
            } else {
                // Only as a last resort, fall back to user agent sniffing
                const userAgent = navigator.userAgent;
                // Check with a Regex if user's device matches one of the following mobile devices. If yes, we're on mobile.
                hasTouchScreen = Boolean(
                    userAgent.match(
                        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|webOS|Windows Phone|WPDesktop/i
                    )
                );
            }
        }
        setMobile(hasTouchScreen)
    }, []);

    return {isMobile}
}

