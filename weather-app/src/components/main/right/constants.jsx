import Dropdown from 'react-bootstrap/Dropdown'
import styles from "../../../styles/dropdown.module.scss";
import cities from'../../../cities.json'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState} from 'react'



const Constant = ({city, CityChange}) => {
 const [newCity, setSelectedCity] = useState({city});
  const selected = document.getElementById('selected')

   function handleSubmit(event) {
    event.preventDefault()
     CityChange(newCity);
    selected.innerText =" Select City";}
  

  return(
     <form onSubmit={handleSubmit}>
        <div className="row"  >
          <div className = "col dropdown-col" >
           <Dropdown>
          <Dropdown.Toggle 
          variant="primary" 
          id="dropdown-basic"
           data-dropup-auto="false" 
           style={{backgroundColor:"rgb(7 6 125 / 26%)",border:"3px ,#c4b8fb,groove",borderRadius:"1.6em",fontWeight:"600"}}
           size="lg"
             >
           
           <span id="selected" style={{textShadow:"none"}}>Select City</span>
          </Dropdown.Toggle>
          <Dropdown.Menu className={`dropdown-menu ${styles.customDropdown}`} >
            
     {cities.map(( city,index) => {
      return(
            <Dropdown.Item  className={`dropdown-item ${styles.customItem}`}
                 key={index}
                draggable="true"
                style= {{backgroundColor:"#9f98e7c7",color:"#200c44"}}
                onClick={() =>{
                setSelectedCity(city.name);
                selected.innerText = city.name; }}>
                   {city.name}
            </Dropdown.Item>
      )
     })}
          </Dropdown.Menu>
        </Dropdown>
        </div>
      <div class = "col right-col">
       <button class="button" type="submit">Search</button>
       </div>   
      
       </div>
       </form>
)}
export default Constant;