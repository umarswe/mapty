'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');


if(navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function(position) {
      const {latitude} = position.coords;
      const {longitude} = position.coords;
      console.log(`https://www.google.pt/maps/@${latitude},${longitude}`);

      const coords = [latitude, longitude]
  
      const map = L.map('map').setView(coords, 13);

      L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      map.on('click', function(mapEvent) {
        form.classList.remove('hidden');
        inputDistance.focus();
      })
      },
  function() {
    alert("Couldn't get your position");
  }
  )
};


form.addEventListener('submit', function() {
  const {lat, lng} = mapEvent.latlng;
  L.marker([lat, lng]).addTo(map)
  .bindPopup(
    L.popup({
    maxWidth: 250,
    minWidht: 100,
    autoClose: false,
    closeOnClick: false,
    className: 'running-popup',
    })
  )
  .setPopupContent('Home')
  .openPopup();
})