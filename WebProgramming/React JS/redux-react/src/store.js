import counterreducer from "./Services/Reducer/CounterReducer";
import {createStore} from "redux";

const store=createStore(counterreducer);
export default store;