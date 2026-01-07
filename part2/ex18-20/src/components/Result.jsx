import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"

function Result({data}) {
    if (data == null) {
        return null
    }
    const languages = Object.values(data.languages)
    const apiKey = import.meta.env.VITE_weather
    const [weather,setWeather] = useState(null)

    const WeatherArea = () => {
        if (weather == null) {
            return null
        }
        return (
            <div>
            <p>Temperature {(weather.main.temp - 273.15).toFixed(2)} Celsius</p>
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={`weather icon ${weather.weather.icon}`} />
            <p>Wind {weather.wind.speed} m/s</p>
            </div>
        )
    }

    useEffect(()=> {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${data.capitalInfo.latlng[0]}&lon=${data.capitalInfo.latlng[1]}&appid=${apiKey}`)
        .then(res => setWeather(res.data))
        .catch(error => console.log(error))
    },[])

    return (
        <div>
            <h1>{data.name.common}</h1>
            Capital {data.capital[0]} <br/>
            area {data.area}
            <h2>Languages</h2>
            <ul>
                {languages.map((res,i) => {
                    return <li key={i}>{res}</li>
                })}
            </ul>
            <img src={data.flags.png} alt={data.flags.alt} />
            <h2>Weather in {data.capital[0]}</h2>
            <WeatherArea/>
        </div>
    )
}

export default Result
