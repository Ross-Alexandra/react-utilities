/* eslint @typescript-eslint/no-explicit-any: 0 */
export const DISABLED = {table: {disable: true}};
export const defaultValue = <T>(value: T) => ({defaultValue: value});

// Updated as more are used for simplicity.
// https://storybook.js.org/docs/react/essentials/controls
type sbControlTypes = "boolean" | "text"
export const controlType = (controlType: sbControlTypes, ...args: Record<string, any>[]) => Object.assign({control: {type: controlType}}, ...args); 

export const combineRules = (...args: Record<string, any>[]) => Object.assign({}, ...args);
