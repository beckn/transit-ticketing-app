import axios from "axios";
import { Station } from "../response/searchStationsResponse";
import { TripResponse } from "../response/searchTripResponse" ;
const baseUrl = "http://10.0.2.2:8080/api/v1/secure";
const axiosInstance = axios.create({
  headers: { "X-API-KEY": "abc123" }
});
const ERROR_MESSAGE = "Something went wrong!";

const SearchStations = (origin?:string): Station [] => {
  const searchUrl = baseUrl+"/stations";
  const url = !origin ? searchUrl: searchUrl + "?origin="+origin ;
  let response: Station [] = [];
  axiosInstance.get(url).then((res) => {
    response =  res.status === 200? res.data : [] ;
  }).catch( () => alert(ERROR_MESSAGE));
  return response;
};

const SearchTrips = (trip: { origin: string, destination: string }): TripResponse => {
  const defaultTrip: TripResponse = { trip: {
    source: "",
    destination: "",
    date: ""
  }, 
  availability: [ ]
  }; 
  const searchTripUrl = baseUrl+"/search?origin="+ trip.origin + "&destination=" + trip.destination; 
  let response: TripResponse = defaultTrip;
  axiosInstance.get(searchTripUrl).then((res => {
    response = res.status === 200 ? res.data : defaultTrip; 
  })).catch( () => {
    alert(ERROR_MESSAGE);
  });
  return response ;
};

export const stationService = {
  SearchStations,
  SearchTrips
};