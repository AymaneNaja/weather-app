import { WidgetComponents } from './WidgetComponents';
import useFetchWeather from '../CustomHooks/useFetchWeather'
import React from 'react'
import { useEffect,useState } from 'react'
import Spinner from 'react-bootstrap/Spinner';
import {BiErrorCircle} from 'react-icons/bi'
import { useCity } from '../Contexts/CityContext'
const URL=`https://api.openweathermap.org/data/2.5/weather?q=london&appid=8ef90399767d57795debfbc01ec11307`
const WeatherWidget = () => {
    const {city,setCity}=useCity()
    const {data,loading,err,refetch}=useFetchWeather(URL)

    useEffect( ()=>{
        const newURL=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8ef90399767d57795debfbc01ec11307`
        try {
            refetch(newURL)

        }catch(error){
            console.log(error)
        }
    },[city])
    console.log(err)
  return (
   <> 
   <div className=' max-w-fit mt-2 '>
   {err?<p className='
   flex items-start justify-center font-bold text-xl gap-2 '
   ><BiErrorCircle className='icon-scale m-1'/>Couldn't retrive data check the country name....</p>:null}


   </div>
   <div className='widget relative  grid justify-center w-full h-full mt-10  '>
        {loading ?<div className="loading ">
            <div className='flex justify-center align-center translate-y-36 w-full h-full'> <Spinner className='flex '
              animation="grow" variant="primary" /></div>
        </div>:null}
         {!loading ? <WidgetComponents  
         data={data}  />:null}
    </div>
 
    </>
  )
}

export default WeatherWidget