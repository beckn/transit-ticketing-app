import axios from "axios";
import { BlockTicketRequest } from "../request/blockTicketRequest";
import { BookTicketRequest } from "../request/bookTicketRequest";
import { BlockTicketResponse } from "../response/blockTicketResponse";
import { BookTicketResponse } from "../response/bookTicketResponse";
import { Station } from "../response/searchStationsResponse";
import { TripResponse } from "../response/searchTripResponse";

const baseURL = "http://10.0.2.2:8080/api/v1/secure";
const axiosInstance = axios.create({
  headers: { "X-API-KEY": "abc123" }
});
const ERROR_MESSAGE = "Something went wrong!";

const searchStations = (origin?:string): Station [] => {
  const searchURL = baseURL+"/stations";
  const url = !origin ? searchURL: searchURL + "?origin="+origin ;
  axiosInstance.get(url).then((res) => {
    const response: Station [] =  res.status === 200 && res.data ;
    return response;
  }).catch( () => alert(ERROR_MESSAGE));
  return [];
};

const searchTrips = (trip: { origin: string, destination: string }): TripResponse | null => {
  const searchTripURL = baseURL+"/search?origin="+ trip.origin + "&destination=" + trip.destination; 
  axiosInstance.get(searchTripURL).then((res => {
    const response: TripResponse = res.status === 200 && res.data; 
    return response;
  })).catch( () => {
    alert(ERROR_MESSAGE);
  });
  return null;
};

const blockTicket = (requestBody: BlockTicketRequest): BlockTicketResponse | null => {
  const blockTicketURL = baseURL+"block_ticket";
  axiosInstance.post(blockTicketURL, requestBody).then((res => {
    const response:BlockTicketResponse = res.status === 200 && res.data ; 
    return response;
  })).catch( () => {
    alert(ERROR_MESSAGE);
  });
  return null;
};

const bookTicket = (requestBody: BookTicketRequest): BookTicketResponse | null => {
  const bookTicketURL = baseURL+"book_ticket";
  axiosInstance.post(bookTicketURL, requestBody).then((res => {
    const response:BlockTicketResponse = res.status === 200 && res.data ; 
    return response;
  })).catch( () => {
    alert(ERROR_MESSAGE);
  });
  return null;
};

export const stationService = {
  searchStations,
  searchTrips,
  blockTicket,
  bookTicket
};
