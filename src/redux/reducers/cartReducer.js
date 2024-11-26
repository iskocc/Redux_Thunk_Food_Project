import actionTypes from "../actionTypes";

const initialState = {
  cart: [],
  isloading: true,
  error: null,
};

const cartReducer = (state = initialState, action) => {
  console.log(action);

  switch (action.type) {
    case actionTypes.CART_LOAD:
      return { ...state, isloading: true };

    case actionTypes.CART_ERROR:
      return { ...state, isloading: false, error: action.payload.message };

    case actionTypes.CART_SUCCESS:
      return { isloading: false, error: null, cart: action.payload };
    case actionTypes.ADD_TO_CART:
      return { ...state, cart: state.cart.concat(action.payload) };
    case actionTypes.UPDATE_CART_ITEM:
      const updated = state.cart.map((i) =>
        i.id === action.payload.id ? action.payload : i
      );
      return { ...state, cart: updated };

    case actionTypes.DELETE_CART_ITEM:
      const deleteItem = state.cart.filter((i) => i.id !== action.payload);
      return { ...state, cart: deleteItem };
    default:
      return state;
  }
};
export default cartReducer;
