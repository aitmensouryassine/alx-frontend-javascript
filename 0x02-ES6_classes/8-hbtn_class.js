export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](cast) {
    if (cast === 'string') {
      return this._location;
    } if (cast === 'number') {
      return this._size;
    }
    return this;
  }

  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }
}
