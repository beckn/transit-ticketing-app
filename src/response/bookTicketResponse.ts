import { BookTicketRequest } from "../request/bookTicketRequest";

export interface BookTicketResponse extends Omit<BookTicketRequest, "payment_type"> {
  ticket_code: string;
}