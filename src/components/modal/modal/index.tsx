import { Keyframes } from "@emotion/react";
import React from "react";
import { createPortal } from "react-dom";
import { Animate } from "../../animate";
import { DEFAULT_PORTAL_ID } from "../constants";

import {
    ContentObscurer,
    fadein,
    fadeout,
    ModalWrapper
} from './elements';

export interface ModalProps extends React.PropsWithChildren<React.HTMLProps<HTMLDivElement>> {
    isOpen: boolean;
    onOpen?: () => void;
    onClose?: () => void;
    animationIn?: Keyframes | string;
    animationOut?: Keyframes | string;
    portalId?: string;
}

export const Modal: React.FC<ModalProps> = ({
    isOpen,
    onOpen,
    onClose,
    animationIn=fadein,
    animationOut=fadeout,
    children,
    className,
    style,
    portalId=DEFAULT_PORTAL_ID
}) => {
    const modalWrapper = document.getElementById(portalId);
    if (!modalWrapper) return null;

    return createPortal(
        <ModalComponent
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
            animationIn={animationIn}
            animationOut={animationOut}
            className={className}
            style={style}
        >{children}</ModalComponent>,
        modalWrapper
    );
}

const ModalComponent: React.FC<ModalProps> = ({
    isOpen,
    onOpen,
    onClose,
    animationIn=fadein,
    animationOut=fadeout,
    children,
    className,
    style
}) => {
    return (
        <>
            <Animate
                display={isOpen}
                animationIn={fadein}
                animationOut={fadeout}
            >
                <ContentObscurer />
            </Animate>
            <ModalWrapper 
                display={isOpen}
                animationIn={animationIn}
                animationOut={animationOut}
                afterAnimateIn={onOpen}
                afterAnimateOut={onClose}
                className={className}
                style={style}
            >
                {children}
            </ModalWrapper>
        </>
    );
};
