export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
    if (typeof this._name !== 'string' || typeof this._code !== 'string') {
      throw TypeError('must be a string');
    }
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}
