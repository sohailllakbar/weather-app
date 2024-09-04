async function getweatherdata(city){

  const apiKey = `8a169e7f7168573528c8602f9a7be612`;

  const apiUrl =  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const weatherdata = await fetch(apiUrl);

  const weatherresponse = await weatherdata.json();

 return weatherresponse;  

  }catch (error){

    console.error("sorry you are failed  error in the fetching data please check" + error.message);

  }


}


const button = document.querySelector(".search")

button.addEventListener("click",async(event)=>{

  
    event.preventDefault();

     const cityname = document.querySelector(".text");

     const city = cityname.value

      const response = await getweatherdata(city);

       const citydata = document.querySelector(".city-name");

        const temperature = document.querySelector(".temperature");

           const humidity = document.querySelector(".humidity");

             const windspeed = document.querySelector(".wind-speed");

               citydata.textContent = response.name;

                  temperature.textContent = Math.round(response.main.temp) + `°c`;


         windspeed.textContent = response.wind.speed + `km/h`

                        humidity.textContent = response.main.humidity  + `%`;

})











  
 



