import axios from "axios";

export const DELETE_ITEM_START = "DELETE_ITEM_START";
export const DELETE_ITEM_FULFILLED = "DELETE_ITEM_FULFILLED";
export const DELETE_ITEM_REJECTED = "DELETE_ITEM_REJECTED";

export const INCREMENT_ITEM_START = "INCREMENT_ITEM_START";
export const DECREMENT_ITEM_START = "DECREMENT_ITEM_START";

export const RESET_ITEMS_START = "RESET_ITEMS_START";
export const RESET_ITEMS_FULFILLED = "RESET_ITEMS_FULFILLED";
export const RESET_ITEMS_REJECTED = "RESET_ITEMS_REJECTED";

export const CREATE_ITEM_START = "CREATE_ITEM_START";
export const CREATE_ITEM_FULFILLED = "CREATE_ITEM_FULFILLED";
export const CREATE_ITEM_REJECTED = "CREATE_ITEM_REJECTED";

export const GET_ITEMS_START = "GET_ITEMS_START";
export const GET_ITEMS_FULFILLED = "GET_ITEMS_FULFILLED";
export const GET_ITEMS_REJECTED = "GET_ITEMS_REJECTED";

export const INCREMENT_ITEM_FULFILLED = "INCREMENT_ITEM_FULFILLED";
export const INCREMENT_ITEM_REJECTED = "INCREMENT_ITEM_REJECTED";

export const DECREMENT_ITEM_FULFILLED = "DECREMENT_ITEM_FULFILLED";
export const DECREMENT_ITEM_REJECTED = "DECREMENT_ITEM_REJECTED";

export const SET_ITEM_FOR_DELETE = "SET_ITEM_FOR_DELETE";
export const SET_ITEM_FOR_INCREMENT = "SET_ITEM_FOR_INCREMENT";
export const SET_ITEM_FOR_DECREMENT = "SET_ITEM_FOR_DECREMENT";

const WS_BASE_URL = "http://rest.learncode.academy/api/murrellza/cart/";
export function createItem(name) {
  return function (dispatch) {
    dispatch({ type: CREATE_ITEM_START });
    return axios
      .post(WS_BASE_URL, { value: 0, isComplete: false })
      .then(function (response) {
        var item = response.data;
        dispatch({ type: CREATE_ITEM_FULFILLED, payload: item });
      })
      .catch(function (error) {
        dispatch({ type: CREATE_ITEM_REJECTED, payload: error });
      });
  };
}

export function deleteItem(item) {
  return function (dispatch) {
    dispatch({ type: DELETE_ITEM_START });
    return axios
      .delete(WS_BASE_URL + item.id)
      .then(function (response) {
        dispatch({ type: DELETE_ITEM_FULFILLED, payload: item });
      })
      .catch(function (error) {
        dispatch({ type: DELETE_ITEM_REJECTED, payload: error });
      });
  };
}

///////////
// export function handleReset() {
//   return function (dispatch) {
//     dispatch({ type: RESET_ITEMS_START });
//     return axios
//       .put(WS_BASE_URL) // Might be an issue
//       .then(function (response) {
//         var items = response.data;
//         dispatch({ type: RESET_ITEMS_FULFILLED, payload: items });
//       })
//       .catch(function (error) {
//         dispatch({ type: RESET_ITEMS_REJECTED, payload: error });
//       });
//   };
// }
///////////

export function getItems() {
  return function (dispatch) {
    dispatch({ type: GET_ITEMS_START });
    return axios
      .get(WS_BASE_URL)
      .then(function (response) {
        var items = response.data;
        dispatch({ type: GET_ITEMS_FULFILLED, payload: items });
      })
      .catch(function (error) {
        dispatch({ type: GET_ITEMS_REJECTED, payload: error });
      });
  };
}

export function updateIncrement(item) {
  return function (dispatch) {
    dispatch({ type: INCREMENT_ITEM_START });
    return (
      axios
        .put(WS_BASE_URL + item.id, item)
        .then(function (response) {
          dispatch({ type: INCREMENT_ITEM_FULFILLED, payload: item });
        })
        // .then((response) =>
        //   response.map((item) => ({
        //     value: `${item.value}`,
        //   }))
        // )
        .catch(function (error) {
          dispatch({ type: INCREMENT_ITEM_REJECTED, payload: error });
        })
    );
  };
}

export function updateDecrement(item) {
  return function (dispatch) {
    dispatch({ type: DECREMENT_ITEM_START });
    return axios
      .put(WS_BASE_URL + item.id, item)
      .then(function (response) {
        dispatch({ type: DECREMENT_ITEM_FULFILLED, payload: item });
      })
      .catch(function (error) {
        dispatch({ type: DECREMENT_ITEM_REJECTED, payload: error });
      });
  };
}
