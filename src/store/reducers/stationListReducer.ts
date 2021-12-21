import { Station } from "../../response/searchStationsResponse";
import { StationListActions, STATIONS_LIST_ACTIONS } from "../actions/linkedStationAction";
import { initialState } from "./reducer";

export const stationListReducer = (state = initialState.stations, action: StationListActions ): Station[] => {  
  switch (action.type) {  
    case STATIONS_LIST_ACTIONS.setStationsList:
      return action.payload ;
    case STATIONS_LIST_ACTIONS.clearStationsList:
      return action.payload ;
    default:
      return state;
  }
};

export const linkedStationsToOriginReducer =(state = initialState.linkedStationsToOrigin, action: StationListActions ): Station [] => {
  switch (action.type) {  
    case STATIONS_LIST_ACTIONS.setStationsLinkedToOrigin:
      return action.payload ;
    case STATIONS_LIST_ACTIONS.clearLinkedStations:
      return action.payload ;
    default:
      return state;
  }
};