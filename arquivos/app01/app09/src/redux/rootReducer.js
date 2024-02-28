import { combineReducers } from "redux";

import jogoDaVelhaReducer from "../redux/jogoDaVelha/slice";

const rootReducer = combineReducers({ jogoDaVelhaReducer });

export default rootReducer;