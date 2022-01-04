import { stationList } from "../../mockData/mockData";
import { linkedStationsToOriginReducer, stationListReducer } from "../../../src/store/reducers/stationListReducer";
import {
  clearStationsList,
  setStationsList,
  setStationsLinkedToOrigin,
  clearStationsLinkedToOrigin
} from "../../../src/store/actions/linkedStationAction";
import { initialState } from "../../../src/store/reducers/reducer";

describe("stationListReducer", () => {
  it("should set stationList", () => {
    const action = setStationsList(stationList);
    const actualResult = stationListReducer(initialState.stations, action);

    expect(actualResult).toStrictEqual(stationList);
  });

  it("should clear the stationist", () => {
    const action = clearStationsList();
    const actualResult = stationListReducer(stationList, action);

    expect(actualResult).toStrictEqual([]);
  });
});

describe("LinkedStationReducer", function() {
  it("should set LinkedStationReducer", () => {
    const action = setStationsLinkedToOrigin(stationList);
    const actualResult = linkedStationsToOriginReducer(initialState.linkedStationsToOrigin, action);

    expect(actualResult).toStrictEqual(stationList);
  });

  it("should clear the LinkedStationReducer", () => {
    const action = clearStationsLinkedToOrigin();
    const actualResult = linkedStationsToOriginReducer(stationList, action);

    expect(actualResult).toStrictEqual([]);
  });
});
