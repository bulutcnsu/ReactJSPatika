import { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button';

const perWeek = ({city, forecast}) => {

   const getDayName = (dateStr)=>{
    const date = new Date(dateStr);
  return  date.toLocaleDateString("en-GB", { weekday: 'long' });        
}

      return (
      <>
 
         <div className="container">
         <div className="weather-details">
        <div className="row metrics-day">
        
         <div className="row">

        {forecast && forecast.length>0 ?  (
         <div className = "col " style={{padding:".6em"}}>
         
         
          {forecast.map((el,index)=>{
     
      return(
        
      <div className='col daily' key={index} style={{flexDirection:"column"}}>

     <div className="row" >
      
       
        <p className= "day" key={index}> <span>{getDayName(el.dt_txt)}  </span></p>
           
            </div>  
    <div className="row " >
      <div  >
         <img className="dailyImg"src={`/icons/${el?.weather?.[0]?.icon || "default"}.svg`}></img>
          </div>
     
      <div className="downInfo">     
          {el?.main?.temp !== undefined 
           ? Math.round((el.main.temp -32)*(5/9)) + "°C" 
           : "Unknown °C"}
           </div>
 </div>
      </div>)
      })}
         </div>
         ) : (
              <div className = "col ">
      
     <p>nothing to see </p>
         </div>
         )}

      
      </div>
     </div>
    </div>
   </div>

     </>  
 
  
     )}

export default perWeek;