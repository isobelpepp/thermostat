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
  });
});