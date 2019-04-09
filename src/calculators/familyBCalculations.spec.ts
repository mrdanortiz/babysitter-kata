import { familyBCalculations } from "./familyBCalculations";
import { totalHoursWorked } from "./totalHoursWorked";

const tests = [
    {
        startTime: "5:00 PM",
        endTime: "2:00 AM",
        startHour: 17,
        endHour: 2,
        result: 108
    },
    {
        startTime: "6:00 PM",
        endTime: "9:00 PM",
        startHour: 18,
        endHour: 21,
        result: 36
    },
    {
        startTime: "9:00 PM",
        endTime: "4:00 AM",
        startHour: 21,
        endHour: 4,
        result: 92
    },
    {
        startTime: "1:00 AM",
        endTime: "3:00 AM",
        startHour: 1,
        endHour: 3,
        result: 32
    }
];

tests.map((test) =>
    it(`calculates the rate for family B if worked from ${test.startTime} - ${test.endTime}`, () => {
        const totalHours = totalHoursWorked(test.startHour, test.endHour);
        expect(familyBCalculations(totalHours)).toEqual(test.result);
    })
);
