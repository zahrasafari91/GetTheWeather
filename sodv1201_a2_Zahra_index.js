// * @name: Assignement2 
// * @Course Code: SODV1201 
// * @class: Software Development Diploma program.
// * @author: Zahra Safarialamoti.

// create an object 
let myObj = {
  tempC: 0,
  tempF: 0,
  desc: '',
  iconId: '',
  city: 'unknown',
  cnty: 'CA'
};

// get weather by latitude longitude
let lati = 51.05;
let long = -114.09;

function readyFn() {
  lati = position.coords.latitude;
  long = position.coords.longitude;
     
}
// Calling JQuery when doc is ready.
$(document).ready(readyFn);
let api = `http://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${long}&appid=254e0cf78d020e1433467163be0f45b7`;
fetch(api)
  .then(function (response) {
    let data = response.json();
    return data;
  })
  .then(function (data) {
    tempC = (Math.floor(data.main.temp - 273));
    tempF = (((Math.floor(data.main.temp - 273)) * 9 / 5) + 32);
    desc = data.weather[0].description;
    iconId = data.weather[0].icon;
    city = data.name;
    cnty = data.sys.country;
  })
  .then(function () {
    $('.temperature p').on('click', function () {
      document.querySelector(".temperature p").innerHTML = `${tempF}<span>&#8457;</span>`;
    });
    document.querySelector(".temperature p").innerHTML = `${tempC}<span>&#8451;</span>`;
    document.querySelector(".description p").textContent = desc;
    document.querySelector(".weather-icon").innerHTML = `<img src="./icons/${iconId}.png"/>`;
    document.querySelector(".location p").textContent = `${city}, ${cnty}`;
  })
  .catch(function (error) {
    console.error('FETCH FAILED')
  });