import { familyCalculations } from "./familyCalculations";
import { totalHoursWorked } from "./totalHoursWorked";

const tests = [
    {
        family: "A",
        startTime: "5:00 PM",
        endTime: "2:00 AM",
        startHour: 17,
        endHour: 2,
        result: 150
    },
    {
        family: "A",
        startTime: "6:00 PM",
        endTime: "9:00 PM",
        startHour: 18,
        endHour: 21,
        result: 45
    },
    {
        family: "A",
        startTime: "9:00 PM",
        endTime: "4:00 AM",
        startHour: 21,
        endHour: 4,
        result: 130
    },
    {
        family: "A",
        startTime: "1:00 AM",
        endTime: "3:00 AM",
        startHour: 1,
        endHour: 3,
        result: 40
    },
    {
        family: "B",
        startTime: "5:00 PM",
        endTime: "2:00 AM",
        startHour: 17,
        endHour: 2,
        result: 108
    },
    {
        family: "B",
        startTime: "6:00 PM",
        endTime: "9:00 PM",
        startHour: 18,
        endHour: 21,
        result: 36
    },
    {
        family: "B",
        startTime: "9:00 PM",
        endTime: "4:00 AM",
        startHour: 21,
        endHour: 4,
        result: 92
    },
    {
        family: "B",
        startTime: "1:00 AM",
        endTime: "3:00 AM",
        startHour: 1,
        endHour: 3,
        result: 32
    },
    {
        family: "C",
        startTime: "5:00 PM",
        endTime: "2:00 AM",
        startHour: 17,
        endHour: 2,
        result: 159
    },
    {
        family: "C",
        startTime: "6:00 PM",
        endTime: "9:00 PM",
        startHour: 18,
        endHour: 21,
        result: 63
    },
    {
        family: "C",
        startTime: "9:00 PM",
        endTime: "4:00 AM",
        startHour: 21,
        endHour: 4,
        result: 105
    },
    {
        family: "C",
        startTime: "1:00 AM",
        endTime: "3:00 AM",
        startHour: 1,
        endHour: 3,
        result: 30
    }
];

tests.map((test) =>
    it(`calculates the rate for family ${test.family} if worked from ${test.startTime} - ${test.endTime}`, () => {
        const totalHours = totalHoursWorked(test.startHour, test.endHour);
        expect(familyCalculations(totalHours, test.family)).toEqual(test.result);
    })
);
