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


const selectCity = document.querySelector('#current-city');
selectCity.addEventListener('change', (event) => {
  const city = event.target.value
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric`

fetch(url).then((response) => {
  return response.json()
}).then((data) => {
  document.querySelector('#outside-temperature').innerText = data.main.temp
});
});
});

