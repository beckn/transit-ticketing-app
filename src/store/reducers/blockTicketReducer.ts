import { BlockTicketResponse } from "../../response/blockTicketResponse";
import { BlockTicketAction, BLOCK_TICKET_ACTION } from "../actions/blockTicketAction";
import { initialState } from "./reducer";

export const blockTicketReducer =(state = initialState.blockTicketResponse, action: BlockTicketAction): BlockTicketResponse => {
  switch(action.type) {
    case BLOCK_TICKET_ACTION.BLOCK_TICKET:
      return action.payload ;
    case BLOCK_TICKET_ACTION.CLEAR_BLOCK_TICKET_RESPONSE:
      return action.payload;
    default:
      return state;
  }
};