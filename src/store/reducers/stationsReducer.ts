import { StationAction, StationDetail, STATION_ACTIONS } from "../actions/stationsAction";
import { initialState } from "./reducer";


export const originStationReducer = (state = initialState.originStation, action: StationAction ): StationDetail => {  
  switch (action.type) {    
    case STATION_ACTIONS.setOriginStation:
      return action.payload ;
    default:
      return state;
  }
};

export const destinationStationReducer =(state = initialState.destinationStation, action: StationAction): StationDetail => {
  switch(action.type) {
    case STATION_ACTIONS.setDestinationStation:
      return action.payload ;
    default:
      return state;
  }
};