import { createStore, combineReducers } from "redux";
import HomePageReducer from "./containers/HomePage/reducer";
import UserPageReducer from "./containers/UserPage/reducer";

const reducers = combineReducers({ HomePageReducer, UserPageReducer });

export default createStore(reducers);
