export interface Availability {
  slot: string,
  seats: number,
  trip_id: string
}

export interface Trip {
  source: string,
  destination: string,
  date: string
}

export interface Trips {
  trip: Trip,
  availability : Array<Availability>
}