import {HiSearch} from 'react-icons/hi'
import useAxios from '../CustomHooks/useAxios'
import { useState,useRef} from 'react'
import SearchSuggestion from './SearchSuggestion'
import { useCity } from '../Contexts/CityContext'
const SearchCity = () => {
    const {city,setcity}=useCity()
    const [showSuggest,setShowSuggest]=useState(false)
    const searchRef=useRef()
    const {data}=useAxios('https://countriesnow.space/api/v0.1/countries/population/cities')
    const [filtcities,setFiltcities]=useState([{}])

    function seekCity(){
        const filt=data.filter(el=>{
            if((el.city).toLowerCase().includes(searchRef.current.value)){
                return el
            }
            else{
                // eslint-disable-next-line array-callback-return
                return;
            }
        })
        if((searchRef.current.value).length<1){
            setShowSuggest(false)
        }
        else{
            setShowSuggest(true)
        }
        setFiltcities(filt.sort())
        }
    return (
    <div className='search-components '>
        <div className='flex border-blue-500 border-2 w-full text-xl rounded-md relative p-2 mr-3'>

            <HiSearch
                className='translate-y-2 scale-120 text-blue-500'/>
            <input 
            onKeyDown={(e)=>{
            if(e.key==='Enter'){
            setcity(
                searchRef.current.value
            )
            searchRef.current.value=''
            setShowSuggest(false)}}}
            onChange={()=>seekCity()} 
            ref={searchRef}
            className='p-1 outline-none w-fit
            '
             placeholder="Search city">
             </input>
            <div 
            style={{display:showSuggest?'block':'none'}}
            className='absolute top-full w-full mt-1
            bg-white p-1 z-10 rounded-md left-0 right-0'>
                 <SearchSuggestion
                filtcities={filtcities}
                searchRef={searchRef}
                setShowSuggest={setShowSuggest}
             />
            </div>
            
        </div>
    </div>
  )
}

export default SearchCity