import React, { useState } from 'react';
import moment from 'moment';


function Clock() {    

setInterval(updateTime, 1000);

    const now = new Date().toLocaleTimeString();

    const [time, setTime] = useState(now);

    function updateTime(){
        const newTime = new Date().toLocaleTimeString();
        setTime(newTime);
    } 
    
    const today = moment().format("ddd, Do MMM yyyy");

    return (
        <div className = "clock">
            <h1> {time} </h1>
            <h1> {today} </h1>
        </div>
    );

}

export default Clock;