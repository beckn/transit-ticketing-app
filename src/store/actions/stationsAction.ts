
export const enum STATION_ACTIONS {
  setOriginStation = "SET_ORIGIN_STATION",
  setDestinationStation= "SET_DESTINATION_STATION",
}

export type StationDetail = {
  id: string,
  name: string
}
export interface StationAction {
  type: STATION_ACTIONS,
  payload: StationDetail
}

export const setOriginStation = (payload: StationDetail): StationAction => {
  return { type: STATION_ACTIONS.setOriginStation, payload };
};

export const setDestinationStation = (payload: StationDetail): StationAction => {
  return { type: STATION_ACTIONS.setDestinationStation, payload };
};

