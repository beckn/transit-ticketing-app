import { ClientBookTicketResponse } from "../../response/clientBookTicketResponse";
import { BlockTicketAction, BOOK_TICKET_ACTION } from "../actions/blockTicketAction";
import { initialState } from "./reducer";

export const bookTicketReducer =(state = initialState.clientBookTicketResponse, action: BlockTicketAction): ClientBookTicketResponse => {
  switch(action.type) {
    case BOOK_TICKET_ACTION.BOOK_TICKET:
      return action.payload ;
    case BOOK_TICKET_ACTION.CLEAR_BLOCK_TICKET_RESPONSE:
      return action.payload;
    default:
      return state;
  }
};