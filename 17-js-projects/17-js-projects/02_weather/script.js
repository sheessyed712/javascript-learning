// document.addEventListener("DOMContentLoaded", () => {
//   const cityInput = document.getElementById("city-input");
//   const getWeatherBtn = document.getElementById("get-weather-btn");
//   const weatherInfo = document.getElementById("weather-info");
//   const cityNameDisplay = document.getElementById("city-name");
//   const temperatureDisplay = document.getElementById("temperature");
//   const descriptionDisplay = document.getElementById("description");
//   const errorMessage = document.getElementById("error-messag");

//   const API_KEY = "5f56d525d1619d0a2cd2eac4ce55588e"; //env variables

//   getWeatherBtn.addEventListener("click", async () => {
//     const city = cityInput.value.trim();
//     if (!city) return;

//     // it may throw an error
//     // server/database is always in another continent

//     try {
//       const weatherData = await fetchWeatherData(city);
//       displayWeatherData(weatherData);
//     } catch (error) {
//       showError();
//     }
//   });

//   async function fetchWeatherData(city) {
//     //gets the data
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

//     const response = await fetch(url);
//     console.log(typeof response);
//     console.log("RESPONSE", response);

//     if (!response.ok) {
//       throw new Error(" City Not found");
//     }
//     const data = await response.json();
//     return data;
//   }

//   function displayWeatherData(data) {
//     console.log(data);
//     const { name, main, weather } = data;
//     cityNameDisplay.textContent = name;
//     temperatureDisplay.textContent = `Temperature : ${main.temp}`;
//     descriptionDisplay.textContent = `Weather : ${weather[0].description}`;

//     //unlock the display
//     weatherInfo.classList.remove("hidden");
//     errorMessage.classList.add("hidden");
//   }

//   function showError() {
//     weatherInfo.classList.remove("hidden");
//     errorMessage.classList.add("hidden");
//   }
// });



//my code

document.addEventListener("DOMContentLoaded",()=>{
  const cityInput=document.getElementById("city-input");
  const getWeatherBtn=document.getElementById("get-weather-btn");
  const weatherInfo=document.getElementById("weather-info");
  const cityNameDisplay=document.getElementById("city-name");
  const temperatureDisplay=document.getElementById("temperature");
  const descriptionDisplay=document.getElementById("description");
  const errorMessage=document.getElementById("error-messag");

const API_KEY="2d65946b8993be569dc44a18d8e473e6";//env variables



  getWeatherBtn.addEventListener('click',async()=>{
    const city=cityInput.value.trim();
    if(!city) return ;

//server may throw an error
//server/database is always in another continent

//since it may take some time i need to make it async

    try {
      const weatherData=await fetchWeatherData(city);

      displayWeatherData(weatherData);
    } catch (error) {
      showError();
      
    }

    async function fetchWeatherData(city){
      //gets the data

      const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`

      const response=await fetch(url)
      console.log(typeof response);
      console.log("response",response);

      if(!response.ok){
        throw new Error("City not found");

      }
      const data=await response.json();//converting into proper object,and it takes time so using await
      return data;
    }

    function displayWeatherData(data){
      //display
      console.log(data);
      const {name,main, weather}=data;
      cityNameDisplay.textContent=name;

      temperatureDisplay.textContent=`Temperature :${main.temp}`;
      descriptionDisplay.textContent=`desc: ${weather[0].description}`

      //unlock the display 
      weatherInfo.classList.remove('hidden');

      errorMessage.classList.add('hidden');



    }

    function showError(){
      weatherInfo.classList.remove('hidden');
      errorMessage.classList.add('hidden');
    }


  })

})