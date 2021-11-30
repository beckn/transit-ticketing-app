import { BlockTicketResponse } from "../response/blockTicketResponse";

export interface BookTicketRequest extends BlockTicketResponse {
  payment_type: PAYMENT_TYPE
}

enum PAYMENT_TYPE {
  CASH = "CASH"
}