export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
    if (typeof this._size !== 'number' && typeof this._location !== 'string') {
      throw TypeError('must be a number or a string');
    }
  }

  [Symbol.toPrimitive](classState) {
    if (classState === 'string') {
      return this._location;
    }

    if (classState === 'number') {
      return this._size;
    }
    return null;
  }
}
