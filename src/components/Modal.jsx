import React, { useState } from 'react'
import './Modal.css'

function Modal ({ noteIndex, setNoteIndex, notesArray, setNotesArray }) {
    const [textAreaValue, setTextAreaValue] = useState('');
    const [titleValue, setTitleValue] = useState('');
    const [rows, setRows] = useState(3); 

    function handleNoteSubmit (e) {
        e.preventDefault();
        if (textAreaValue) {
            notesArray[noteIndex] = { title: titleValue, text: textAreaValue, createdAt: new Date()};
            setTextAreaValue('');
            setTitleValue('');
            setRows(3);
            setNoteIndex(-1);
            setNotesArray([...notesArray]);
        }
    }

    return (
            <div className='modal-pop'>
                <form className='w-50 border border-black mb-2 rounded mx-auto' onSubmit={handleNoteSubmit}>
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
                    <div className="d-flex">
                        <button className="btn btn-warning m-2 w-50" type="submit">Change Note</button>
                        <button className="btn btn-danger m-2 w-50" onClick={() => {
                            setNoteIndex(-1);
                        }}>Cancel</button>
                    </div>
                </form>
            </div>
    )
}

export default Modal;