export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  /* Code getter and setter */
  set code(value) {
    this._code = value;
  }

  get code() {
    return this._code;
  }

  /* Name getter and setter */
  set name(value) {
    this._name = value;
  }

  get name() {
    return this._name;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
