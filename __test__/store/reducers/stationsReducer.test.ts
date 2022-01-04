import {
  clearDestinationStation,
  clearOriginStation,
  setDestinationStation,
  setOriginStation
} from "../../../src/store/actions/stationsAction";
import { destinationStationReducer, originStationReducer } from "../../../src/store/reducers/stationsReducer";
import { initialState } from "../../../src/store/reducers/reducer";

const station = {
  id: "101",
  name: "Kochi"
};

describe("originStationReducer", () => {
  it("should set origin station", () => {
    const action = setOriginStation(station);
    const actualResult = originStationReducer(initialState.originStation, action);

    expect(actualResult).toStrictEqual(station);
  });

  it("should clear origin station", () => {
    const action = clearOriginStation();
    const actualResult = originStationReducer(station, action);

    expect(actualResult).toStrictEqual( { id: "", name: "" });
  });
});

describe("destinatinoStaion", () => {
  it("should set the destination station", () => {
    const action = setDestinationStation(station);
    const actualResult = destinationStationReducer(initialState.destinationStation, action);

    expect(actualResult).toStrictEqual(station);
  });

  it("should clear the destination station", () => {
    const action = clearDestinationStation();
    const actualResult = destinationStationReducer(station, action);

    expect(actualResult).toStrictEqual([]);
  });
});
