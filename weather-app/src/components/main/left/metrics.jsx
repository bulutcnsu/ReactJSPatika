
const Metrics =({weather}) =>{



    return(
 
  <div className="col-md-5" > 

  {weather && weather.main && weather.weather && weather.wind && (  
    <div className="row  " style={{ height:"99%"}}>
  

   <div className = "col ">
    <div className="row metrics-row">
   <div >  <span> Real Feel </span><img className="metricImg"src={`/icons/temperature.svg`}/>  </div> 
       <div className="metricInfo">  {Math.round((weather.main.temp -32)*(5/9))} C </div>
    </div>
            <div className='row metrics-row'> 
              <div ><span>Wind </span><img className="metricImg"src={`/icons/wind1.svg`} /> </div> 
              <div className="metricInfo"> {weather.wind.speed} km/h </div>
                 
         </div>
   
   </div>

      <div className = "col ">
    
     <div className="row metrics-row " >
       <div ><span> Humidty </span><img className="metricImg"src={`/icons/humid.svg`} /> </div> 
       <div className="metricInfo">{weather.main.humidity}% </div>
        </div>
            
       <div className='row metrics-row' >  
       
        <div><span>Gust</span> <img className="metricImg"src={`/icons/gust.svg`} /> </div> 
              <div className="metricInfo"> {weather.wind.speed} km/h </div></div>
            
   </div>
       </div>
     )}

     </div>

    )
}
export default Metrics;