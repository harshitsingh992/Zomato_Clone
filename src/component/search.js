import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Search({handleSearchNote}) {
  return (
    <div className='search'>
        <div className="Search-icons">
        <FontAwesomeIcon  icon={faSearch} />
        </div>
         <input onChange={(event)=>handleSearchNote(event.target.value)}  type='text' placeholder='tyee to search'/>
    </div>


           
  )
}

export default Search
