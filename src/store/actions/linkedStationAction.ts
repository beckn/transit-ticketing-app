import { Station } from "../../response/searchStationsResponse";

export const enum STATIONS_LIST_ACTIONS {
  setStationsLinkedToOrigin = "SET_STAIONS_LINKED_TO_ORIGIN",
  setStationsList = "SET_STATIONS_LIST",
  clearLinkedStations = "CLEAR_LINKED_STATIONS",
  clearStationsList = "CLEAR_STATIONS_LIST"
}


export interface StationListActions {
  type: STATIONS_LIST_ACTIONS,
  payload: Station []
}

export const setStationsLinkedToOrigin = (payload: Station []) : StationListActions => {
  return { type: STATIONS_LIST_ACTIONS.setStationsLinkedToOrigin, payload };
};

export const setStationsList = (payload: Station []) : StationListActions => {
  return { type: STATIONS_LIST_ACTIONS.setStationsList, payload };
};
export const clearStationsLinkedToOrigin = () : StationListActions => {
  return { type: STATIONS_LIST_ACTIONS.clearLinkedStations, payload: [] };
};

export const clearStationsList = () : StationListActions => {
  return { type: STATIONS_LIST_ACTIONS.clearStationsList, payload: [] };
};