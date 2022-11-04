import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { Zoom, Fab } from '@mui/material';

function CreateArea(props) {
  // The constant keeps track of the title and content of the note.
  const [note, setnote] = useState({
    title: "",
    content: ""
  })

  const [isExpanded, setExpanded] = useState(false);
  // Updates the input whenever its get changed i.e whenever something gets typed inside it.
  function handleChange(event){
    // This destructures the event so that the constants (name and value) can be accessed.
    const {name, value} = event.target;
    // This updates the newNote array by adding new notes.
    setnote((previousNote) => {
       return {
        // The ...previousValue is a spread operator that spreads all the keyvalue pairs already stored in the newNote array.
         ...previousNote,
        //  The [] around the name turns it from a string to its actual value.
         [name]: value
       };
    });
  }

  function submitNote(event){
    // This prevents the page from refreshing on clicking the add button. REASON: The default behaviour of buttons inside forms is to refresh the page.
    event.preventDefault();
    props.onAdd(note)
    setnote({
      title: "",
      content: ""
    })
  }

  function expand(){
     setExpanded(true);
  }





  return (
    <div>
      <form className="create-note">

       {isExpanded && 
        <input onChange={handleChange} name="title" placeholder="Title" value={note.title} />}

        <textarea  onChange={handleChange} onClick={expand} name="content" placeholder="Take a note..." rows= {isExpanded ? 3 : 1} value={note.content} />

        <Zoom in={isExpanded}>
        <Fab size="medium" onClick={submitNote}> <AddIcon/> </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
