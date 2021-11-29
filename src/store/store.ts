import { createStore } from "redux";
import stationsReducer from "./reducers/stationsReducer";

export default createStore(stationsReducer);