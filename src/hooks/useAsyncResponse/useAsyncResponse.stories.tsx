import React from "react";
import { useAsyncResponse } from "./index";

export default {title: 'useAsyncResponse'};

export const LoadData: React.FC = () => {
    const [state, data] = useAsyncResponse(() => {
        return new Promise(resolve => setTimeout(() => resolve({some: 'data'}), 2500));
    });
    
    return (
        <>
            <p>State: {state}</p>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
    );
};

export const LoadError: React.FC = () => {
    const [state,, error] = useAsyncResponse(() => {
        return new Promise((resolve, reject) => setTimeout(() => reject({some: 'error'}), 2500));
    });
    
    return (
        <>
            <p>State: {state}</p>
            <pre>{JSON.stringify(error, null, 2)}</pre>
        </>
    );
};
