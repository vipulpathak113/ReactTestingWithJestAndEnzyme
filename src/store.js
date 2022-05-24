import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import RootReducer from "./Redux/reducer";

const middleware = applyMiddleware(thunk);
const store = createStore(RootReducer, middleware);

export default store;
