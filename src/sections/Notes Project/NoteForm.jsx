import React, { useState, useContext } from 'react';
import './NoteForm.css';
import { NotesArray } from './lib/NotesContext';

function NoteForm() { 
    const [textAreaValue, setTextAreaValue] = useState('');
    const [titleValue, setTitleValue] = useState('');
    const [rows, setRows] = useState(3);
    const { dispatchNotesArray } = useContext(NotesArray);

    function handleNoteSubmit (e) {
        e.preventDefault();
        if (textAreaValue) {
            //setFunc(oldArray => [...oldArray, { title: titleValue, text: textAreaValue, createdAt: new Date()}]);
            dispatchNotesArray({
                type: "ADD_NOTE",
                payload: {
                  title: titleValue,
                  text: textAreaValue,
                  createdAt: new Date(),
                  status: 'active'
                }});
            setTextAreaValue('');
            setTitleValue('');
            setRows(3);
        }
    }
    
  return (
    <div>
        <form className='w-25 border border-black mb-2 rounded mx-auto' onSubmit={handleNoteSubmit}>
            <div className="form-group m-1">
                <input className='w-100 mb-2' placeholder='Title' value={titleValue} onChange={e => setTitleValue(e.target.value)}></input>
                <textarea
                className="form-control"
                rows={rows}
                value={textAreaValue}
                onChange={e => {
                    setTextAreaValue(e.target.value)
                    if(e.target.scrollHeight > e.target.clientHeight) setRows(rows + 1);
                }}
                />
            </div>
            <button className="btn btn-primary m-2 w-50" type="submit">Add Note</button>
        </form>
    </div>
  )
}

export default NoteForm