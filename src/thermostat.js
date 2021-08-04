class Thermostat {
  constructor() {
    this._temperature = 20
    this._powerSave = true
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
  isPowerSaveOn() {
    return this._powerSave
  }
  switchPowerSave() {
    if(this._powerSave === true) {
      this._powerSave = false
    } else {
      this._powerSave = true
    }
  }
}
