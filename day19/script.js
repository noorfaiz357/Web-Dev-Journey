const input = document.getElementById("input")
const button = document.getElementById("submit")
let tempField = document.getElementById("temp")
let cityField = document.getElementById("city")
let humidity = document.getElementById("humidity")
let wind = document.getElementById("wind")
button.addEventListener("click",(e)=>{
   if(input.value.trim()!== ""){
     let city = input.value
    fetchWeather(city)
   }
   else{
        document.querySelector(".info-container").style.display = "none"
     document.querySelector(".error").style.display = "initial"
   }
})


function fetchWeather(city){
    const api = '94de8477c67029a2bd2fa2e8e9923fa1'
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`)
.then((raw)=>{
    document.querySelector(".info-container").style.display = "flex"
     document.querySelector(".error").style.display = "none"
  return raw.json()
}).then((data)=>{
    weather(data)
})
.catch((err)=>{
    console.log("error hai bhai : " + err)
      document.querySelector(".info-container").style.display = "none"
     document.querySelector(".error").style.display = "initial"
})
}

function weather(data){
    console.log(data)
    wind.textContent = data.wind.speed + " Km/H"
    let temp = Math.round(data.main.temp) 
    tempField.innerHTML = temp + "&deg;C"
    cityField.textContent = data.name
    humidity.textContent = data.main.humidity
}