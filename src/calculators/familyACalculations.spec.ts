import { DateTime, Interval } from "luxon";
import { familyACalculations } from "./familyACalculations";

it("calculates the rate for family A if worked from 5pm-1am", () => {
    const startTime = DateTime.fromObject({ hour: 17, zone: "America/Chicago" });
    const endTime = DateTime.fromObject({ hour: 1, zone: "America/Chicago" });
    const startTimeWithDay = startTime.hour < 5 ? startTime.plus({ hours: 24 }) : startTime;
    const endTimeWithDay = endTime.hour < 5 ? endTime.plus({ hours: 24 }) : endTime;
    const totalHoursWorked = Interval.fromDateTimes(startTimeWithDay, endTimeWithDay);
    expect(familyACalculations(totalHoursWorked)).toEqual(130);
});
