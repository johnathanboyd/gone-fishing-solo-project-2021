const catchItemReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_CATCH_ITEM':
          state = [...state, action.payload]
          return state;
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default catchItemReducer;
  