import { Interval, DateTime } from "luxon";

const timeBlocks = {
    fivePM: DateTime.fromObject({ hour: 17, zone: "America/Chicago" }),
    elevenPM: DateTime.fromObject({ hour: 23, zone: "America/Chicago" }),
    fourAM: DateTime.fromObject({ hour: 4, zone: "America/Chicago" }).plus({ hours: 24 }),
};

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
