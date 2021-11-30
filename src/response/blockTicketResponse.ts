import { BlockTicketRequest } from "../request/blockTicketRequest";

export interface Trip extends Omit<BlockTicketRequest, "slot">{
  selected_slot: string,
  boat_id: string
}

export interface Fare {
  amount: number,
  currency: string,
  base: number,
  cgst: number,
  sgst: number
}

export interface UPI_Payment {
  payment_url: string,
  reference_no: string | null    
}


export interface Card_Payment {
  payment_url: string,
  reference_no: string | null    
}

export interface BlockTicketResponse {
  ticket_no: string,
  trip: Trip,
  fare: Fare,
  upi_payment: UPI_Payment,
  card_payment: Card_Payment
}