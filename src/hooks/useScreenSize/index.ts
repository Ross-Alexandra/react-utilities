import { useCallback, useEffect, useRef, useState } from "react";

export type OnSizeChange = (prevSize: number, nextSize: number) => void; 

export function useScreenSize(onWidthChange?: OnSizeChange, onHeightChange?: OnSizeChange) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);

    const onWidthChangeRef = useRef(onWidthChange);
    const onHeightChangeRef = useRef(onHeightChange);

    const onResizeCallback = useCallback(() => {
        setWindowWidth(prevWidth => {
            onWidthChangeRef.current?.(prevWidth, window.innerWidth);

            return window.innerWidth;
        });

        setWindowHeight(prevHeight => {
            onHeightChangeRef.current?.(prevHeight, window.innerHeight);

            return window.innerHeight;
        });
    }, [setWindowWidth, setWindowHeight]);
    
    useEffect(() => {
        window.addEventListener('resize', onResizeCallback);

        return () => window.removeEventListener('resize', onResizeCallback);
    }, [onResizeCallback])

    return [windowWidth, windowHeight];
}
