import React from 'react'
import { useState } from 'react'
import axios from 'axios'
export default function Weather() {
    const [city,setCity] = useState('');
    const [data,setData] = useState({});
    const [loading,setLoading] = useState(true);
    let getWeather = async()=>{
        try {
            let result = await axios.get(`https://api.weatherapi.com/v1/current.json?key=8d5bca67f13b43238c101826240102&q=${city}&aqi=no`);
            console.log(result.data)
            if(result.status==200){
                setLoading(false);
            }
            setData(result.data);
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div>
        <h1>Weather App</h1>
        <div>
            <input type="text" value={city} onChange={(event)=>{setCity(event.target.value)}} /> 
            <button onClick={getWeather}>Search</button>
        </div>

     {
        loading==false &&  
     <div>
        <h3>City:{data.location.name}</h3>
        <p>Region:{data.location.region}</p>
        <p><b>Country: {data.location.country}</b></p>
        <p>Temprature in celcius:{data.current.temp_c}</p>
         <p>Condition: {data.current.condition.text}</p>
         <img src={data.current.condition.icon} alt="" />
     </div>
     }


    </div>
  )
}
