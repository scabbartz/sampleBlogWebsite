import React from 'react'

function Weather(props) {
    return (
        <div className="weatherBox">
            <div id = "place-temp">
                <h1>{props.place}</h1>
                <h1>: {props.temperature} °C</h1>
            </div>

            <div id = "img-description"><img src={"http://openweathermap.org/img/wn/" + props.imgIcon + "@2x.png"} alt="w"></img>
                <h2>{props.description}</h2>
            </div>
        </div>
    )
}

export default Weather;
