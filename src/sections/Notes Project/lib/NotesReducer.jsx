const initialState = {
    notesArray: []
  };
  
  function NotesReducer(state = initialState, action) {
    switch (action.type) {
      case "ADD_NOTE":
        return {
          ...state,
          initialArray: [...state.initialArray, action.payload],
          notesArray: [...state.notesArray, action.payload]
        };
      case "DELETE_NOTE":
        console.log(action.payload)
        return {
          ...state,
          initialArray: state.initialArray.filter((note, index) => index !== action.payload),
          notesArray: state.notesArray.filter((note, index) => index !== action.payload)
        };
        case "SORT_NOTES_ASCENDING":
  return {
    ...state,
    notesArray: [...state.notesArray].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)),
  };

case "SORT_NOTES_DESCENDING":
  return {
    ...state,
    notesArray: [...state.notesArray].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)),
  };

  case "TOGGLE_NOTE_STATUS":
  return {
    ...state,
    initialArray: state.initialArray.map((note, index) =>
    index === action.payload ? { ...note, status: note.status === 'active' ? 'completed' : 'active' } : note
  ),
    notesArray: state.notesArray.map((note, index) =>
      index === action.payload ? { ...note, status: note.status === 'active' ? 'completed' : 'active' } : note
    ),
  };

  case "SHOW_NOT_COMPLETED_NOTES":
  return {
    ...state,
    notesArray: state.notesArray.filter(note => note.status === 'active'),
  };

  case "SHOW_ALL_NOTES":
    return {
      ...state,
      notesArray: state.initialArray
    }
      default:
        return state;
    }
  }

  export default NotesReducer;