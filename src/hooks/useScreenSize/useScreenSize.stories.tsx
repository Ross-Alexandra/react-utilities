import React, { useState } from "react";
import { useScreenSize } from ".";

export default {title: 'useScreenSize'};

export const UseScreenSize: React.FC = () => {
    const [widthChange, setWidthChange] = useState(0);
    const [heightChange, setHeightChange] = useState(0);
    const [screenWidth, screenHeight] = useScreenSize(
        (prevWidth, nextWidth) => setWidthChange(nextWidth - prevWidth),
        (prevHeight, nextHeight) => setHeightChange(nextHeight - prevHeight)
    );

    return (
        <>
            <p>Screen width = {screenWidth}</p>
            <p>Screen height = {screenHeight}</p>
            <p>Most recent width change = {widthChange}</p>
            <p>Most recent height change = {heightChange}</p>
        </>
    );
};
