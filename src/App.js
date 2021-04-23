import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Blog from './component/Blog';
import Home from './component/Home';
import About from './component/About';
import Navigation from './component/Navigation';
import Weather from './component/Weather';
import Form from './component/Form';
import "weather-icons/css/weather-icons.css"

// api.openweathermap.org/data/2.5/weather?q=London,uk

const API_Key="56c8c21abaed5348c8f52d62529e932a"


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      city:undefined,
      country:undefined,
      icon:undefined,
      main:undefined,
      celsiuse:undefined,
      temp_max:undefined,
      temp_min:undefined,
      description:"",
      error:false,
      mm:"hhjhjhj"
    };
    
    this.weatherIcon={
      Thunderstorm:"wi-thunderstorm",
      Drizzle:"wi-sleet",
      Rain:"wi-storm-showers",
      Snow:"wi-snow",
      Atmosphere:"wi-fog",
      Clear:"wi-day-sunny",
      Clouds:"wi-day-fog"
    }
  }
  calCelsuise=(temp)=>{
    let cell=Math.floor(temp-273.15);
    return cell;
  }
  get_WeatherIcons(icons,reangeId){
    switch(true){
      case reangeId>=200 && reangeId<=232:
        this.setState({icon:this.weatherIcon.Thunderstorm});
        break;
        case reangeId>=300 && reangeId<=321:
        this.setState({icon:this.weatherIcon.Drizzle});
        break;
        case reangeId>=500 && reangeId<=531:
        this.setState({icon:this.weatherIcon.Rain});
        break;
        case reangeId>=600 && reangeId<=622:
        this.setState({icon:this.weatherIcon.Snow });
        break;
        case reangeId>=701 && reangeId<=781:
        this.setState({icon:this.weatherIcon.Atmosphere});
        break;
        case reangeId===800:
        this.setState({icon:this.weatherIcon.Clear});
        break;
        case reangeId>=801 && reangeId<=804:
        this.setState({icon:this.weatherIcon.Clouds});
        break;
        
    }
  }
  getWeather=async(e)=>{
    e.preventDefault();

    const city=e.target.elements.city.value;
    const country=e.target.elements.country.value;
   if(city&&country){
    const api_call= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_Key}`);
    const response=await api_call.json();
    console.log(response)

    this.setState({
      city:`${response.name},${response.sys.country}`,
      celsiuse:this.calCelsuise(response.main.temp),
      temp_max:this.calCelsuise(response.main.temp_max),
      temp_min:this.calCelsuise(response.main.temp_min),
      description:response.weather[0].description,
      icon:this.weatherIcon.Thunderstorm
    });
    console.log(city,country)
    this.get_WeatherIcons(this.weatherIcon,response.weather[0].id)
   }else{
     this.setState({error:true})
   }
  };
  
render(){
  const {icon,country,celsiuse,city,temp_min,temp_max,main,description,error}=this.state;
 
  return (
    
    <Router>
      <div>
       <Navigation/>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route  path='/about' component={About}/>
              <Route  path='/blog' component={Blog}/>
              <Route path='/weather'
               render={(props) => <Weather {...props} city={city} 
               country={country}
               temp_celsuise={celsiuse}
               temp_max={temp_max}
               temp_min={temp_min}
               description={description}
               weatherIcon={icon}
               main={main}
               loadweather={this.getWeather}
               error={this.state.error}
               />}/>
            </Switch>
            
            </div>
</Router>
  );
  }
  
}

export default App;
