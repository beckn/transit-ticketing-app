import { clearTrip, setTrip } from "../../../src/store/actions/tripsAction";
import { mockTrip } from "../../mockData/mockData";
import { tripReducer } from "../../../src/store/reducers/tripReducer";
import { initalTripDetails, initialState } from "../../../src/store/reducers/reducer";

describe("tripReducer", () => {
  it("should set the trip details", () => {
    const action = setTrip(mockTrip);
    const actualResult = tripReducer(initialState.trip, action);

    expect(actualResult).toStrictEqual(mockTrip);
  });

  it("should clear the trip details", () => {
    const action = clearTrip();
    const actualResult = tripReducer(mockTrip, action);

    expect(actualResult).toStrictEqual(initalTripDetails);
  });
});
