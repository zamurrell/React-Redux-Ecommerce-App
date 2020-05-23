import { combineReducers } from "redux";

import ItemReducer from "./reducer";

export default combineReducers({
  item: ItemReducer,
});
