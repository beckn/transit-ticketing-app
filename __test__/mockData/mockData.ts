import { ClientBookTicketResponse } from "../../src/response/clientBookTicketResponse";
import { Station } from "../../src/response/searchStationsResponse";
import { SearchTripResponse } from "../../src/response/searchTripResponse";

export const mockBookTicketResponse: ClientBookTicketResponse = {
  ticket_no: "1234",
  trip: {
    selected_slot: "04:00",
    boat_id: "222",
    source: "100",
    destination: "101",
    date: "12-12-2022",
    trip_id: "12345",
    seats: 3
  },
  fare: {
    amount: 20,
    currency: "Rs",
    base: 5,
    cgst: 1,
    sgst: 1
  },
  upi_payment: {
    payment_url: "",
    reference_no: null
  },
  card_payment: {
    payment_url: "",
    reference_no: null
  },
  ticket_code: "343432"
};

export const availability = [
  {
    slot: "04:00",
    seats: 0,
    trip_id: "1221",
    boat_id: "324",
    arrival: {
      slot: "04:00",
      timestamp: "04:00",
      stop_id: "101"
    },
    departure: {
      slot: "04:00",
      timestamp: "04:00",
      stop_id: "102"
    },
    fare: {
      amount: 20,
      currency: "Rs",
      base: 5,
      cgst: 1,
      sgst: 1
    }
  },
  {
    slot: "06:00",
    seats: 2,
    trip_id: "2345",
    boat_id: "2311",
    arrival: {
      slot: "06:00",
      timestamp: "06:00",
      stop_id: "101"
    },
    departure: {
      slot: "06:00",
      timestamp: "06:00",
      stop_id: "102"
    },
    fare: {
      amount: 20,
      currency: "Rs",
      base: 5,
      cgst: 1,
      sgst: 1
    }
  }
];

export const stationList: Station[] = [
  {
    id: "101",
    name: "Smart City",
    location: {
      stopLat: "",
      stopLng: ""
    }
  },
  {
    id: "102",
    name: "Kochi",
    location: {
      stopLat: "",
      stopLng: ""
    }
  }
];

export const mockTrip: SearchTripResponse = {
  trip: {
    source: "101",
    destination: "102",
    date: "12-12-2022"
  },
  availability : availability,
  locations: stationList
};
