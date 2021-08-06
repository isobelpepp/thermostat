document.addEventListener("DOMContentLoaded", () => {
  const updateTemperature = () => {
    document.querySelector('#current-temperature').innerText = thermostat.currentTemperature();
    document.querySelector('#current-usage').className = thermostat.currentUsage();
  };
  
  const thermostat = new Thermostat();

document.querySelector('#temperature-up').addEventListener('click', () => { 
  thermostat.up(); 
  updateTemperature(); 
})

document.querySelector('#temperature-down').addEventListener('click', () => {
  thermostat.down();
  updateTemperature();
});

document.querySelector('#temperature-reset').addEventListener('click', () => {
  thermostat.reset();
  updateTemperature();
});

document.querySelector('.onoffswitch-checkbox').addEventListener('click', () => {
  thermostat.switchPowerSave();
  updateTemperature();
});
});
