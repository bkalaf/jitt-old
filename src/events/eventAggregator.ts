import hasProp from '@core/hasProp';
import { createGUID } from './createGUID';
import uuid from "./uuid";


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
  subscribe(eventName: string, handler: EventHandler): Unsubscribe {
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

// const ea = new EventAggregator();
// ea.subscribe(OnAuthChanged, () => console.log('onAuthChanged'));
// const unsub1 = ea.subscribe(OnAuthChanged, () => console.log('authChange: unsub1'));
// ea.subscribe(OnProfileChanged, () => console.log('onProfileChanged'));
// const unsub2 = ea.subscribe(OnProfileChanged, () => console.log('profileChange: unsub2'));

// ea.trigger(OnAuthChanged);
// ea.trigger(OnProfileChanged);