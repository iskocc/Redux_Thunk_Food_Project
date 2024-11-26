import api from "../../utils/api";
import actionTypes from "../actionTypes";
import { v4 } from "uuid";

export const getCart = () => async (dispatch) => {
  dispatch({
    type: actionTypes.CART_LOAD,
  });
  api
    .get("/cart")
    .then((res) =>
      dispatch({ type: actionTypes.CART_SUCCESS, payload: res.data })
    )
    .catch((err) =>
      dispatch({ type: actionTypes.CART_ERROR, payload: err.message })
    );
};
export const addToCart = (product) => (dispatch) => {
  const newItem = {
    id: v4(),
    productId: product.id,
    title: product.title,
    price: product.price,
    photo: product.photo,
    amount: 1,
  };
  api
    .post("/cart", newItem)
    .then(() => dispatch({ type: actionTypes.ADD_TO_CART, payload: newItem }))
    .catch((err) =>
      dispatch({ type: actionTypes.CART_ERROR, payload: err.message })
    );
};
export const updateCartItem = (id, newAmount) => (dispatch) => {
  api
    .patch(`/cart/${id}`, { amount: newAmount })
    .then((res) =>
      dispatch({ type: actionTypes.UPDATE_CART_ITEM, payload: res.data })
    )
    .catch((err) =>
      dispatch({ type: actionTypes.CART_ERROR, payload: err.message })
    );
};
export const deleteItem = (id) => (dispatch) => {
  api
    .delete(`/cart/${id}`)
    .then(() => dispatch({ type: actionTypes.DELETE_CART_ITEM, payload: id }));
};
