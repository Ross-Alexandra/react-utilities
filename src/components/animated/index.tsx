import { Keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import React, { AnimationEventHandler, HTMLProps, useCallback, useEffect, useState } from 'react';

// Omit as from these props as it clashes with
// @emotion/styled's as? property.
export interface AnimatedProps 
extends Omit<React.PropsWithChildren<HTMLProps<HTMLDivElement>>, 'as'> {
    display: boolean;
    animationIn?: Keyframes;
    animationOut?: Keyframes;
    cleanUp?: () => void;
}

export const  Animated: React.FC<AnimatedProps> = (
    ({display, animationIn, animationOut, cleanUp, children, ...props}) => {
        const [visible, setVisible] = useState(false);
        
        const onAnimationEnd = useCallback(() => {
            if (!display) {
                setVisible(false);
                if (cleanUp) cleanUp();
            }
        }, [display, setVisible, cleanUp]);

        useEffect(() => {
            if (display) setVisible(true);
            if (!display && !animationOut) setVisible(false);
        }, [display, setVisible]);

        return (display || visible) ? (
            <AnimationDiv
                shouldDisplay={display}
                animationIn={animationIn}
                animationOut={animationOut}
                onAnimationEnd={onAnimationEnd}
                {...props}
            >
                {children}
            </AnimationDiv>
        ) : null;
    }
);

interface AnimationDivProps extends HTMLProps<HTMLDivElement> {
    shouldDisplay: boolean;
    animationIn?: Keyframes;
    animationOut?: Keyframes;
    onAnimationEnd: AnimationEventHandler<HTMLDivElement>;
}

const AnimationDiv = styled.div<AnimationDivProps>`
    animation-name: ${({shouldDisplay, animationIn, animationOut}) => shouldDisplay ? (animationIn ?? '') : (animationOut ?? '')};
    animation-iteration-count: 1;
    animation-duration: 250ms;
    animation-fill-mode: both;
`;
