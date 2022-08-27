import styled from "@emotion/styled";

import { keyframes } from "@emotion/react";
import { Animate } from "../../animate";

export const fadein = keyframes`
    from {opacity: 0;}
    to {opacity: 1;}
`;

export const fadeout = keyframes`
    from {opacity: 1;}
    to {opacity: 0;}
`;

export const ContentObscurer = styled.div`
    position: fixed;
    inset: 0px;

    background-color: rgba(0, 0, 0, 0.25);
`;

export const ModalWrapper = styled(Animate)`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background-color: white;
`;
