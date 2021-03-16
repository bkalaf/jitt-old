import { ObjectFlags } from "typescript";
import uuid from "./uuid";

const OnAuthChanged = 'on-auth-changed';
const OnProfileChanged = 'on-profile-changed';
type EventHandler = (...args: any[]) => void;
interface IDataType<T extends string, TType extends string, TBacking extends string> {
    _type: TType;
    _backing: TBacking;
    value: T; 
}
interface GUID extends IDataType<string, 'GUID', 'string'> {
};
type Unsubscribe = () => void;
function hasProp<T>(propName: keyof T, obj: T) {
  return Object.getOwnPropertyNames(obj).includes(propName.toString());
}
function isUndef(item: unknown): item is undefined {
    return typeof item === 'undefined';
}
function createGUID(value: string = undefined): GUID {
    return isUndef(value) ? { 
        _type: 'GUID',
        _backing: 'string',
        value: uuid()
    } : { 
        _type: 'GUID',
        _backing: 'string',
        value
    }
}

export default class EventAggregator {
  #registry: { [key: string]: { [key: string]: EventHandler } };
  constructor() {
    this.#registry = {};
  }
  addKey(eventName: string) {
    if (hasProp(eventName, this.#registry)) {
      return;
    }
    this.#registry = { ...this.#registry, [eventName]: {} };
  }
  hasEvent(eventName: string) {
    return hasProp(eventName, this.#registry);
  }
  hasGUIDForEvent(eventName: string, guid: GUID): boolean {
    return this.hasEvent(eventName)
      ? hasProp(guid.value, this.#registry[eventName])
      : false;
  }
  subscribe(eventName: string, handler: EventHandler) {
    const id = uuid();
    if (this.hasEvent(eventName))  {
        this.#registry[eventName][id] = handler; 
    } else {
        const eventMap = {};
        this.#registry[eventName] = { ...eventMap, [id]: handler };
    }
    return () =>
      this.unsubscribe(eventName, createGUID(id));
  }
  unsubscribe(eventName: string, guid: GUID) {
    return this.hasGUIDForEvent(eventName, guid)
      ? delete this.#registry[eventName][guid.value]
      : undefined;
  }
  trigger(eventName: string, ...args: any[]) {
    if (this.hasEvent(eventName)) {
      const handlerMap = this.#registry[eventName];
      const func = Object.values(handlerMap).reduce(
        (pv, cv) => (...args: any[]) => {
          pv(...args);
          cv(...args);
        },
        (...args: any[]) => {}
      );
      return func(...args);
    }
  }
}

const ea = new EventAggregator();
ea.subscribe(OnAuthChanged, () => console.log('onAuthChanged'));
const unsub1 = ea.subscribe(OnAuthChanged, () => console.log('authChange: unsub1'));
ea.subscribe(OnProfileChanged, () => console.log('onProfileChanged'));
const unsub2 = ea.subscribe(OnProfileChanged, () => console.log('profileChange: unsub2'));

ea.trigger(OnAuthChanged);
ea.trigger(OnProfileChanged);