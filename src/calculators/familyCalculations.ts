import { Interval } from "luxon";
import { familyRates } from "./familyRates";

export const familyCalculations = (totalHoursWorked: Interval, familyLetter: string) => {
    let totalPay = 0;

    familyLetter && familyRates[familyLetter].map((family: { interval: Interval; rate: number; }) => {
        let hours = 0;
        const overlap = totalHoursWorked.intersection(family.interval);
        if (overlap) {
            hours = overlap.toDuration("hours").hours;
        }
        totalPay = totalPay + (hours * family.rate);
    });

    return totalPay;
};
