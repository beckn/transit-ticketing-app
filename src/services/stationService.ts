import axios from "axios";
import { ClientBookTicketRequest } from "../request/clientBookTicketRequest";
import { ClientBookTicketResponse } from "../response/clientBookTicketResponse";
import { Station } from "../response/searchStationsResponse";
import { SearchTripResponse } from "../response/searchTripResponse";

const baseURL = "http://ec2-3-131-96-6.us-east-2.compute.amazonaws.com:8080/api/v1/secure";
const axiosInstance = axios.create({
  headers: { "X-API-KEY": "a8d6ge7d-5tsa-8d9c-m3b2-30e21c0e9564" }
});
const ERROR_MESSAGE = "Something went wrong!";

const searchStations = async (origin?: string): Promise<Station[]> => {
  const searchURL = baseURL + "/stations";
  const url = origin === undefined ? searchURL : searchURL + "?origin=" + origin;
  const response = await axiosInstance
    .get(url)
    .then((res) => {
      return res.status === 200 && res.data;
    })
    .catch(() => alert(ERROR_MESSAGE));
  return response;
};

const searchTrips = async (trip: {
  origin: string;
  destination: string;
}): Promise<SearchTripResponse> => {
  const searchTripURL =
    baseURL + "/search?origin=" + trip.origin + "&destination=" + trip.destination;
  const response = await axiosInstance
    .get(searchTripURL)
    .then((res) => {
      return res.status === 200 && res.data;
    })
    .catch(() => {
      alert(ERROR_MESSAGE);
    });
  return response;
};

const clientBookTicket = async (requestBody: ClientBookTicketRequest): Promise<ClientBookTicketResponse> => {
  const clientBookTicketURL = baseURL + "/book_ticket_with_cash";
  const response = await axiosInstance
    .post(clientBookTicketURL, requestBody)
    .then((res) => {
      return res.status === 200 && res.data;
    })
    .catch(() => {
      alert(ERROR_MESSAGE);
    });
  return response;
};

export const stationService = {
  searchStations,
  searchTrips,
  clientBookTicket
};
