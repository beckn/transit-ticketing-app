import { Station } from "../../types/stations";
import { StationAction, STATION_ACTIONS } from "../actions/stationsAction";

export type State = {
  originStation: string,
  destinationStation: string,
  stations: Station []
}

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

const initialState: State =  {
  originStation:"",
  destinationStation:"",
  stations: DATA
};
export default (state = initialState, action: StationAction ): State => {  
  switch (action.type) {
    case STATION_ACTIONS.setOriginStation:
      return { 
        ...state, originStation: action.payload
      };
    case STATION_ACTIONS.setDestinationStation:
      return {
        ...state, destinationStation: action.payload
      };
    default:
      return state;
  }
};