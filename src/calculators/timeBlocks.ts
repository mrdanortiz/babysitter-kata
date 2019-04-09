import { DateTime } from "luxon";
import { zone } from "./timezone";

export const timeBlocks = {
    fivePM: DateTime.fromObject({ hour: 17, zone }),
    elevenPM: DateTime.fromObject({ hour: 23, zone }),
    fourAM: DateTime.fromObject({ hour: 4, zone }).plus({ hours: 24 }),
    tenPM: DateTime.fromObject({ hour: 22, zone }),
    twelveAM: DateTime.fromObject({ hour: 0, zone }).plus({ hours: 24 }),
    ninePM: DateTime.fromObject({ hour: 21, zone })
};
