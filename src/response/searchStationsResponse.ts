export interface Station {
  id : string,
  name: string,
  location: {
    stopLat: string,
    stopLng: string
  }
}