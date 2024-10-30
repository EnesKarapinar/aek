import { combineReducers } from "redux";
import projectsListReducer from "./projectsListReducer";

const rootReducer = combineReducers({
  projectsListReducer,
});

export default rootReducer;
