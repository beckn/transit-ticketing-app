import { createStore } from "redux";
import { combineReducers } from "redux";
import { linkedStationsToOriginReducer, stationListReducer } from "./reducers/stationListReducer";
import { destinationStationReducer, originStationReducer } from "./reducers/stationsReducer";
import { tripReducer } from "./reducers/tripReducer";


export const rootReducer  =  combineReducers({
  originStation: originStationReducer,
  destinationStation: destinationStationReducer,
  linkedStationsToOrigin : linkedStationsToOriginReducer,
  stations: stationListReducer,
  trip: tripReducer
});

export default createStore(rootReducer);