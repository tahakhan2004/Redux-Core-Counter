import { applyMiddleware, createStore, } from "redux";
// import { counterReducer } from "./Reducers/CounterReducer";
import thunk from "redux-thunk";
import CombineReducer from "./Reducers/combineReducer";
const store = createStore( CombineReducer , {} , applyMiddleware(thunk) )

export default store;