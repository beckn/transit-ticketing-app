import { ClientBookTicketResponse } from "../../response/clientBookTicketResponse";
import { Station } from "../../response/searchStationsResponse";
import { SearchTripResponse } from "../../response/searchTripResponse";
import { StationDetail } from "../actions/stationsAction";

export type State = {
  originStation: StationDetail;
  destinationStation: StationDetail;
  stations: Station[];
  linkedStationsToOrigin: Station[];
  trip: SearchTripResponse;
  clientBookTicketResponse: ClientBookTicketResponse;
};
const initialTrip = { source: "", destination: "", date: "" };
const blockTrip = {
  ...initialTrip,
  selected_slot: "",
  seats: 0,
  trip_id: "",
  boat_id: ""
};
const fare = {
  amount: 0,
  currency: "",
  base: 0,
  cgst: 0,
  sgst: 0
};

const upi_payment = {
  payment_url: "",
  reference_no: null
};

export const initialBlockTicketResponse = {
  ticket_no: "",
  trip: blockTrip,
  fare,
  upi_payment,
  card_payment: upi_payment,
  ticket_code: ""
};

export const initalTripDetails = { trip: initialTrip, availability: [], locations: [] };
export const initialState: State = {
  originStation: { id: "", name: "" },
  destinationStation: { id: "", name: "" },
  stations: [],
  linkedStationsToOrigin: [],
  trip: initalTripDetails,
  clientBookTicketResponse: initialBlockTicketResponse
};
