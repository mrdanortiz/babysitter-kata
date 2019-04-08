import { Interval } from "luxon";

export const calculatePay = (totalHoursWorked: Interval, payRateInterval: Interval, payRate: number) =>
    totalHoursWorked.intersection(payRateInterval).toDuration("hours").hours * payRate;
