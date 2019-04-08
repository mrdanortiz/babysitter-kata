import { Interval } from "luxon";
import { timeBlocks } from "./timeBlocks";

const fifteenAnHour = Interval.fromDateTimes(timeBlocks.fivePM, timeBlocks.elevenPM);
const twentyAnHour = Interval.fromDateTimes(timeBlocks.elevenPM, timeBlocks.fourAM);

export const familyACalculations = (totalHoursWorked: Interval) => {
    let totalPay = 0;

    if (totalHoursWorked.overlaps(fifteenAnHour)) {
        totalPay = totalPay + totalHoursWorked.intersection(fifteenAnHour).toDuration("hours").hours * 15;
    }
    if (totalHoursWorked.overlaps(twentyAnHour)) {
        totalPay = totalPay + totalHoursWorked.intersection(twentyAnHour).toDuration("hours").hours * 20;
    }
    return totalPay;
};
