import React from 'react';
import './Weather.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './Form'

const minmaxTemp=(min,max)=>{
  if(min&&max){
    return(
        <h3>
            <span className="px-4">{min}&deg;</span>
            <span className="px-4">{max}&deg;</span>
        </h3>
    )
  }
}
 const Weather = (props) => {
    return (
        <div className="container">
            <Form loadweather={props.loadweather} error={props.error}/>
           <div className="cards">
    <h1>{props.city} {props.country}</h1>
               <h5 className="py-4 mt-3">
                   <i className={`wi ${props.weatherIcon} display-1`}></i>
               </h5>
              {props.temp_celsuise ? ( <h1 className="py-2">{props.temp_celsuise}&deg;</h1>):null}
               {/* show max and min temp */}
               <h4>
               {minmaxTemp(props.temp_min,props.temp_max)}
               </h4>
    <h4 className="py-3">{props.description}</h4>
           </div>
        </div>
    )
  
}
export default Weather;
