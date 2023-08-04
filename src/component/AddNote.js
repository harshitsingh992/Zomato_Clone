import React, { useState } from 'react'

function AddNote({handleAddNote}) {

  const characterLimit=200;

  const[noteText, setNoteText]=useState('');


  const handleChange= (event)=>{
    if(characterLimit-event.target.value.length>=0)
       setNoteText(event.target.value);

  };

  const handleSaveClick=()=>{
    if(noteText.trim().length>0){
     handleAddNote(noteText);
     setNoteText('');
    }


  }

  return (
    <div className="note new">
      <textarea 
      rows="8"
      cols="10"
    value={noteText}
      placeholder='Type te....'
      onChange={handleChange}
      ></textarea>

    <div className="note-footer">
      <small>{characterLimit - noteText.length} reamining</small>
    <button className="save" onClick={handleSaveClick} >save</button>
    </div>


    </div>
  )
}

export default AddNote
