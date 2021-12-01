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

const searchStations = async (origin?:string): Promise<Station []> => {
  const searchURL = baseURL+"/stations";
  const url = origin === undefined ? searchURL: searchURL + "?origin="+ origin ;
  const response = await axiosInstance.get(url).then((res) => {
    return res.status === 200 && res.data ;
  }).catch( () => alert(ERROR_MESSAGE));
  return response;
};

const searchTrips = async (trip: { origin: string, destination: string }): Promise<TripResponse> => {
  const searchTripURL = baseURL+"/search?origin="+ trip.origin + "&destination=" + trip.destination; 
  const response = await axiosInstance.get(searchTripURL).then((res => {
    return res.status === 200 && res.data ;
  })).catch( () => {
    alert(ERROR_MESSAGE);
  });
  return response;
};

const blockTicket = async (requestBody: BlockTicketRequest): Promise<BlockTicketResponse> => {
  const blockTicketURL = baseURL+"block_ticket";
  const response = await axiosInstance.post(blockTicketURL, requestBody).then((res => {
    return res.status === 200 && res.data ; 
  })).catch( () => {
    alert(ERROR_MESSAGE);
  });
  return response;
};

const bookTicket = async (requestBody: BookTicketRequest): Promise<BookTicketResponse> => {
  const bookTicketURL = baseURL+"book_ticket";
  const response = await axiosInstance.post(bookTicketURL, requestBody).then((res => {
    return res.status === 200 && res.data ; 
    
  })).catch( () => {
    alert(ERROR_MESSAGE);
  });
  return response;
};

export const stationService = {
  searchStations,
  searchTrips,
  blockTicket,
  bookTicket
};
