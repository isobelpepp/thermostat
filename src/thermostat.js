class Thermostat {
  constructor() {
    this._temperature = 20
    this._powerSave = true
    this.MINIMUM_TEMPERATURE = 10
  }
  currentTemperature() {
    return this._temperature;
  }

  up() {
    if(this._temperature === 25 && this._powerSave === true) {
      return
    } else if(this._temperature === 32 && this._powerSave === false) {
      return
    } else {
    this._temperature += 1
    }
  }

  down() {
    if(this.isMinimumTemperature()) {
      return
    }
    this._temperature -= 1
  }

  isMinimumTemperature() {
    return this._temperature === this.MINIMUM_TEMPERATURE;
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

  reset() {
    this._temperature = 20 
  }
}
