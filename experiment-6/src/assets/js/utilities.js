export function isObject(x) {
  return Object.prototype.toString.call(x) === "[object Object]"
}

export function isString(x) {
  return Object.prototype.toString.call(x) === "[object String]";
}

export function isInteger(x) {
  return (x ^ 0) === x;
}

export function isArray(x) {
  return Array.isArray(x)
}