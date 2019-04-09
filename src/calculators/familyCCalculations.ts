import { Interval } from "luxon";
import { timeBlocks } from "./timeBlocks";
import { calculatePay } from "./calculatePay";

const twentyOneAnHour = Interval.fromDateTimes(timeBlocks.fivePM, timeBlocks.ninePM);
const fifteenAnHour = Interval.fromDateTimes(timeBlocks.ninePM, timeBlocks.fourAM);

export const familyCCalculations = (totalHoursWorked: Interval) => {
    let totalPay = 0;

    if (totalHoursWorked.overlaps(twentyOneAnHour)) {
        totalPay = totalPay + calculatePay(totalHoursWorked, twentyOneAnHour, 21)
    }
    if (totalHoursWorked.overlaps(fifteenAnHour)) {
        totalPay = totalPay + calculatePay(totalHoursWorked, fifteenAnHour, 15)
    }
    return totalPay;
};
