import { SearchTripResponse } from "../../response/searchTripResponse";
import { initalTripDetails } from "../reducers/reducer";

export const enum TRIP_ACTION { 
  SET_TRIP ="SET_TRIP",
  CLEAR_TRIP = "CLEAR_TRIP"
}

export interface TripAction {
  type: TRIP_ACTION,
  payload: SearchTripResponse
} 

export const setTrip = (payload: SearchTripResponse): TripAction => {
  return { type: TRIP_ACTION.SET_TRIP, payload };
};
export const clearTrip = (): TripAction => {
  return { type: TRIP_ACTION.CLEAR_TRIP, payload: initalTripDetails };
};
