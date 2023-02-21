import React, { useContext } from 'react'
import './DispalyNotes.css';
import { ToastContainer, toast } from 'react-toastify';
import { NotesArray } from './lib/NotesContext';

function DisplayNotes({ dispatchNotesArray, setNoteIndex }) {
    const { notesArray } = useContext(NotesArray);

  //   const [name, setName] = useState(null);
  //   const [showWelcome, setShowWelcome] = useState(true);

  //   useEffect(() => {
  //     setShowWelcome(false);
  //   });

  //   useEffect(() => {
  //   if (!name) {
  //     setName(window.prompt('Enter your name:'));
  //   }
  //     setShowWelcome(true);
  // } , [name]);

  // useEffect(() => {
  //   return () => {
  //     window.alert('Goodbye!');
  //   };
  // }, []);

    function formatDate (date) {
      const dateOptions = { month: 'short', day: 'numeric', year: 'numeric' };
      const timeOptions = { hour: 'numeric', minute: 'numeric' };
      return date.toLocaleDateString('en-US', dateOptions) + ' ' + date.toLocaleTimeString('en-US', timeOptions);
    }
    
    const confirmNoteDeletion = (deleteIndex) => {
      
      const handleYes = () => {
        dispatchNotesArray({
          type: 'DELETE_NOTE',
          payload: deleteIndex,
        });
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

    // function handleNoteChange (changeIndex) {
    //   setNoteIndex(changeIndex);
    // }
    

  return (
    <>
    <button onClick={() => dispatchNotesArray({ type: "SORT_NOTES_ASCENDING" })}>Ascend</button>
    <button onClick={() => dispatchNotesArray({ type: "SORT_NOTES_DESCENDING" })}>Descend</button>
    <button onClick={() => dispatchNotesArray({ type: "SHOW_NOT_COMPLETED_NOTES" })}>Only Active</button>
    <button onClick={() => dispatchNotesArray({ type: "SHOW_ALL_NOTES" })}>Show all</button>
      <div className="row d-flex mx-4">
      {/* {showWelcome && name && (
        <h1>Welcome {name}</h1>
      )} */}
        {console.log(notesArray.notesArray)}
        {Array.isArray(notesArray.notesArray) && notesArray.notesArray.map((note, index) => (
          <div key={index} className="col-sm-3 mb-2 mask position-relative btn">
            <div className="card rgba-green-slight" 
            // onClick={() => handleNoteChange(index)}
            >
              <div className="card-body">
                <h5 className="card-title">{note.title}</h5>
                <p className='card-text'>{note.text}</p>
                <p className="card-text">{formatDate(note.createdAt)}</p>
                
                <button className='btn btn-success' onClick={() => dispatchNotesArray({ type: "TOGGLE_NOTE_STATUS", payload: index })}>Complete</button>
                <p>{note.status === 'active' ? 'Not completed' : 'Completed'}</p>
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