import { familyACalculations } from "./familyACalculations";
import { familyBCalculations } from "./familyBCalculations";
import { familyCCalculations } from "./familyCCalculations";
import { totalHoursWorked } from "./totalHoursWorked";

export const familySelection = (family: string, startHour: number, endHour: number) => {
    const totalHours = totalHoursWorked(startHour, endHour);

    if (family === "A") {
        return familyACalculations(totalHours);
    } else if (family === "B") {
        return familyBCalculations(totalHours);
    } else {
        return familyCCalculations(totalHours);
    }
};
