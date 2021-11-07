import { combineReducers } from "redux";
import playerReducer from "./playerReducer";

//REDUCERS IS ONLY PACKAGING UP ALL OF THE REDUCERS TOGETHER AND GIVING THE STORE ACCESS TO ALL OF THEM
const reducers = combineReducers({
  espn: playerReducer,
});

export default reducers;
