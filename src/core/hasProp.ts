export default function hasProp<T>(propName: keyof T, obj: T) {
    return Object.getOwnPropertyNames(obj).includes(propName.toString());
}
