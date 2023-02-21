import React, { useState, useReducer } from 'react';
import NoteForm from './NoteForm.jsx';
import DisplayNotes from './DisplayNotes.jsx';
import Modal from './Modal';
import 'react-toastify/dist/ReactToastify.css';
import NotesReducer from './lib/NotesReducer.jsx';
import { NotesArray } from './lib/NotesContext.jsx';


function NotesWrapper() {
  const [notesArray, dispatchNotesArray] = useReducer(NotesReducer, { notesArray: [], initialArray: [] });
  const [setNoteIndex] = useState(-1);

  return (
    <NotesArray.Provider value={{ notesArray, dispatchNotesArray }}>
      <div className='App'>
        <NoteForm dispatchNotesArray={dispatchNotesArray}/>
        <DisplayNotes notesArray={notesArray} dispatchNotesArray={dispatchNotesArray}  setNoteIndex={setNoteIndex}/>
        {/* {noteIndex >= 0 ? <Modal noteIndex={noteIndex} notesArray={notesArray} setNoteIndex={setNoteIndex} setNotesArray={setNotesArray}/> : null } */}
      </div>
    </NotesArray.Provider>
  )
}

export default NotesWrapper;