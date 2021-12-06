import { Fare } from "../response/blockTicketResponse";
import { Availability } from "../response/searchTripResponse";

const isSeatAvailable = (availability: Availability): boolean => {
  return availability.seats > 0;
};

export const fetchFirstAvailableSlot = (availableSlots: Availability []):Availability | undefined => {
  return availableSlots.find(isSeatAvailable);
};
export  interface KeyDetailObject {
  label: string,
  value: string,
}
export interface FareBreakUp {
  totalPrice: KeyDetailObject,
  passengerCount: KeyDetailObject,
  currency: string,
  base: KeyDetailObject,
  cgst: KeyDetailObject,
  sgst: KeyDetailObject,
  amount: KeyDetailObject
}
export const fareBreakUpGenerator = (fareDetailsObject: Fare, passengerCount: number) : FareBreakUp => {
  const calculateTotalTicketPrice = 
  fareDetailsObject.amount * passengerCount + fareDetailsObject.base + fareDetailsObject.cgst + fareDetailsObject.sgst;
  const addTwoDecimalPlace = (num: number): string => {
    const result = Number.isInteger(num) ? num + ".00" : num.toFixed(2)  ;  
    return "Rs. " +result;
  };

  const fareConfig: FareBreakUp = {
    currency:fareDetailsObject.currency,
    totalPrice: {
      label: "Total Fare",
      value: addTwoDecimalPlace(calculateTotalTicketPrice).toString()
    },
    base: {
      label: "Base fare",
      value: addTwoDecimalPlace(fareDetailsObject.base).toString()
    },
    cgst: {
      label: "CGST",
      value: addTwoDecimalPlace(fareDetailsObject.cgst).toString()
    },
    sgst: {
      label: "SGST",
      value: addTwoDecimalPlace(fareDetailsObject.sgst).toString()
    },
    passengerCount: {
      label: "Quantity",
      value: passengerCount.toFixed().padStart(2,"0")
    },
    amount: {
      label: "Fare per person",
      value: addTwoDecimalPlace(fareDetailsObject.amount).toString()
    }
  };
  return fareConfig; 
};

export const getTimeInTwelveHourFormat = (twentyFourHourFormatTime: string): string => {
  const [ hours, minutes ] = twentyFourHourFormatTime.split(":");
  const hoursInt = parseInt(hours);
  const amOrPm = hoursInt > 12 ? "pm" : "am";
  const hoursInTwelveHourFormat = parseInt(hours) % 12;
  return hoursInTwelveHourFormat + ":" + minutes + " " + amOrPm;
};
