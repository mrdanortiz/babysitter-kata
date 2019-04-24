import { totalHoursWorked } from "./totalHoursWorked";
import { familyCalculations } from "./familyCalculations";

export const familySelection = (family: string, startHour: number, endHour: number) => {
    const totalHours = totalHoursWorked(startHour, endHour);
    return familyCalculations(totalHours, family);
};
