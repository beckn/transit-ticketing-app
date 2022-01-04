import { mockBookTicketResponse } from "../../mockData/mockData";
import { bookTicketReducer } from "../../../src/store/reducers/boockTicketReducer";
import { clearBlockTicketResponse, setBookTicket } from "../../../src/store/actions/bookTicketAction";
import { initialState } from "../../../src/store/reducers/reducer";

describe("blockTicketReducer", () => {
  it("should handle setBookTicket action", () => {
    const action = setBookTicket(mockBookTicketResponse);
    const actualResult =  bookTicketReducer(initialState.clientBookTicketResponse,action);

    expect(actualResult).toStrictEqual(mockBookTicketResponse);
  });

  it("should handle clearBlockTicketResponse action", () => {
    const expectedResult = {
      "card_payment": {
        "payment_url": "",
        "reference_no": null
      },
      "fare": {
        "amount": 0,
        "base": 0,
        "cgst": 0,
        "currency": "",
        "sgst": 0
      },
      "ticket_no": "",
      "trip": {
        "boat_id": "",
        "date": "",
        "destination": "",
        "seats": 0,
        "selected_slot": "",
        "source": "",
        "trip_id": ""
      },
      "upi_payment": {
        "payment_url": "",
        "reference_no": null
      },
      "ticket_code": ""
    };

    const action = clearBlockTicketResponse();
    const actualResult =  bookTicketReducer(mockBookTicketResponse,action);

    expect(actualResult).toStrictEqual(expectedResult);
  });
});
