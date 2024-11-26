const initialState = {
  restaurants: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return state;

    case "DELETE":
      return state;

    case "UPDATE":
      return state;

    default:
      return state;
  }
};

export default productReducer;
