import { Station } from "../../response/searchStationsResponse";
import { StationDetail } from "../actions/stationsAction";

const DATA: Station[] = [
  {
    "id": "EKM",
    "name": "Ernakulam",
    "location": {
      "stopLat": "76.27833",
      "stopLng": "9.972357"
    }
  },
  {
    "id": "EMB",
    "name": "Embarkation",
    "location": {
      "stopLat": "76.26221",
      "stopLng": "9.970072"
    }
  },
  {
    "id": "FKO",
    "name": "Fort Kochi",
    "location": {
      "stopLat": "76.26221",
      "stopLng": "9.969376"
    }
  }
];


export type State = {
  originStation: StationDetail,
  destinationStation: StationDetail,
  stations: Station [],
  linkedStationsToOrigin: Station []
}
export const initialState: State =  {
  originStation: { id: "", name: "" },
  destinationStation: { id: "", name: "" },
  stations: DATA,
  linkedStationsToOrigin: []
};