'use strict';

describe('Thermostat', () => {

  let thermostat;

  beforeEach(() => {
    thermostat = new Thermostat();
  });

  describe('default temperature', () => {
    it('should start at 20 degrees', () => {
      expect(thermostat.currentTemperature()).toEqual(20)
    });
  });

  describe('up', () => {
    it('should be able to be turned up', () => {
      thermostat.up()
      expect(thermostat.currentTemperature()).toEqual(21)
    });
  });

  describe('down', () => {
    it('should be able to be turned down', () => {
      thermostat.down()
      expect(thermostat.currentTemperature()).toEqual(19)
    });
    it('should not be able to go under 10 degrees', () => {
      for(let i = 0; i < 12; i ++) {
        thermostat.down()
      }
      expect(thermostat.currentTemperature()).toEqual(10)
    });
  });

  describe('isPowerSaveOn', () => {
    it('defaults to true', () => {
      expect(thermostat.isPowerSaveOn()).toEqual(true)
    });
  });

  describe('switchPowerSave', () => {
    it('switches power save off if on', () => {
      thermostat.switchPowerSave()
      expect(thermostat.isPowerSaveOn()).toEqual(false)
    });
    it('switches power save on if off', () => {
      thermostat.switchPowerSave()
      thermostat.switchPowerSave()
      expect(thermostat.isPowerSaveOn()).toEqual(true)
    })
  })
});