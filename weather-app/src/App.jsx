import { useState, useEffect} from 'react'
import { createRoot } from 'react-dom/client';
import Down from '../src/components/down/perWeek.jsx';
import Main from '../src/components/main/main.jsx';
import '../src/App.css'


const API_KEY ="ceb5fa7fd72a36586d5491c49d07d858";


function App() {
  
  const [city, setCity] = useState("Canakkale");
  const [forecast, setForecast] = useState([]);
  const [weatherData, setWeatherData] = useState({
  main: { temp: 0 },
  weather: [{ description: "YÃ¼kleniyor..." }],
  name: "Bilinmiyor"
});


   
useEffect(() => {
    const fetchWeatherData = async (cityName) => {  
      try {
        const  newCity = cityName || "Canakkale";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${newCity}&appid=${API_KEY}&units=imperial`;
        const response = await fetch(url);
        const data = await response.json();
        setWeatherData(data);
            
     
     const foreCastresponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${newCity}&appid=${API_KEY}&units=imperial`);
     const forecastdata = await foreCastresponse.json();
        const dailyForecast = forecastdata.list.filter(
          (item, index) => index % 8 === 0
        );
        setForecast(dailyForecast);
        console.log("daily",dailyForecast);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchWeatherData(city)
  },[city]);
  return (
<div className="App">
     <div className="wrapper">
    <Main city={city} onCityChange={setCity} weather={weatherData} />
    <Down city={city} forecast={forecast}/>

</div>
   </div>  
  )
}

export default App;



  
    // `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=imperial`;
       //`https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=7&appid=${API_KEY}&units=imperial`
       //`https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=7&appid=${API_KEY}`
       // const url =`https://api.openweathermap.org/data/2.5/forecast/daily?id=524901&appid={API_KEY}`
