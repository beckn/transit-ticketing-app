import { TripResponse } from "../../response/searchTripResponse";

export const enum TRIP_ACTION { SET_TRIP ="SET_TRIP" }

export interface TripAction {
  type: TRIP_ACTION,
  payload: TripResponse
} 

export const setTrip = (payload: TripResponse): TripAction => {
  return { type: TRIP_ACTION.SET_TRIP, payload };
};