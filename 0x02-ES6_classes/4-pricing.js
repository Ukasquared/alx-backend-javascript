import Currency from "./3-currency";

export default class Pricing {
  constructor (amount, currency) {
    this._amount = amount;
    this._currency = currency;

    if (typeof this._currency !== "object")
      throw TypeError("currency is not an object");
    
    if (typeof this._amount !== "number")
      throw TypeError("amount must be a number");
  }

  get amount() {
    return this._amount;
  }

  set amount(amount) {
    this._amount = amount;
    if (typeof this._amount !== "number")
      throw TypeError("amount must be a number");
  }

  get currency() {
    return this._currency;
  }

  set currency(currency) {
    this._currency = currency;
    if (typeof this._currency !== "object")
      throw TypeError("currency is not an object");
  }

  displayFullPrice() {
    return this._amount + " " + this._currency.displayFullCurrency();
  }

  static convertPrice (amount, conversionRate) {
    return amount * conversionRate;
  }
}
