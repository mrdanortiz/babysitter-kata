import { DateTime, Interval } from "luxon";
import { zone } from "./timeZone";

export const totalHoursWorked = (startHour: number, endHour: number) => {
    const startTime = DateTime.fromObject({ hour: startHour, zone });
    const endTime = DateTime.fromObject({ hour: endHour, zone });
    const startTimeWithDay = startTime.hour < 5 ? startTime.plus({ hours: 24 }) : startTime;
    const endTimeWithDay = endTime.hour < 5 ? endTime.plus({ hours: 24 }) : endTime;
    return Interval.fromDateTimes(startTimeWithDay, endTimeWithDay);
};
