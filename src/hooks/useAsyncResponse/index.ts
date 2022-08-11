import { useEffect, useState, useRef } from "react";

export type AsyncCallback<T> = () => Promise<T>;

export type AsyncState = 'loading' | 'ready' | 'error';
export type AsyncLoading = ['loading', undefined, undefined];
export type AsyncData<T> = ['ready', T, undefined]; 
export type AsyncError = ['error', undefined, Error];
export type AsyncResponse<T> = AsyncLoading | AsyncData<T> | AsyncError;

export function useAsyncResponse<T>(asyncFunction: AsyncCallback<T>): AsyncResponse<T> {
    const callback = useRef(asyncFunction);
    const [callbackStatus, setCallbackStatus] = useState<AsyncState>('loading');
    const [callbackData, setCallbackData] = useState<T | undefined>();
    const [callbackError, setCallbackError] = useState<Error | undefined>();

    useEffect(() => {
        let mounted = true;

        callback.current()
            ?.then(result => {
                if (mounted) {
                    setCallbackData(result);
                    setCallbackStatus('ready');
                }
            })
            ?.catch(err => {
                if (mounted) {
                    setCallbackError(err);
                    setCallbackStatus('error');
                }
            });
        () => {mounted = false};
    }, []);

    if (callbackStatus === 'loading') return ['loading', undefined, undefined];
    else if (callbackStatus === 'ready') return ['ready', callbackData as T, undefined];
    else return ['error', undefined, callbackError as Error];
}
