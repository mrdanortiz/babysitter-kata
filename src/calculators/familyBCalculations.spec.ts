import { familyBCalculations } from "./familyBCalculations";
import { totalHoursWorked } from "./totalHoursWorked";

it("calculates the rate for family B if worked from 5pm-4am", () => {
    const totalHours = totalHoursWorked(17, 4);
    expect(familyBCalculations(totalHours)).toEqual(140);
});
