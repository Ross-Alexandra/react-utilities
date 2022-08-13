import { useCallback, useEffect, useState } from "react";

export function useSmoothValue(initialValue: number, initialTarget?: number, initialChangeIncrement?: number, initialChangeDelay?: number) {
    const [currentValue, setCurrentValue] = useState(initialValue);

    const setCurrentTarget = useCallback((newTarget: number, changeIncrement=1, changeDelay=1) => {
        const _newTarget = Number(newTarget);
        const _changeIncrement = Number(changeIncrement);
        const _changeDelay = Number(changeDelay);

        setCurrentValue(previousValue => {            
            const nextValue = previousValue + _changeIncrement;
            const setToTarget = _changeIncrement > 0 ? nextValue >= _newTarget : nextValue <= _newTarget; 

            if (setToTarget) return _newTarget;
            else {
                setTimeout(() => {
                    requestAnimationFrame(() => setCurrentTarget(_newTarget, _changeIncrement, _changeDelay));
                }, _changeDelay);
                
                return previousValue + _changeIncrement;
            }
        });
    }, []);

    useEffect(() => {
        if (initialTarget) setCurrentTarget(initialTarget, initialChangeIncrement, initialChangeDelay);
    }, []);

    return [currentValue, setCurrentTarget];
}
