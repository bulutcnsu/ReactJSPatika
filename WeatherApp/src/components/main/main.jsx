import { createRoot } from 'react-dom/client';
import Constant from './right/constants.jsx';
import Present from './right/present.jsx';
import Metrics from './left/metrics.jsx';




function Main( {city,onCityChange,weather}) {
return(
<div className="container">     
 <div className="row top">
 <Metrics weather={weather} />
 <div className="col-md-7">  

  <Constant city={city} CityChange={onCityChange}/>
  <Present city={city} weather={weather}/>
  

</div>

</div>
</div>

);
}

export default Main;