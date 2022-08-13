import React, { useCallback, useEffect, useLayoutEffect, useMemo, useState } from "react";
import { RollingTextContainer, NextText, DisplayedText } from "./elements";

export interface RollingTextProps extends React.HTMLProps<HTMLDivElement> {
    textDuration: number;
    initialDelay: number;
}

export function RollingText({textDuration, initialDelay, children, className, style}: RollingTextProps) {
    const [textIndex, setTextIndex] = useState(0);
    const [nextIndex, setNextIndex] = useState(1);
    const [showingNext, setShowingNext] = useState(false);
    const [resettingTransition, setResetingTransition] = useState(false);

    const totalChildren = useMemo(() => React.Children.count(children), [children]);
    const incrementIndices = useCallback(() => {
        setTextIndex(nextIndex);

        const upcomingNextIndex = nextIndex + 1;
        if (upcomingNextIndex >= totalChildren) setNextIndex(0);
        else setNextIndex(upcomingNextIndex);
    }, [totalChildren, nextIndex, setTextIndex, setNextIndex]);

    useEffect(() => {
        setTimeout(() => setShowingNext(true), textDuration + initialDelay);
    }, [textDuration, initialDelay]);

    useLayoutEffect(() => {
        if (resettingTransition) {
            setShowingNext(false);
            setResetingTransition(false);
            setTimeout(() => setShowingNext(true), textDuration);
        }
    }, [resettingTransition, textDuration]);

    if (totalChildren <= 1) {
        const onlyChild = React.Children.toArray(children)?.[0];
        return <>{onlyChild}</>;
    }

    const displayedChild = React.Children.toArray(children)?.[textIndex];
    const nextChild = React.Children.toArray(children)?.[nextIndex];
    return (
        <RollingTextContainer className={className} style={style}>
            <NextText 
                showNext={showingNext}
                resetting={!showingNext}
                onTransitionEnd={() => {
                    if (showingNext) {
                        incrementIndices();
                        setResetingTransition(true);
                    }
                }}
            >{nextChild}</NextText>
            <DisplayedText
                showNext={showingNext}
                resetting={!showingNext}
            >{displayedChild}</DisplayedText>
        </RollingTextContainer>
    );
}
