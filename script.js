      // const apikey = "b4142a379c19abfdaedbef5d6db0ded7";
      // const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric";

      // async function checkwheather()
      // {
      //     const response  = await fetch(apiurl + `&appid = ${apikey}`);

      //     var data = await response.json();
      //     console.log(data);
      // }
      // checkwheather();

      const apikey = "b4142a379c19abfdaedbef5d6db0ded7";
      const apiurl =
        "https://api.openweathermap.org/data/2.5/weather?q=germany&appid=b4142a379c19abfdaedbef5d6db0ded7&units=metric";

      const searchBox = document.querySelector(".search input");
      const searchBtn = document.querySelector(".search button");
      const weatherIcon = document.querySelector(".weather-icon");

      async function checkweather(city) {
        const response = await fetch(apiurl + city + `appid=${apikey}`);

        var data = await response.json();
        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML =
          Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML =
          data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if (data.weather[0].main == "Clouds") {
          weatherIcon.src = "/images/cloudy.png";
        } else if (data.weather[0].main == "Clear") {
          weatherIcon.src = "/images/Clear.png";
        } else if (data.weather[0].main == "Rain") {
          weatherIcon.src = "/images/rain.png";
        } else if (data.weather[0].main == "Drizzle") {
          weatherIcon.src = "/images/Drizzle.png";
        } else if (data.weather[0].main == "Mist") {
          weatherIcon.src = "/images/Mist.png";
        }

        document.querySelector(".weather").style.display = "block";
      }
      searchBtn.addEventListener("click", () => {
        checkweather(searchBox.value);
      });