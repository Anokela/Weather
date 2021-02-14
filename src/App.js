import {useState, useEffect} from 'react';
import Position from './Position'
import './App.css';
import Weather from './Weather';

function App() {
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [isLoading, setIsloading] = useState(true);
  
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
        setIsloading(false);
      }, (error) => {
        alert(error);
      })
    }
    else {
      alert('Geolocation is not supported on your browser')
    }
    
  }, [])
  
  if (isLoading) {
    return (
    <div className="container">
      <p className="mt-3">Loading your position...</p>
      </div>
      )
  }
  else {
    return (
      <div className="container">
        <Position lat={lat} lng={lng}/>
        <Weather lat={lat} lng={lng}/>
      </div>
    );
  }
}

export default App;

