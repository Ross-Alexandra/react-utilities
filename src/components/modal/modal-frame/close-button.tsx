import React, { SVGProps } from "react";

export interface CloseButtonProps extends SVGProps<SVGSVGElement> {
    handleClose: () => void;
    width?: number;
    height?: number;
    stroke?: string;
}

export const CloseButton: React.FC<CloseButtonProps> = ({
    handleClose,
    width=15,
    height=15,
    stroke='#000000',
    ...props
}) => {
    return (
        <svg height={height} width={width} {...props} viewBox="0 0 10 10" onClick={handleClose}>
            <line 
                x1={0}
                x2={10}
                y1={0}
                y2={10}
                strokeWidth={1} 
                stroke={stroke}
            />
            <line
                x1={10}
                x2={0}
                y1={0}
                y2={10}
                strokeWidth={1}
                stroke={stroke}
            />
        </svg>
    );
}
