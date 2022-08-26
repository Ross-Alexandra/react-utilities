import React, { ReactNode, useEffect, useState } from 'react';

export interface ToasterProps {
    Toast?: (title: string, message: string, level: ToastLevel) => ReactNode;
    messageDuration?: number;
    simultaniousMessages?: number;
}

export const Toaster: React.FC<ToasterProps> = ({Toast}) => {
    const [toast, setToast] = useState<Toast[]>([]);
    
    useEffect(() => {
        function onToast(e: CustomEvent<Toast>) {
            const title = e.detail.title;
            const message = e.detail.message;
            const level = e.detail.level;

            setToast(currentToast => [...currentToast, {title, message, level}]);
        }

        window.addEventListener('toast', onToast as EventListener);

        () => window.removeEventListener('toast', onToast as EventListener);
    });

    return (
        <div />
    )
} 
