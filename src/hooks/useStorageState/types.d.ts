type stringTransformer<T> = (input: T) => string;
type valueTransformer<T> = (input: string) => T;

type StorageState<T> = [T, (newValue: T) => void];
type ReadOnlyStorageState<T> = T;