import styled from "@emotion/styled";

export const RollingTextContainer = styled.div`
    position: relative;
    overflow: hidden;
`;

interface ShowingAwareProps extends React.HTMLProps<HTMLElement> {
    showNext: boolean;
    resetting: boolean;
}

export const NextText = styled.div<ShowingAwareProps>`
    width: 100%;

    position: absolute;
    top: 0px;
    bottom: 0px;
    left: ${({showNext}: ShowingAwareProps) => showNext ? '0%' : '-100%'};

    ${({resetting}: ShowingAwareProps) => !resetting ? `
        transition: left 500ms;
    ` : ``}
`;

export const DisplayedText = styled.div<ShowingAwareProps>`
    width: 100%;

    position: absolute;
    top: 0px;
    bottom: 0px;
    left: ${({showNext}: ShowingAwareProps) => showNext ? '100%' : '0%'};

    ${({resetting}: ShowingAwareProps) => !resetting ? `
        transition: left 500ms;
    ` : ``}
`;
