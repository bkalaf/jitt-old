import { compl } from './compl';

export function isUndef(item: unknown): item is undefined {
    return typeof item === 'undefined';
}
export const isNotUndef = compl(isUndef);
