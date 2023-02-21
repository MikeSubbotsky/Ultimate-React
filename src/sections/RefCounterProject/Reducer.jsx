const Reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { ...state, count: state.count + 1 };
      case "decrement":
        return { ...state, count: state.count - 1 };
      case "reset":
        return { count: 0, resetCount: state.resetCount + 1 };
      default:
        return state;
    }
  };
  
  export default Reducer;