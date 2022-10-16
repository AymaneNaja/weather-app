import React from "react";
import { useState } from "react";

export function WidgetComponents({
    data
}) {
    
  return <div> 
    {data.map(el => {
        const iconId = el.weather.map(el => el.icon);
        const iconImg = `http://openweathermap.org/img/wn/${iconId}@2x.png`;
        const date=new Date(el.dt*1000)
        return(
        <div className="widget ">
           <h1 className="text-white font-bold ">{el.name}|{el.sys.country}</h1>
            <div className="flex justify-center align-start text-lg text-white gap-1">
                <p>{date.toDateString()} |</p>
                <p>{date.toLocaleTimeString()}</p>
            </div>
            <div className="weather-icon"> 
                <p className="font-bold text-large text-white text-4xl">{Math.round(el.main.temp-273.15)}°C</p>
                <img src={iconImg}></img>  
            </div>
            <div>
                {el.weather.map(el=>{
                    return(
                        <p className="text-white font-bold text-xl">{el.description}</p>
                    )
                })}
            </div>
            <div className="flex justify-between gap-3 text-white">
                <label className="font-bold">Humidity <p className='font-normal'>{el.main.humidity}</p></label>
                <label className="font-bold">Feels Like <p className='font-normal'>{Math.round(el.main.feels_like-274)}°C</p></label>
                <label className="font-bold">Pressure <p className='font-normal'>{el.main.pressure}</p></label>
            </div>
        
        </div>
        )
    })}</div>;
}
  