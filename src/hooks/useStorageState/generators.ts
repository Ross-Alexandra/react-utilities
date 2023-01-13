import {
    useStorageState,
    useReadOnlyStorageState
} from './hooks';
import {
    numberToStringTransformer,
    stringToFloatTransformer,
    stringToIntTransformer,
    objectToStringTransformer,
    stringToObjectTransformer
} from './transformers';

// Builder function to prebuild the useStorageState and
// useReadOnlyStorageState hooks. This will allow a user to
// generateStorageStateHooks(key, default, toString, toValue)
// returning them a no-argument hook for each of their state
// variables.
export function generateStorageStateHooks<T>(key: string, defaultValue: T, toString?: stringTransformer<T>, toValue?: valueTransformer<T>): [() => [T, (newValue: T) => void], () => T] {
    const readWriteHook = () => useStorageState<T>(key, defaultValue, toString, toValue);
    const readOnlyHook = () => useReadOnlyStorageState<T>(key, defaultValue, toValue);

    return [readWriteHook, readOnlyHook];
}

export function generateIntStorageStateHooks(key: string, defaultValue: number) {
    return generateStorageStateHooks<number>(key, defaultValue, numberToStringTransformer, stringToIntTransformer);
}

export function generateFloatStorageStateHooks(key: string, defaultvalue: number) {
    return generateStorageStateHooks<number>(key, defaultvalue, numberToStringTransformer, stringToFloatTransformer);
}

export function generateObjectStorageStateHooks<T>(key: string, defaultValue: T) {
    return generateStorageStateHooks<T>(key, defaultValue, objectToStringTransformer<T>, stringToObjectTransformer);
}
