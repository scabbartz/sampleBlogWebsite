import React, { useState, useEffect } from 'react';
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import axios from "axios";
import Weather from "./components/Weather.js";
import Clock from "./components/Clock.js";
import Nav from "./components/Nav.js";
import Recipies from "./components/Recipies.js";
import AboutUs from "./components/AboutUs";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home.js';

function App() {

  const [temp, setTemp] = useState();
  const [place, setPlace] = useState("");
  const [image, setImage] = useState("");
  const [weatherDescription, setWeatherDescription] = useState("");

  const api_call = async () => {

    const url = "https://api.openweathermap.org/data/2.5/weather?q=Delhi&APPID=086ab8e2d6458025d41c503792f73761&units=metric"
    const request = axios.get(url)
    const response = await request
    setTemp(response.data.main.temp)
    setPlace(response.data.name)
    setImage(response.data.weather[0].icon)
    setWeatherDescription(response.data.weather[0].description)
  }

  useEffect(() => {
    api_call()
  }, []);
  

  return (
    <div className="container">
      <div className="header">
        <Header />
        <div className="weather-clock">
          <Weather
            place={place}
            temperature={temp}
            imgIcon={image}
            description={weatherDescription}
          />
          <Clock />
        </div>       
         
      </div>
      <Router>  
        <div className="buttonLinks">
        <Nav />
        </div>        
            <Switch>              
              <Route path="/" exact={true} component={Home} />
              <Route path="/recipies" component={Recipies} />
              <Route path="/about" component={AboutUs} />
            </Switch>          
        </Router>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
