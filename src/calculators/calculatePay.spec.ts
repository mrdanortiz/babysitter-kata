import { DateTime, Interval } from "luxon";
import { calculatePay } from "./calculatePay";
import { timeBlocks } from "./timeBlocks";
import { zone } from "./timezone";

it("calculates the pay for the timeBlock worked", () => {
    const startTime = DateTime.fromObject({ hour: 17, zone });
    const endTime = DateTime.fromObject({ hour: 4, zone });
    const startTimeWithDay = startTime.hour < 5 ? startTime.plus({ hours: 24 }) : startTime;
    const endTimeWithDay = endTime.hour < 5 ? endTime.plus({ hours: 24 }) : endTime;
    const totalHoursWorked = Interval.fromDateTimes(startTimeWithDay, endTimeWithDay);
    const twelveAnHour = Interval.fromDateTimes(timeBlocks.fivePM, timeBlocks.tenPM);
    expect(calculatePay(totalHoursWorked, twelveAnHour, 12)).toEqual(60);
});
