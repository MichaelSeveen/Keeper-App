import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);


  // 1.The addNote function is passed as props to the CreateArea so that it can be caught in the CreateArea page.
  // 2. It adds new notes to the setNotes array.
  function addNote(newNote){
     setNotes(prevNotes => {
      return [...prevNotes, newNote];
     });
  }
  
  function deleteNote(id){
    setNotes(prevNotes => {
      return prevNotes.filter(
        (noteItem, index) => {
        return index !== id;
      });
    });
  }


  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {/* This loops through the notes array and maps each noteItem found in the array and returns a new notes component */}
      {notes.map((noteItem, index) => {
         return <Note key={index} id={index} title={noteItem.title} content={noteItem.content}  onPressed={deleteNote}  />
      })}
      <Footer />
    </div>
  );
}

export default App;
