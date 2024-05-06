import React from "react";

const UseInterval = (callback: Function, delay: number) => {
    const intervalRef = React.useRef();
    const callbackRef = React.useRef(callback);

    React.useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    React.useEffect(() => {
        intervalRef.current = window.setInterval(() => callbackRef.current(), delay);
        return () => window.clearInterval(intervalRef.current);
    }, [delay]);

    return intervalRef;
}

export default UseInterval;