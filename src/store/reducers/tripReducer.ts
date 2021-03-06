import { SearchTripResponse } from "../../response/searchTripResponse";
import { TripAction, TRIP_ACTION } from "../actions/tripsAction";
import { initialState } from "./reducer";

export const tripReducer =(state = initialState.trip, action: TripAction): SearchTripResponse => {
  switch(action.type) {
    case TRIP_ACTION.SET_TRIP:
      return action.payload ;
    case TRIP_ACTION.CLEAR_TRIP:
      return action.payload ;
    default:
      return state;
  }
};