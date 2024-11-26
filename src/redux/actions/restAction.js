import api from "../../utils/api";
import actionTypes from "./../actionTypes";

export const setRestaurant = (payload) => ({
  type: actionTypes.REST_SUCCESS,
  payload,
});
export const setLoading = (payload) => ({
  type: actionTypes.REST_LOAD,
});
export const setError = (payload) => ({
  type: actionTypes.REST_ERROR,
  payload,
});

export const getRestaurants = () => {
  return async (dispatch) => {
    dispatch(setLoading());
    api
      .get("/restaurants")
      .then((res) => dispatch(setRestaurant(res.data)))
      .catch((err) => dispatch(setError(err)));
  };
};
