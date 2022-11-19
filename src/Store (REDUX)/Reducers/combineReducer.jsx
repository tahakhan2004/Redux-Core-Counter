import { combineReducers } from "redux";
import { AddcounterReducer, counterReducer, MinuscounterReducer } from "./CounterReducer";

const CombineReducer = combineReducers({
    counterReducer : counterReducer
})

export default CombineReducer