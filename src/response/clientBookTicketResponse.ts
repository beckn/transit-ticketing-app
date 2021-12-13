import { ClientBookTicketRequest } from "../request/clientBookTicketRequest";
import { Fare } from "./searchTripResponse";

export interface BookedTicketTrip extends Omit<ClientBookTicketRequest, "slot">{
  selected_slot: string,
  boat_id: string
}
export interface Payment {
  payment_url: string,
  reference_no: string | null    
}

export interface ClientBookTicketResponse {
  ticket_no: string,
  trip: BookedTicketTrip,
  fare: Fare,
  upi_payment: Payment,
  card_payment: Payment,
  ticket_code: string
}