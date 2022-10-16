import React, { useContext, useState } from 'react'
import { createContext } from 'react'

const cityContext=createContext()
export function useCity(){
    return useContext(cityContext)
}
const CityProvider = ({children}) => {
    const [city,setcity]=useState('london')

  return (
    <cityContext.Provider value={{city,setcity}}>
        {children}
    </cityContext.Provider>
  )
}

export default CityProvider