import { combineReducers } from "redux";
import projectsListReducer from "./projectsListReducer";
import certificatesListReducer from "./certificatesListReducer";
import getPersonalInfoReducer from "./getPersonalInfoReducer";
import changeThemeReducer from "./changeThemeReducer";

const rootReducer = combineReducers({
  projectsListReducer,
  certificatesListReducer,
  getPersonalInfoReducer,
  changeThemeReducer,
});

export default rootReducer;
