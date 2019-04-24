import { familySelection } from "./familySelection";

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
    ,
    {
        family: "C",
        startTime: "10:00 PM",
        endTime: "1:00 AM",
        startHour: 22,
        endHour: 1,
        result: 45
    },
    {
        family: "C",
        startTime: "1:00 AM",
        endTime: "3:00 AM",
        startHour: 1,
        endHour: 3,
        result: 30
    },
    {
        family: "",
        startTime: "1:00 AM",
        endTime: "3:00 AM",
        startHour: 1,
        endHour: 3,
        result: 0
    }
];

tests.map((test) =>
    it(`calculates based on family ${test.family} from ${test.startTime} - ${test.endTime}`, () => {
        expect(familySelection(test.family, test.startHour, test.endHour)).toEqual(test.result);
    })
);
