import React, { HTMLProps } from 'react';
import { Frame, FrameCloseButton } from './elements';

export interface ModalFrameProps extends Omit<React.PropsWithChildren<HTMLProps<HTMLDivElement>>, 'as'> {
    handleClose: () => void;
}

export const ModalFrame: React.FC<ModalFrameProps> = ({
    handleClose,
    children,
    ...props
}) => {
    return (
        <Frame {...props}>
            {children}
            <FrameCloseButton handleClose={handleClose} />
        </Frame>
    );
};
