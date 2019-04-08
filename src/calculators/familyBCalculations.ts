import { Interval } from "luxon";
import { timeBlocks } from "./timeBlocks";
import { calculatePay } from "./calculatePay";

const twelveAnHour = Interval.fromDateTimes(timeBlocks.fivePM, timeBlocks.tenPM);
const eightAnHour = Interval.fromDateTimes(timeBlocks.tenPM, timeBlocks.twelveAM);
const sixteenAnHour = Interval.fromDateTimes(timeBlocks.twelveAM, timeBlocks.fourAM);

export const familyBCalculations = (totalHoursWorked: Interval) => {
    let totalPay = 0;

    if (totalHoursWorked.overlaps(twelveAnHour)) {
        totalPay = totalPay + calculatePay(totalHoursWorked, twelveAnHour, 12);
    }
    if (totalHoursWorked.overlaps(eightAnHour)) {
        totalPay = totalPay + calculatePay(totalHoursWorked, eightAnHour, 8);
    }
    if (totalHoursWorked.overlaps(sixteenAnHour)) {
        totalPay = totalPay + calculatePay(totalHoursWorked, sixteenAnHour, 16);
    }
    return totalPay;
};
