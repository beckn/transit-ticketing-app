import { addTwoDecimalPlace, appendAM_PM, fareBreakUpGenerator, fetchFirstAvailableSlot } from "../../src/utils/util";
import { availability } from "../mockData/mockData";

describe("util", () => {
  it("should return the slot first slot if seats are available", () => {
    const firstAvailableSlot = fetchFirstAvailableSlot(availability);

    expect(firstAvailableSlot).toStrictEqual(availability[1]);
  });

  it("should generate fare breakup when given fare details and passenger count", () => {
    const expectedFareBreakup = {
      amount: {
        label: "Fare per person",
        value: "Rs. 50.00"
      },
      base: {
        label: "Base fare",
        value: "Rs. 10.00"
      },
      cgst: {
        label: "CGST",
        value: "Rs. 2.00"
      },
      currency: "Rs",
      passengerCount: {
        label: "Quantity",
        value: "02"
      },
      sgst: {
        label: "SGST",
        value: "Rs. 2.00"
      },
      totalPrice: {
        label: "Total Fare",
        value: "Rs. 100.00"
      }
    };
    const fareDetails = {
      amount: 50,
      currency: "Rs",
      base: 10,
      cgst: 2,
      sgst: 2
    };
    const passengerCount = 2;
    const actualFareBreakup = fareBreakUpGenerator(fareDetails, passengerCount);

    expect(actualFareBreakup).toStrictEqual(expectedFareBreakup);
  });

  it("should append pm as per 12hour format if time is later than 12", () => {
    const timeIn24HourFormat = "23:40";
    const expected12hourFormat = "11:40 pm";
    const actualTime = appendAM_PM(timeIn24HourFormat);

    expect(actualTime).toStrictEqual(expected12hourFormat);
  });

  it("should append am as per 12hour format if time is earlier than 12", () => {
    const timeIn24HourFormat = "03:40";
    const expected12hourFormat = "3:40 am";
    const actualTime = appendAM_PM(timeIn24HourFormat);

    expect(actualTime).toStrictEqual(expected12hourFormat);
  });

  it("should append pm as per 12hour format if time is 12 in the noon", () => {
    const timeIn24HourFormat = "12:00";
    const expected12hourFormat = "12:00 pm";
    const actualTime = appendAM_PM(timeIn24HourFormat);

    expect(actualTime).toStrictEqual(expected12hourFormat);
  });

  it("should append am as per 12hour format if time is 12 in the night", () => {
    const timeIn24HourFormat = "00:00";
    const expected12hourFormat = "0:00 am";
    const actualTime = appendAM_PM(timeIn24HourFormat);

    expect(actualTime).toStrictEqual(expected12hourFormat);
  });

  it("should add two decimal places after an amount and followed by Rs.", () => {
    const expectedDecimalNumber = "Rs. 14.00";
    const numberWithoutDecimal = 14;
    const actualDecimalNumber = addTwoDecimalPlace(numberWithoutDecimal);

    expect(actualDecimalNumber).toStrictEqual(expectedDecimalNumber);
  });
});
