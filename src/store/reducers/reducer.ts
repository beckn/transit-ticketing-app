import { BlockTicketResponse } from "../../response/blockTicketResponse";
import { Station } from "../../response/searchStationsResponse";
import { TripResponse } from "../../response/searchTripResponse";
import { StationDetail } from "../actions/stationsAction";

const DATA: Station[] = [
  {
    id: "EKM",
    name: "Ernakulam",
    location: {
      stopLat: "76.27833",
      stopLng: "9.972357"
    }
  },
  {
    id: "EMB",
    name: "Embarkation",
    location: {
      stopLat: "76.26221",
      stopLng: "9.970072"
    }
  },
  {
    id: "FKO",
    name: "Fort Kochi",
    location: {
      stopLat: "76.26221",
      stopLng: "9.969376"
    }
  }
];

export type State = {
  originStation: StationDetail;
  destinationStation: StationDetail;
  stations: Station[];
  linkedStationsToOrigin: Station[];
  trip: TripResponse;
  blockTicketResponse: BlockTicketResponse;
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

export const initialState: State = {
  originStation: { id: "", name: "" },
  destinationStation: { id: "", name: "" },
  stations: DATA,
  linkedStationsToOrigin: [],
  trip: { trip: initialTrip, availability: [] },
  blockTicketResponse: {
    ticket_no: "",
    trip: blockTrip,
    fare,
    upi_payment,
    card_payment: upi_payment
  }
};
