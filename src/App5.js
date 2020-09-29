import React, { useEffect, useState } from "react";

const useCurrentTime = () => {
    const [currentTime, setCurrentTime] = useState();

    useEffect(() => {
        const currentTime = (new Date()).toISOString().slice(11, 19);
        const handler = setInterval(() => {
            setCurrentTime(currentTime);
        }, 1000);
        return () => clearInterval(handler);
    }, []);

    return currentTime;
}

const useWindowWidth = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const onResize = () => {
            setWidth(window.innerWidth);
        }
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    return width;
}

const App = () => {
    const currentTime = useCurrentTime();
    const windowWidth = useWindowWidth();

    return (
        <div>
            <h1>현재 시각</h1>
            {currentTime}
            <h1>current window width</h1>
            {windowWidth}px
        </div>
    );
}

export default App;