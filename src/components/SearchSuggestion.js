import React from 'react'


const SearchSuggestion = ({filtcities,searchRef,setShowSuggest}) => {

    function updateSearch(city){
      searchRef.current.value=`${city}`
      setShowSuggest(false)
        }

  return (
    <div className='suggestion '>
        {filtcities.map((el,index)=>{
            return(
                    <li onClick={()=>updateSearch(el.city.toLowerCase())}
                    className=' list-none hover:text-blue-600 '
                    key={index}>
                        {el.city}, {el.country}
                    </li>

            )
        })}
    </div>
  )
}

export default SearchSuggestion;