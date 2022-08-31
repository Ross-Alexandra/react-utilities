import React, { HTMLProps } from 'react';
import { Frame, FrameCloseButton } from './elements';

export interface ModalFrameProps extends Omit<React.PropsWithChildren<HTMLProps<HTMLDivElement>>, 'as'> {
    handleClose: () => void;
    closeButtonSize?: number;
    closeButtonColor?: string;
}

export const ModalFrame: React.FC<ModalFrameProps> = ({
    handleClose,
    closeButtonSize=15,
    closeButtonColor='#000',
    children,
    ...props
}) => {
    return (
        <Frame {...props}>
            {children}
            <FrameCloseButton
                handleClose={handleClose}
                width={closeButtonSize}
                height={closeButtonSize}
                stroke={closeButtonColor}
            />
        </Frame>
    );
};
