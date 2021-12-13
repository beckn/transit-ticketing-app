import { ClientBookTicketResponse } from "../../response/clientBookTicketResponse";
import { initialBlockTicketResponse } from "../reducers/reducer";

export const enum BOOK_TICKET_ACTION { 
  BOOK_TICKET = "BOOK_TICKET",
  CLEAR_BLOCK_TICKET_RESPONSE = "CLEAR_BLOCK_TICKET_RESPONSE"
}

export interface BlockTicketAction {
  type: BOOK_TICKET_ACTION,
  payload: ClientBookTicketResponse
} 

export const setBookTicket = (payload: ClientBookTicketResponse): BlockTicketAction => {
  return { type: BOOK_TICKET_ACTION.BOOK_TICKET, payload };
};

export const clearBlockTicketResponse = (): BlockTicketAction => {
  return { type: BOOK_TICKET_ACTION.CLEAR_BLOCK_TICKET_RESPONSE, payload: initialBlockTicketResponse };
};