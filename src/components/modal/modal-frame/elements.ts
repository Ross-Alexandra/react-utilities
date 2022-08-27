import styled from "@emotion/styled";
import { CloseButton } from "./close-button";

export const Frame = styled.div`
    position: relative;
    padding: 10px 20px;
`;

export const FrameCloseButton = styled(CloseButton)`
    position: absolute;
    top: 10px;
    right: 10px;

    cursor: pointer;
`;
