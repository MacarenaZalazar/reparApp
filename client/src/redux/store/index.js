import { createStore, applyMiddleware } from "redux";
import reducer from "../reducer/index";
import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
