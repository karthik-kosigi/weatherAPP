
async function fetchWeather(city) {
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${encodeURIComponent(city)}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '27bf976e95msh6972d4331116f8ap1d4e46jsnd1cda76dc4f9',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
      }
    };
  
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      console.log(city);
      city_id.innerHTML=city;
      cloud_pct.innerHTML=result.cloud_pct
      temp.innerHTML=result.temp  
      feels_like.innerHTML=result.feels_like
      humidity.innerHTML=result.humidity  
      min_temp.innerHTML=result.min_temp
      max_temp.innerHTML=result.max_temp
      wind_speed.innerHTML=result.wind_speed
      wind_degrees.innerHTML=result.wind_degrees

    } catch (error) {
      console.error(error);
      const display=document.getElementById('wrongcity');
      display.textContent("Wrong City")
      
    }
  }

  

var searchForm = document.getElementById('searchForm');

searchForm.addEventListener('submit', function(event) {
    event.preventDefault();

    var searchValue = document.getElementById('city').value;

    console.log('Search Value:', searchValue);
    fetchWeather(searchValue)
});

fetchWeather("Bangalore")