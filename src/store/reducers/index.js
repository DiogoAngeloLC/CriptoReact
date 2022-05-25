import { combineReducers } from "redux";

import user from "./user";
import menu from "./menu";
import search from "./search";

const reducers = {
  user,
  menu,
  search,
};

export default combineReducers(reducers);
