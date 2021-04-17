const API_KEY = 'ad6b4834c23119a6e1cc84833e607c15';
const LOC = "location";
const saveLoc = (locObj) =>{
    localStorage.setItem(LOC,JSON.stringify(locObj));
}
const getWeather = async(lat,lon) =>{
    const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );
    const weatherData = await data.json();
    console.log(weatherData);
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