import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTrash } from "@fortawesome/free-solid-svg-icons";

function Note({id, text , date ,handleDeleteNote}) {
  return (
  <div className='note'>

    <span>{text}</span>

        <div div className='note-footer'>
      
            <small>{date}</small>
            
            <div className="delete-icon"><FontAwesomeIcon onClick={()=>handleDeleteNote(id)}  icon={faTrash} /></div>
         
         </div>

    </div>
  );
}

  
  export default Note