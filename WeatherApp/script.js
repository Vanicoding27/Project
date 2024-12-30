let time = new Date()
var images = document.getElementsByTagName('img');
var image = images[1]; // gets the image tag containing the image of weather

if (time.getHours() >= 18) {
    image.src = "moon.png";
}
else if (time.getHours() <= 6) {
    image.src = "moon.png";
}

else{
    image.src = "sun.webp";
}




// Weather API


let searchbox = document.querySelector(".search_bar input")
let searchbtn = document.querySelector(".search_bar button")


async function GetWeather(city) {
    const apiKey = "91c7ac56859ee6d9b622a21b53fbef2f"
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`

    const data = await fetch(`${apiUrl}`).then
        (response => response.json());

    document.querySelector(".place").innerHTML = data.name
    document.querySelector(".weather_status").innerHTML = data.weather[0].description
    document.querySelector(".displayDegreeTemp").textContent = Math.ceil(data.main.temp)
    document.querySelector(".wind_status").innerHTML =Math.ceil(data.wind.speed)
    document.querySelector(".humidity_status").innerHTML = Math.ceil(data.main.humidity)

    const weather_check = data.weather[0].description
    
    const weatherConditions = [
        { pattern: /rain/, image: "rain.png" },
        { pattern: /thunderstorm/, image: "thunder.png" },
        { pattern: /clouds/, image: "cloud.png" },
        { pattern: /mist/, image: "cloud.png" },
    
    ];

    const matchCondition = weatherConditions.find(({ pattern }) => pattern.test(weather_check));
    if (matchCondition) {
        image.src = matchCondition.image;
    }

}

searchbtn.addEventListener("click", () => {
    GetWeather(searchbox.value)
})
searchbtn.addEventListener("keypress", (e) => {
    if (e.key == 'enter') {
        GetWeather(searchbox.value)
    }
})
