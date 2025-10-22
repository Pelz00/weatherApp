
async function callCity() {
       const input = document.getElementById("cityinput").value.trim();
       const showWeather = document.getElementById("showWeather");
      

       if (!input) {
        showWeather.innerHTML = `<p>Type in something</p>`
        return;
       }
       showWeather.innerHTML = '<div id="showinfo loading">Loading...</div>';
       
       try {
            const apiKey = 'f738f4f71aebad731e49a4220203338f';
            const link = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}&units=metric`);
            if (!link.ok) {
                throw new Error("city not found");
            }
            const data = await link.json();
showWeather.innerHTML = 
      `<div class="showinfo">
            <div style="display: flex;justify-content: space-between;align-items: center;">
            <h2>${data.name},${data.sys.country}</h2>
            <div class='temp'>
            <div><img class='sunny' src="sun.svg" alt=""></div>
            <p class='tempo'>${data.main.temp}°C</p>
            </div>
            </div>
            <div style="display: flex;justify-content: space-between;align-items: center;">
            <div>
            <p class='wind'>ws:${data.wind.speed} m/s</p>
            <p style='font-size:20px;font-weight:700'>${data.weather[0].description}</p>
            </div>
            <div>
            <p><strong>lon:</strong> ${data.coord.lon}</p>
            <p><strong>lat:</strong> ${data.coord.lat}</p>
            </div>
            </div>
                      
            </div>`

    
        } catch (error) {
                showWeather.innerHTML = `
                    <div class="weather-info error">
                    <p>Error: ${error.message}</p></div>
                `;
            }

    }

        //  call first city
      async function callCityTwo() {
            const city = "ilorin";
            const showWeather = document.getElementById("showWeather");
            
       
       try {
            const apiKey = 'f738f4f71aebad731e49a4220203338f';
            const link = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
            if (!link.ok) {
                throw new Error("city not found");
            }
            const data = await link.json();
            showWeather.innerHTML = 
            `<div class="showinfo">
            <div style="display: flex;justify-content: space-between;">
            <h2>${data.name}, ${data.sys.country}</h2>
            <div class='temp'>
            <div><img class='sunny' src="sun.svg" alt=""></div>
            <p class='tempo'>${data.main.temp}°C</p>
            </div>
            </div>
            <div style="display: flex;justify-content: space-between;align-items: center;">
            <div>
             <p class='wind'>ws:${data.wind.speed} m/s</p>
            <p style='font-size:20px;font-weight:700'>${data.weather[0].description}</p>
            </div>
            <div>
            <p><strong>lon:</strong> ${data.coord.lon}</p>
            <p><strong>lat:</strong> ${data.coord.lat}</p>
            </div>
            </div>
                      
            </div>`
    
            } catch (error) {
            showWeather.innerHTML = `
            <div class="weather-info error">
            <p>Error: ${error.message}</p></div>
            `;
            }
    }
    callCityTwo()


        //  call city three
       async function callCityThree() {
       const cityLag = "barcelona";
       const showWeatherTwo = document.getElementById("showWeatherTwo");
      
       
       try {
            const apiKey = 'f738f4f71aebad731e49a4220203338f';
            const link = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityLag}&appid=${apiKey}&units=metric`);
            if (!link.ok) {
                throw new Error("city not found");
            }
            const data = await link.json();
           showWeatherTwo.innerHTML = 
      `<div class="showinfo">
            <div style="display: flex;justify-content: space-between;">
            <h2>${data.name},${data.sys.country}</h2>
            <div class='temp'>
            <div><img class='sunny' src="sun.svg" alt=""></div>
            <p class='tempo'>${data.main.temp}°C</p>
            </div>
            </div>
            <div style="display: flex;justify-content: space-between;align-items: center;">
            <div>
             <p class='wind'>ws:${data.wind.speed} m/s</p>
            <p style='font-size:20px;font-weight:700'>${data.weather[0].description}</p>
            </div>
            <div>
            <p><strong>lon:</strong> ${data.coord.lon}</p>
            <p><strong>lat:</strong> ${data.coord.lat}</p>
            </div>
            </div>
                      
            </div>`
    
        } catch (error) {
                showWeatherTwo.innerHTML = `
                    <div class="weather-info error">
                    <p>Error: ${error.message}</p></div>
                `;
            }
    }
    callCityThree()

  
        //   call city three
       async function callCityFour() {
       const citysun = "ottawa";
       const showWeatherThree = document.getElementById("showWeatherThree");
    
       
       try {
            const apiKey = 'f738f4f71aebad731e49a4220203338f';
            const link = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citysun}&appid=${apiKey}&units=metric`);
            if (!link.ok) {
                throw new Error("city not found");
            }
            const data = await link.json();
           showWeatherThree.innerHTML = 
      `<div class="showinfo">
            <div style="display: flex;justify-content: space-between;">
            <h2>${data.name}, ${data.sys.country}</h2>
            <div class='temp'>
            <div><img class='sunny' src="sun.svg" alt=""></div>
            <p class='tempo'>${data.main.temp}°C</p>
            </div>
            </div>
            <div style="display: flex;justify-content: space-between;align-items: center;">
            <div>
             <p class='wind'>ws:${data.wind.speed} m/s</p>
            <p style='font-size:20px;font-weight:700'>${data.weather[0].description}</p>
            </div>
            <div>
            <p><strong>lon:</strong> ${data.coord.lon}</p>
            <p><strong>lat:</strong> ${data.coord.lat}</p>
            </div>
            </div>
                      
            </div>`
    
        } catch (error) {
                showWeatherThree.innerHTML = `
                    <div class="weather-info error">
                    <p>Error: ${error.message}</p></div>
                `;
            }
    }
    callCityFour()


      //   call city four
       async function callCityFive() {
       const cityben = "atlanta";
       const showWeatherFour = document.getElementById("showWeatherFour");
       const form = document.getElementById("form");
       
       try {
            const apiKey = 'f738f4f71aebad731e49a4220203338f';
            const link = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityben}&appid=${apiKey}&units=metric`);
            if (!link.ok) {
                throw new Error("city not found");
            }
           const data = await link.json();
           showWeatherFour.innerHTML = 
     `<div class="showinfo">
            <div style="display: flex;justify-content: space-between;">
            <h2>${data.name}, ${data.sys.country}</h2>
            <div class='temp'>
            <div class='sunny'><img class='sunny' src="sun.svg" alt=""></div>
            <p class='tempo'>${data.main.temp}°C</p>
            </div>
            </div>
            <div style="display: flex;justify-content: space-between;align-items: center;">
            <div>
             <p class='wind'>ws:${data.wind.speed} m/s</p>
            <p style='font-size:20px;font-weight:700'>${data.weather[0].description}</p>
            </div>
            <div>
            <p><strong>lon:</strong> ${data.coord.lon}</p>
            <p><strong>lat:</strong> ${data.coord.lat}</p>
            </div>
            </div>
                      
            </div>`
    
        } catch (error) {
                showWeatherFour.innerHTML = `
                    <div class="weather-info error">
                    <p>Error: ${error.message}</p></div>
                `;
            }
    }
    callCityFive()

