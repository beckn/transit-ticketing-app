import { Availability } from "../response/searchTripResponse";

const isSeatAvailable = (availability: Availability): boolean => {
  return availability.seats > 0;
};

export const fetchFirstAvailableSlot = (availableSlots: Availability []):Availability | undefined => {
  return availableSlots.find(isSeatAvailable);
};

