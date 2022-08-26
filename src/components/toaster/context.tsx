import React, {createContext, ReactNode, useCallback, useMemo, useReducer} from 'react';
import {
    initialValue,
    toasterReducer
} from './reducer';

const ToasterContext = createContext<ToasterState>(initialValue);

export const ToasterProvider: React.FC<React.PropsWithChildren> = ({children}) => {
    const [state, dispatch] = useReducer(toasterReducer, initialValue);

    const setToasterBody = useCallback((component: ReactNode) => dispatch({type: 'register-component', component}), [dispatch]);
    
    const value = useMemo(() => ({
        ...state,
        setToasterBody
    }), [
        state,
        setToasterBody
    ]);

    return <ToasterContext.Provider value={value}>
        {children}
    </ToasterContext.Provider>
}
