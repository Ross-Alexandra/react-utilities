// Some default transformers
export const objectToStringTransformer= <T,>(value: T) => JSON.stringify(value);
export const stringToObjectTransformer = (value: string) => JSON.parse(value);

export const numberToStringTransformer = (value: number) => value + '';
export const stringToIntTransformer = (value: string) => Number.parseInt(value);
export const stringToFloatTransformer = (value: string) => Number.parseFloat(value);
