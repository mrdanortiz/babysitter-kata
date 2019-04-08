import { familyACalculations } from "./familyACalculations";
import { totalHoursWorked } from "./totalHoursWorked";

it("calculates the rate for family A if worked from 5pm-1am", () => {
    const totalHours = totalHoursWorked(17, 1);
    expect(familyACalculations(totalHours)).toEqual(130);
});
