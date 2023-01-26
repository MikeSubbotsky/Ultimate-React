import React, { useEffect, useState } from 'react'
import './DispalyNotes.css';
import { ToastContainer, toast } from 'react-toastify';

function DisplayNotes({ notesArray, setFunc, setNoteIndex }) {
    const [notes, setNotes] = useState([]);

    function formatDate (date) {
      const dateOptions = { month: 'short', day: 'numeric', year: 'numeric' };
      const timeOptions = { hour: 'numeric', minute: 'numeric' };
      return date.toLocaleDateString('en-US', dateOptions) + ' ' + date.toLocaleTimeString('en-US', timeOptions);
    }
    
    const confirmNoteDeletion = (deleteIndex) => {
      
      const handleYes = () => {
      const updatedNotes = notes.slice(0, deleteIndex).concat(notes.slice(deleteIndex + 1));
      setFunc(updatedNotes);
      toast.dismiss();
      }
      
      const handleNo = () => {
        toast.dismiss();
      }

      toast(() => (
        <div>
          <p>Are you sure you want to delete this note?</p>
          <div className="d-flex justify-content-between">
            <button className="btn btn-success" onClick={handleYes}>Yes</button>
            <button className="btn btn-danger" onClick={handleNo}>No</button>
          </div>
        </div>
      ));
    };

    function handleDeleteNote (event) {
      const deleteIndex = parseInt(event.target.value);
      confirmNoteDeletion(deleteIndex);
    }

    function handleNoteChange (changeIndex) {
      setNoteIndex(changeIndex);
    }
    
    useEffect(() => {
        setNotes(notesArray);
    }, [notesArray]);

  return (
    <>
      <div className="row d-flex mx-4">
        {console.log(notes)}
        {notes.map((note, index) => (
          <div key={index} className="col-sm-3 mb-2 mask position-relative btn">
            <div className="card rgba-green-slight" onClick={() => handleNoteChange(index)}>
              <div className="card-body pe-none">
                <h5 className="card-title">{note.title}</h5>
                <p className='card-text'>{note.text}</p>
                <p className="card-text">{formatDate(note.createdAt)}</p>
              </div>
            </div>
            <button type="button" className="btn-close btn-close-dark delete-button" aria-label="Close" value={index} onClick={(event) => handleDeleteNote(event)}></button>
          </div>
        ))}
      </div>
      <ToastContainer 
      position="top-center"
      autoClose={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      draggable
      theme="dark"
      />
    </>
  )
}

export default DisplayNotes;