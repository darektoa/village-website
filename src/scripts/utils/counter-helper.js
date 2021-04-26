class Counter {
  constructor(initValue) {
    this._initValue = initValue;
    this._currentValue = initValue;
    return this._currentValue;
  }

  action(option, value = 1) {
    if (option === 'plus') return this.plus(value);
    if (option === 'minus') return this.minus(value);
    if (option === 'reset') return this.reset(value);
    return this._currentValue;
  }

  plus(value = 1) {
    this._currentValue += value;
    return this._currentValue;
  }

  minus(value = 1) {
    this._currentValue -= value;
    return this._currentValue;
  }

  reset() {
    this._currentValue = this._initValue;
    return this._currentValue;
  }
}

export default Counter;