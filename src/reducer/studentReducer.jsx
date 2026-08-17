const studentReducer = (state, action) => {
  switch (action.type) {
    case "SET_STUDENTS":
      return action.payload;

    case "ADD_STUDENT":
      return [action.payload, ...state];

    default:
      return state;
  }
};

export default studentReducer;