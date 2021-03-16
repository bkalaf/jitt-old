import { isUndef } from '@core';
import uuid from "./uuid";

export function createGUID(value?: string): GUID {
  return isUndef(value) ? {
    _type: 'GUID',
    _backing: 'string',
    value: uuid()
  } : {
    _type: 'GUID',
    _backing: 'string',
    value: value!
  };
}
