const weatherMain = document.querySelector(".info__main"),
    weatherTemp = document.querySelector(".info__temp"),
    detailTemps = document.querySelector(".detail__temp"),
    detailWeathers = document.querySelector(".detail__weather"),
    weatherImg = document.querySelector('.weather__img'),
    place = document.querySelector(".info__place");

const API_KEY = 'ad6b4834c23119a6e1cc84833e607c15';
const LOC = "location";
const saveLoc = (locObj) =>{
    localStorage.setItem(LOC,JSON.stringify(locObj));
}
const paintWeather = (weatherObj) =>{
    weatherImg.innerHTML = `<img src="http://openweathermap.org/img/wn/${weatherObj.img}@2x.png" alt="icon" />`;
    weatherMain.innerHTML=`${weatherObj.main} `;
    weatherTemp.innerHTML=`${weatherObj.temp} °C `;
    detailTemps.innerHTML=`<span>Feels : ${weatherObj.tempFeel} °C </span>
                            <span>Min : ${weatherObj.tempMin} °C </span>
                            <span>Max : ${weatherObj.tempMax} °C </span>`;
    place.innerHTML = `${weatherObj.place}, `;
    if(weatherObj.rain){
        detailWeathers.innerHTML=`<span>Humidity : ${weatherObj.humidity} % </span>
                            <span>Wind : ${weatherObj.wind} m/s </span>
                            <span>Rain : ${weatherObj.rain} mm/h </span>`;
                            
    }
    else{
        detailWeathers.innerHTML=`<span>Humidity : ${weatherObj.humidity} % </span>
                            <span>Wind : ${weatherObj.wind} m/s </span>`;
                            
    }
}
const getWeather = async(lat,lon) =>{
    const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );
    const weatherData = await data.json();
    const weatherObj = {
        main : weatherData.weather[0].main,
        temp : weatherData.main.temp,
        tempFeel : weatherData.main.feels_like,
        tempMin : weatherData.main.temp_min,
        tempMax : weatherData.main.temp_max,
        humidity : weatherData.main.humidity,
        wind: weatherData.wind.speed,
        id : weatherData.weather[0].main,
        rain : weatherData.rain ? weatherData.rain["1h"] : null,
        img: weatherData.weather[0].icon,
        place : weatherData.name,
    }
    
    paintWeather(weatherObj);
}
const handleSuccess = (position) =>{
    const { latitude, longitude } = position.coords;
    const locObj = {
        latitude,
        longitude,
    };
    saveLoc(locObj);
    getWeather(latitude,longitude);
}
const handleError = () => {
  console.log("Failed to get current position");
};
const askForLocation = () =>{
    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
}
const loadLoaction = () =>{
    const loadedLocation = localStorage.getItem(LOC);
    if(loadedLocation){
        const parseLocation = JSON.parse(loadedLocation);
        const {latitude, longitude} = parseLocation;
        console.log(latitude)
        getWeather(latitude,longitude);
    }
    else{
        askForLocation();
    }
};
loadLoaction();