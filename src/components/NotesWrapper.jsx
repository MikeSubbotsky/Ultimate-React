import React, { useState } from 'react';
import NoteForm from './NoteForm.jsx';
import DisplayNotes from './DisplayNotes.jsx';
import Modal from './Modal';
import 'react-toastify/dist/ReactToastify.css';


function NotesWrapper() {
  const [notesArray, setNotesArray] = useState([]);
  const [noteIndex, setNoteIndex] = useState(-1);

  return (
    <div className='App'>
      <NoteForm setFunc={setNotesArray}/>
      <DisplayNotes notesArray={notesArray} setFunc={setNotesArray}  setNoteIndex={setNoteIndex}/>
      {noteIndex >= 0 ? <Modal noteIndex={noteIndex} notesArray={notesArray} setNoteIndex={setNoteIndex} setNotesArray={setNotesArray}/> : null }
    </div>
  )
}

export default NotesWrapper;