const temp = document.querySelector('.temp');
const place = document.querySelector('.place');
const MY_API_KEY = "5f72db1e6bb1f1d257ab6581f800d7e8";

const onGeoOk = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
};

const onGeoErr = () => {
    alert('Can`t find you, No wather for you.')
};

const saveCoords = (coordsObj) => {
    localStorage.setItem("coords", JSON.stringify(coordsObj));
};

const getWeather = (lat, lng) => {
    const weatherApi = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${MY_API_KEY}&units=metric`;
    
    fetch(weatherApi)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        const nowTemp = data.main.temp;
        const nowPlace = data.name;

        temp.innerText = `${nowTemp} °C`;
        place.innerText = nowPlace;
    })
}
 
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoErr)