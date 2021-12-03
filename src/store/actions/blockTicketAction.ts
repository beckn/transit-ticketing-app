import { BlockTicketResponse } from "../../response/blockTicketResponse";
import { initialBlockTicketResponse } from "../reducers/reducer";

export const enum BLOCK_TICKET_ACTION { 
  BLOCK_TICKET = "BLOCK_TICKET",
  CLEAR_BLOCK_TICKET_RESPONSE = "CLEAR_BLOCK_TICKET_RESPONSE"
}

export interface BlockTicketAction {
  type: BLOCK_TICKET_ACTION,
  payload: BlockTicketResponse
} 

export const setBlockTicket = (payload: BlockTicketResponse): BlockTicketAction => {
  return { type: BLOCK_TICKET_ACTION.BLOCK_TICKET, payload };
};

export const clearBlockTicketResponse = (): BlockTicketAction => {
  return { type: BLOCK_TICKET_ACTION.CLEAR_BLOCK_TICKET_RESPONSE, payload: initialBlockTicketResponse };
};