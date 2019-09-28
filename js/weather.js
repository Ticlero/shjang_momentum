const weather = document.querySelector(".js-weather");
const URL = 'https://api.openweathermap.org/data/2.5/weather?';
const W_API_KEY = '9f69174ea1903602a0a38929cabb328a';
const COORDS = "coords";

const getWeather = (lati, longi) =>{
    const lat = lati;
    const lon = longi;
    const requestURL = URL+`lat=${lat}&lon=${lon}&appid=${W_API_KEY}&units=metric`;
    
    fetch(requestURL).then((response)=>{
        return (response.json());
    }).then((json) => {
        const temp = json.main.temp;
        const place = json.name;
        weather.innerText = `Temp: ${temp}℃\nCity: ${place}`;
        console.log(json);
    });
}

//JSON.stringify(OBJ) -> obj을 string로 변환
//JSON.parse(STRING) -> This method change a String to JSON
const saveCoords = (coordsObj) =>{
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

const handleGeoSuccess = (position) =>{
    const latitude = position.coords.latitude, 
    longitude = position.coords.longitude;

    const obj = {
        latitude: latitude,
        longitude: longitude,
    };

    saveCoords(obj);
    getWeather(latitude, longitude);
}

const handleGeoFailed = (errorPosition) =>{
    console.log(errorPosition.message);
}

const askForCoords = () =>{
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoFailed);
}

const loadCoords = () =>{
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    }else{
        //get Weather
        const coordsObj = JSON.parse(loadedCoords);
        const lat = `${coordsObj.latitude}`;
        const lon = `${coordsObj.longitude}`;
        console.log(lat, lon);
        getWeather(lat,lon);
    }
}

const wInit = () =>{
    loadCoords();
}
wInit();
