class Thermostat {
  constructor() {
    this._temperature = 20
  }
  currentTemperature() {
    return this._temperature;
  }
  up() {
    this._temperature += 1
  }
  down() {
    if(this._temperature === 10) {
      return
    }
    this._temperature -= 1
  }
}
