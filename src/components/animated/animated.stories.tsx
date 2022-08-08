import { keyframes } from "@emotion/react";
import React from "react";
import { combineRules, controlType, defaultValue, DISABLED } from '../../storybook-constants';
import {Animated} from '.';

export default {
    title: 'Animated',
    component: Animated,
    argTypes: {
        cleanUp: DISABLED,
        display: combineRules(
            defaultValue(true),
            controlType('boolean')
        ),
        animationIn: combineRules(
            defaultValue('from {opacity: 0;}\nto {opacity: 1;}'),
            controlType('text')
        ),
        animationOut: combineRules(
            defaultValue('from {transform: scaleY(1);}\nto {transform: scaleY(0);}'),
            controlType('text')
        )
    }
};

interface AnimatedDivProps {
    display: boolean;
    animationIn: string;
    animationOut: string;
}
export const AnimatedDiv: React.FC<AnimatedDivProps> = ({display, animationIn, animationOut}) => {
    return (
        <Animated
            display={display}
            animationIn={animationIn ? keyframes`${animationIn}` : undefined}
            animationOut={animationOut ? keyframes`${animationOut}` : undefined}
        >
            <div style={{border: '1px solid black', padding: 15}}>
                <p>Some Arbitrary Content</p>
            </div>
        </Animated>
    );
};
