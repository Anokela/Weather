import React, {useState, useEffect} from 'react';

const API_URL = 'https://api.openweathermap.org/data/2.5/weather?'
const ICON_URL = 'http://openweathermap.org/img/wn/';
const API_KEY= '';

export default function Weather({lat,lng}) {
    const [temp, setTemp] = useState(0);
    const [speed, setSpeed] = useState(0);
    const [direction, setDirection] = useState(0);
    const [description, setDescription] = useState('');
    const [icon, setIcon] = useState('');
    const [isLoading, setIsloading] = useState(true);

    useEffect(() => {
       const url = API_URL + 
       'lat=' + lat + 
       '&lon=' + lng + 
       '&units=metric' +
       '&appid=' + API_KEY

        fetch(url)
        .then(res => res.json())
        .then (
           (result) => {
               if (result.main.temp !== undefined) {
                   setTemp(result.main.temp);
                   setSpeed(result.wind.speed);
                   setDirection(result.wind.deg);
                   setDescription(result.weather[0].description);
                   setIcon(ICON_URL + result.weather[0].icon + '@2x.png');
                   setIsloading(false);
               }
               else {
                   alert('Could not read weather information!')
               }
           }, (error) => {
               alert(error);
           }
        )
    }, [])
        if (isLoading) {
        return (<div className="container"><p>Loading your weather forecast...</p></div>
          )
      } else {
        return (
            <div className="col-12">
                <h3 className="header">Weather on your location</h3>
                <div>
                    <p>Temperature: {temp.toFixed(1)} C&#176;</p>
                    <p>Wind speed & direction: {speed} m/s, {direction} degrees</p>
                    <p>Weather description: {description}</p>
                    <img className="img-fluid" src={icon} alt=""/>
                </div>  
            </div>
        )
      }
}