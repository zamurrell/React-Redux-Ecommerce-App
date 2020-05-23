import {
  CREATE_ITEM_START,
  CREATE_ITEM_FULFILLED,
  CREATE_ITEM_REJECTED,
  RESET_ITEMS_START,
} from "./../actions/actions";
import {
  GET_ITEMS_START,
  GET_ITEMS_FULFILLED,
  GET_ITEMS_REJECTED,
} from "./../actions/actions";
import {
  DELETE_ITEM_START,
  DELETE_ITEM_FULFILLED,
  DELETE_ITEM_REJECTED,
  INCREMENT_ITEM_START,
  DECREMENT_ITEM_START,
} from "./../actions/actions";
import {
  ITEMS_RESET,
  RESET_ITEMS_FULFILLED,
  RESET_ITEMS_REJECTED,
} from "./../actions/actions";
import {
  SET_ITEM_FOR_DELETE,
  SET_ITEM_FOR_INCREMENT,
  SET_ITEM_FOR_DECREMENT,
} from "./../actions/actions";
import {
  INCREMENT_ITEM_FULFILLED,
  INCREMENT_ITEM_REJECTED,
  DECREMENT_ITEM_FULFILLED,
  DECREMENT_ITEM_REJECTED,
} from "./../actions/actions";

const initialState = {
  isFetching: false,
  error: null,
  deleteItem: null,
  updateIncrement: null,
  updateDecrement: null,
  items: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_ITEM_START: {
      return { ...state };
    }
    case CREATE_ITEM_FULFILLED: {
      const item = action.payload;
      state.items.push(item);
      return { ...state, items: state.items, error: null };
    }
    case CREATE_ITEM_REJECTED: {
      const error = action.payload;
      return { ...state, isFetching: false, error: error };
    }
    case GET_ITEMS_START: {
      return { ...state, isFetching: true };
    }
    case GET_ITEMS_FULFILLED: {
      return { ...state, isFetching: false, error: null };
    }
    case GET_ITEMS_REJECTED: {
      const error = action.payload;
      return { ...state, isFetching: false, error: error };
    }
    case SET_ITEM_FOR_DELETE: {
      return { ...state, deleteItem: action.payload };
    }
    case DELETE_ITEM_START: {
      return { ...state };
    }
    case DELETE_ITEM_FULFILLED: {
      const deletedItem = action.payload;
      let newItems = state.items.filter((item) => {
        return item.id !== deletedItem.id;
      });
      return { ...state, items: newItems, error: null };
    }
    case DELETE_ITEM_REJECTED: {
      const error = action.payload;
      return { ...state, error: error };
    }
    case SET_ITEM_FOR_INCREMENT: {
      return { ...state, incrementItem: action.payload };
    }
    case SET_ITEM_FOR_DECREMENT: {
      return { ...state, decrementItem: action.payload };
    }
    case INCREMENT_ITEM_START: {
      return { ...state };
    }

    case INCREMENT_ITEM_FULFILLED: {
      const updatedItem = action.payload;
      let newItems = state.items.map((item) => {
        if (item.id === updatedItem.id) {
          item.value++;
        }
        return item;
      });
      return { ...state, items: newItems, error: null };
    }
    case INCREMENT_ITEM_REJECTED: {
      const error = action.payload;
      return { ...state, error: error };
    }
    case DECREMENT_ITEM_START: {
      return { ...state };
    }
    case DECREMENT_ITEM_FULFILLED: {
      const updatedItem = action.payload;
      let newItems = state.items.map((item) => {
        if (item.id === updatedItem.id && item.value >= 1) {
          item.value--;
        } else if (item.id === updatedItem.id) {
          console.log("%cItem is already at quantity zero.", "color: #FF6666");
        }
        return item;
      });
      return { ...state, items: newItems, error: null };
    }
    case DECREMENT_ITEM_REJECTED: {
      const error = action.payload;
      return { ...state, error: error };
    }
    // case RESET_ITEMS_START: {
    //   return { ...state };
    // }
    // case RESET_ITEMS_FULFILLED: {
    //   let newItems = state.items.map((item) => {
    //     item.value = 0;
    //     return newItems;
    //   });
    //   return { ...state, items: newItems, error: null };
    // }
    // case RESET_ITEMS_REJECTED: {
    //   const error = action.payload;
    //   return { ...state, error: error };
    // }
    default: {
      return state;
    }
  }
}
