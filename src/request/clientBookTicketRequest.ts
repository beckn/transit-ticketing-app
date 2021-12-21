export interface ClientBookTicketRequest {
  source: string,
  destination: string,
  date: string,
  slot: string,
  seats: number,
  trip_id: string
}