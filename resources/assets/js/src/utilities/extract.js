export default function extract(object, property) {
    const value = object[property];
    delete object[property];
    return value;
}