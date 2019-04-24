import { Interval } from "luxon";
import { timeBlocks } from "./timeBlocks";

export interface familyIntervals {
    "A": Array<{
        interval: Interval;
        rate: number;
    }>;
    "B": Array<{
        interval: Interval;
        rate: number;
    }>;
    "C": Array<{
        interval: Interval;
        rate: number;
    }>;

}

export const familyRates: familyIntervals = {
    "A": [
        {
            interval: Interval.fromDateTimes(timeBlocks.fivePM, timeBlocks.elevenPM),
            rate: 15
        },
        {
            interval: Interval.fromDateTimes(timeBlocks.elevenPM, timeBlocks.fourAM),
            rate: 20
        }
    ],
    "B": [
        {
            interval: Interval.fromDateTimes(timeBlocks.fivePM, timeBlocks.tenPM),
            rate: 12
        },
        {
            interval: Interval.fromDateTimes(timeBlocks.tenPM, timeBlocks.twelveAM),
            rate: 8
        },
        {
            interval: Interval.fromDateTimes(timeBlocks.twelveAM, timeBlocks.fourAM),
            rate: 16
        }
    ],
    "C": [
        {
            interval: Interval.fromDateTimes(timeBlocks.fivePM, timeBlocks.ninePM),
            rate: 21
        },
        {
            interval: Interval.fromDateTimes(timeBlocks.ninePM, timeBlocks.fourAM),
            rate: 15
        }
    ]
};
