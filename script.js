var columbiaFallsWeather = {
    "latitude": 48.375,
    "longitude": 114.125,
    "current_weather": {
        "windspeed": 7.9,
        "temperature": 63.6,
        "weathercode": 3,
    }
};

var masonCityWeather = {
    "latitude": 43.125,
    "longitude": 93.125,
    "current_weather": {
        "temperature": 63,
        "windspeed": 10.9,
        "weathercode": 0,
    }
};

var minneapolisWeather = {
    "latitude": 45,
    "longitude": 93.25,
    "current_weather": {
        "temperature": 52.5,
        "windspeed": 11.6,
        "weathercode": 0,
    }
};

var newYorkCityWeather = {
    "latitude": 40.875,
    "longitude": 74.125,
    "current_weather": {
        "temperature": 42.3,
        "windspeed": 12.9,
        "weathercode": 0,
    }
};

var seattleWeather = {
    "latitude": 47.625,
    "longitude": 122.375,
    "current_weather": {
        "temperature": 68.3,
        "windspeed": 4.6,
        "weathercode": 3,

    }
};

onEvent("columbiaButton", "click", function () {
    resetButtons();
    showElement("columbiaData");
    setProperty("columbiaButton", "height", "50px");
    setText("columbiaButton", "Have a beautiful day");
});

onEvent("masonButton", "click", function () {
    resetButtons();
    showElement("masonData");
    setProperty("masonButton", "height", "50px");
    setText("masonButton", "Have a beautiful day");
    setText("columbiaButton", "You already know this weather");
});

onEvent("minnButton", "click", function () {
    resetButtons();
    showElement("minnData");
    setProperty("minnButton", "height", "50px");
    setText("minnButton", "Have a beautiful day");

});

onEvent("nycButton", "click", function () {
    resetButtons();
    showElement("nycData");
    setProperty("nycButton", "height", "50px");
    setText("nycButton", "Have a beautiful day");

});

onEvent("seattleButton", "click", function () {
    resetButtons();
    showElement("seattleData");
    setProperty("seattleButton", "height", "50px");
    setText("seattleButton", "Have a beautiful day");

});

function resetButtons() {
    hideElement("columbiaData");
    setProperty("columbiaButton", "height", "200px");
    hideElement("minnData");
    setProperty("minnButton", "height", "200px");
    hideElement("nycData");
    setProperty("nycButton", "height", "200px");
    hideElement("masonData");
    setProperty("masonButton", "height", "200px");
    hideElement("seattleData");
    setProperty("seattleButton", "height", "200px");
};



console.log(columbiaFallsWeather.current_weather.temperature);
console.log(columbiaFallsWeather.current_weather.windspeed);
console.log(columbiaFallsWeather.current_weather.weathercode);

setText("columbiatemp", columbiaFallsWeather.current_weather.temperature);
setText("columbiawind", columbiaFallsWeather.current_weather.windspeed);
setText("columbiacode", columbiaFallsWeather.current_weather.weathercode);

setText("masontemp", masonCityWeather.current_weather.temperature);
setText("masonwind", masonCityWeather.current_weather.windspeed);
setText("masoncode", masonCityWeather.current_weather.weathercode);

setText("minntemp", minneapolisWeather.current_weather.temperature);
setText("minnwind", minneapolisWeather.current_weather.windspeed);
setText("minncode", minneapolisWeather.current_weather.weathercode);

setText("nyctemp", newYorkCityWeather.current_weather.temperature);
setText("nycwind", newYorkCityWeather.current_weather.windspeed);
setText("nyccode", newYorkCityWeather.current_weather.weathercode);

setText("seattletemp", seattleWeather.current_weather.temperature);
setText("seattlewind", seattleWeather.current_weather.windspeed);
setText("seattlecode", seattleWeather.current_weather.weathercode);


/**
 * Hide an element.
 * @param {string} id - The id of the element.
 * 
 * @example
 * hideElement("divContainer");
 */
function hideElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.classList.add("d-none");
    }
}
/**
 * Show an element.
 * @param {string} id - The id of the element.
 * 
 * @example
 * showElement("divContainer");
 */
function showElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.classList.remove("d-none");
    }
}