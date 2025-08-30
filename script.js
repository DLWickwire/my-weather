var oldcolumbiaFallsWeather = {}

var oldmasonCityWeather = {}

var oldminneapolisWeather = {}

var oldnewYorkCityWeather = {}

var oldseattleWeather ={}


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
function updateWeatherCard() {
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

};


function fetchcolumbiaWeather() {
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };

    fetch("https://api.open-meteo.com/v1/forecast?latitude=48.37&longitude=114.125&current_weather=true&temperature_unit=fahrenheit", requestOptions)
        .then((response) => response.json())
        .then(function (result) {
            console.log(result);
            columbiaFallsWeather=result;
            updateWeatherCard(result);

        })
        .catch((error)=> console.error(error));
    }

    fetchcolumbiaWeather();

    function fetchmasonWeather() {
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };

    fetch("https://api.open-meteo.com/v1/forecast?latitude=43.125&longitude=93.125&current_weather=true&temperature_unit=fahrenheit", requestOptions)
        .then((response) => response.json())
        .then(function (result) {
            console.log(result);
            masonCityWeather=result;
            updateWeatherCard(result);

        })
        .catch((error)=> console.error(error));
    }

    fetchmasonWeather();

        function fetchminneapolisWeather() {
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };

    fetch("https://api.open-meteo.com/v1/forecast?latitude=45&longitude=93.25&current_weather=true&temperature_unit=fahrenheit", requestOptions)
        .then((response) => response.json())
        .then(function (result) {
            console.log(result);
            minneapolisWeather=result;
            updateWeatherCard(result);

        })
        .catch((error)=> console.error(error));
    }

    fetchminneapolisWeather();



function fetchnewYorkCityWeather() {
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };

    fetch("https://api.open-meteo.com/v1/forecast?latitude=40.87&longitude=74.12&current_weather=true&temperature_unit=fahrenheit", requestOptions)
        .then((response) => response.json())
        .then(function (result) {
            console.log(result);
            newYorkCityWeather=result;
            updateWeatherCard(result);

        })
        .catch((error)=> console.error(error));
    }

    fetchnewYorkCityWeather();

    function fetchseattleWeather() {
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };

    fetch("https://api.open-meteo.com/v1/forecast?latitude=47.62&longitude=122.37&current_weather=true&temperature_unit=fahrenheit", requestOptions)
        .then((response) => response.json())
        .then(function (result) {
            console.log(result);
            seattleWeather=result;
            updateWeatherCard(result);

        })
        .catch((error)=> console.error(error));
    }

    fetchseattleWeather();