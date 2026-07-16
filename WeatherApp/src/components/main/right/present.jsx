

const present= ({city, weather}) => {

 const currentCity =({city}.city =="Kahramanmaraş") ? "K.Maraş": {city}.city;
 
 return (
  <>
    {weather && weather.main  && weather.weather  ?  (
      <div className="row">
        <div className="col">
          <h2 className="city">
            <img id="mainImg" src={`/icons/${weather?.weather?.[0]?.icon || "default"}.svg`} alt="weather icon" />
          </h2>
        </div>

        <div className="col">
          <div><h2 className="city">{currentCity}</h2></div>
          <div><p className="temperature"> 
           
             {weather?.main?.temp !== undefined 
           ? Math.round((weather.main.temp -32)*(5/9)) + "°C" 
           : "Unknown °C"}</p></div>
        </div>
      </div>
    ) : (
      <div className="row">
        <div className="col">
          <h2 className="city">
             <img
          id="mainImg"
          src=""
          alt="default icon"
        />
          </h2>
        </div>

        <div className="col">
          <div><h2 className="city">{currentCity}</h2></div>
          <div><p className="temperature">Unknown </p></div>
        </div>
      </div>
    )}
  </>
);
 }
  
export default present;