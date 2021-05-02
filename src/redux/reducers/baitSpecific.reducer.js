const baitSpecificReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_SPECIFIC_BAIT':
      return action.payload;
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default baitSpecificReducer;
