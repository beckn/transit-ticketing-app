export const enum STATION_ACTIONS {
  setOriginStation = "SET_ORIGIN_STATION",
  setDestinationStation= "SET_DESTINATION_STATION"
}

export interface StationAction {
  type: string,
  payload: string
}

export const setOriginStation = (id: string):StationAction  => ({
  type: STATION_ACTIONS.setOriginStation,
  payload: id
});

export const setDestinationStation = (id:string): StationAction => ({
  type: STATION_ACTIONS.setDestinationStation,
  payload: id
});
