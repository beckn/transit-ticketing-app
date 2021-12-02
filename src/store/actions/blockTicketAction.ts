import { BlockTicketResponse } from "../../response/blockTicketResponse";

export const enum BLOCK_TICKET_ACTION { BLOCK_TICKET = "BLOCK_TICKET" }

export interface BlockTicketAction {
  type: BLOCK_TICKET_ACTION,
  payload: BlockTicketResponse
} 

export const setBlockTicket = (payload: BlockTicketResponse): BlockTicketAction => {
  return { type: BLOCK_TICKET_ACTION.BLOCK_TICKET, payload };
};