import { Station } from "./searchStationsResponse";

export interface Fare {
  amount: number,
  currency: string,
  base: number,
  cgst: number,
  sgst: number
}
export interface SlotTimestamp {
  slot: string,
  timestamp: string,
  stop_id: string
}
export interface Availability {
  slot: string,
  seats: number,
  trip_id: string,
  boat_id: string,
  arrival: SlotTimestamp,
  departure: SlotTimestamp,
  fare: Fare
}
export interface Trip {
  source: string,
  destination: string,
  date: string
}

export interface SearchTripResponse {
  trip: Trip,
  availability : Array<Availability>,
  locations: Array<Station>
}