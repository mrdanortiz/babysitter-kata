import { familyACalculations } from "./familyACalculations";
import { totalHoursWorked } from "./totalHoursWorked";

const tests = [
    {
        startTime: "5:00 PM",
        endTime: "2:00 AM",
        startHour: 17,
        endHour: 2,
        result: 150
    },
    {
        startTime: "6:00 PM",
        endTime: "9:00 PM",
        startHour: 18,
        endHour: 21,
        result: 45
    },
    {
        startTime: "9:00 PM",
        endTime: "4:00 AM",
        startHour: 21,
        endHour: 4,
        result: 130
    },
    {
        startTime: "1:00 AM",
        endTime: "3:00 AM",
        startHour: 1,
        endHour: 3,
        result: 40
    }
];

tests.map((test) =>
    it(`calculates the rate for family A if worked from ${test.startTime} - ${test.endTime}`, () => {
        const totalHours = totalHoursWorked(test.startHour, test.endHour);
        expect(familyACalculations(totalHours)).toEqual(test.result);
    })
);
